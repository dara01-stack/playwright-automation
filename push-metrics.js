const fs = require('fs');
const axios = require('axios');

async function pushMetrics() {
  const files = [
  'shard1-results.json',
  'shard2-results.json',
  'shard3-results.json'
];

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
const metrics = `
  playwright_tests{browser="chromium",status="passed"} ${passed}
  playwright_tests{browser="chromium",status="failed"} ${failed}
  playwright_tests{browser="chromium",status="skipped"} ${skipped}
  playwright_tests{browser="chromium",status="flaky"} ${flaky}
  playwright_execution_duration_seconds{browser="chromium"} ${(duration / 1000).toFixed(2)}

  playwright_tests{browser="firefox",status="passed"} ${passed}
  playwright_tests{browser="firefox",status="failed"} ${failed}
  playwright_tests{browser="firefox",status="skipped"} ${skipped}
  playwright_tests{browser="firefox",status="flaky"} ${flaky}
  playwright_execution_duration_seconds{browser="firefox"} ${(duration / 1000).toFixed(2)}

  playwright_build_status ${failed > 0 ? 0 : 1}
`;

  console.log(metrics);

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