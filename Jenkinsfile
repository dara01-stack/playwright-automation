pipeline {
    agent none

    stages {

        stage('Parallel Execution') {

            parallel {

                stage('Shard1') {
                    agent { label 'windows' }

                    steps {
                        checkout scm
                        bat 'npx playwright test --shard=1/3'
                    }
                }

                stage('Shard2') {
                    agent { label 'linux' }

                    steps {
                        checkout scm
                        sh 'npx playwright test --shard=2/3'
                    }
                }
                stage('Shard3') {
                    agent { label 'linux' }

                    steps {
                        checkout scm
                        sh 'npx playwright test --shard=3/3'
                    }
                }
            }
        }
    }
}