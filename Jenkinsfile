pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t o365-app .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push to docker hub') {
            steps {
                docker.withRegistry('https://https://hub.docker.com/r/sandels/o365-app/', 'sandels/Saisai123') {
                        sh 'docker push sandels/o365-app'
                    }
            }
        }
    }
}
