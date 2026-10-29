pipeline {
    agent none

    stages {

        stage('Parallel Execution') {

            parallel {

                stage('Shard1') {
                    agent { label 'windows' }

                    steps {
                        checkout scm
                        bat 'npm ci'
                        script {
                             def exitCode = bat(
                                    script: 'npx playwright test --shard=1/3',
                                    returnStatus: true
                                )
                                echo "Shard1 exit code: ${exitCode}"
                                env.SHARD1_STATUS = exitCode.toString()
                                }
                    }
                    post {
                        always {
                            script {
                                if (fileExists('test-results/results.json')) {
                                    bat 'copy test-results\\results.json shard1-results.json'
                                }
                            }

                            stash includes: 'shard1-results.json',
                                name: 'shard1-results',
                                allowEmpty: true
                        }
                    }
                }

                stage('Shard2') {
                    agent { label 'linux' }

                    steps {
                        checkout scm
                        sh 'npm ci'
                        script {
                                def exitCode = sh(
                                    script: 'npx playwright test --shard=2/3',
                                    returnStatus: true
                                )
                               echo "Shard2 exit code: ${exitCode}" 
                               env.SHARD2_STATUS = exitCode.toString()
                             }
                    }

                    post {
                        always {
                            sh '''
                            if [ -f test-results/results.json ]; then
                                cp test-results/results.json shard2-results.json
                            fi
                            '''

                            stash includes: 'shard2-results.json',
                                name: 'shard2-results',
                                allowEmpty: true
                        }
                    }
                }
                stage('Shard3') {
                    agent { label 'linux' }

                    steps {
                        checkout scm
                        sh 'npm ci'
                        script {
                                def exitCode =sh(
                                    script: 'npx playwright test --shard=3/3',
                                    returnStatus: true
                                )
                                echo "Shard3 exit code: ${exitCode}" 
                                env.SHARD3_STATUS = exitCode.toString()
                             }
                    }

                    post {
                        always {
                            sh '''
                            if [ -f test-results/results.json ]; then
                                cp test-results/results.json shard3-results.json
                            fi
                            '''

                            stash includes: 'shard3-results.json',
                                name: 'shard3-results',
                                allowEmpty: true
                        }
                    }
                }
            }
        }
        stage('Publish Metrics') {
            agent { label 'windows' }

            steps {
                deleteDir()
                checkout scm
                unstash 'shard1-results'
                unstash 'shard2-results'
                unstash 'shard3-results'

                bat 'node push-metrics.js'
            }
        }
    }
     post {
        always {
            archiveArtifacts artifacts: 'test-results/**'
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }
    }
}