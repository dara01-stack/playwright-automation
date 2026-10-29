const fs = require('fs');
const axios = require('axios');

async function pushMetrics() {
  const files = [
  'shard1-results.json',
  'shard2-results.json',
  'shard3-results.json'
];

const browserMetrics = {
  chromium: {
    passed: 0,
    failed: 0,
    skipped: 0
  },
  firefox: {
    passed: 0,
    failed: 0,
    skipped: 0
  }
}
function processSuite(suite) {

  if (suite.specs) {

    for (const spec of suite.specs) {

      if (!spec.tests) continue;

      for (const test of spec.tests) {

        const browser = test.projectName;
        console.log(`Browser detected: ${browser}`);
        if (!browserMetrics[browser]) {
          browserMetrics[browser] = {
            passed: 0,
            failed: 0,
            skipped: 0
          };
        }

        for (const result of test.results) {

          if (result.status === 'passed')
            browserMetrics[browser].passed++;

          if (result.status === 'failed')
            browserMetrics[browser].failed++;

          if (result.status === 'skipped')
            browserMetrics[browser].skipped++;
        }
      }
    }
  }

  if (suite.suites) {
    for (const child of suite.suites) {
      processSuite(child);
    }
  }
}
for (const file of files) {

  const report = JSON.parse(
    fs.readFileSync(file, 'utf8')
  );

  for (const suite of report.suites) {
    processSuite(suite);
  }
}

let passed = 0;
let failed = 0;
let skipped = 0;
let flaky = 0;
let duration = 0;

for (const file of files) {
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));

  passed += report.stats.expected || 0;
  failed += report.stats.unexpected || 0;
  skipped += report.stats.skipped || 0;
  flaky += report.stats.flaky || 0;
  duration += report.stats.duration || 0;
}

let metrics = '';

for (const browser of Object.keys(browserMetrics)) {
  metrics += `
playwright_tests{browser="${browser}",status="passed"} ${browserMetrics[browser].passed}
playwright_tests{browser="${browser}",status="failed"} ${browserMetrics[browser].failed}
playwright_tests{browser="${browser}",status="skipped"} ${browserMetrics[browser].skipped}
`;
}

metrics += `
playwright_execution_duration_seconds ${(duration / 1000).toFixed(2)}
playwright_build_status ${failed > 0 ? 0 : 1}
`;
// const metrics = `
//   playwright_tests{browser="chromium",status="passed"} ${passed}
//   playwright_tests{browser="chromium",status="failed"} ${failed}
//   playwright_tests{browser="chromium",status="skipped"} ${skipped}
//   playwright_tests{browser="chromium",status="flaky"} ${flaky}
//   playwright_execution_duration_seconds{browser="chromium"} ${(duration / 1000).toFixed(2)}

  // playwright_tests{browser="firefox",status="passed"} ${passed}
  // playwright_tests{browser="firefox",status="failed"} ${failed}
  // playwright_tests{browser="firefox",status="skipped"} ${skipped}
  // playwright_tests{browser="firefox",status="flaky"} ${flaky}
  // playwright_execution_duration_seconds{browser="firefox"} ${(duration / 1000).toFixed(2)}

console.log('====== METRICS ======');
console.log(metrics);
console.log('=====================');

  await axios.post(
    'http://localhost:9091/metrics/job/playwright',
    metrics,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );

  console.log('✅ Metrics pushed successfully');
 
}
 
pushMetrics().catch(console.error);