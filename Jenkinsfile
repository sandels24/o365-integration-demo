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
                sh 'docker login -u sandels -p Saisai123'
                //docker.withRegistry('https://https://hub.docker.com/r/sandels/o365-app/', 'sandels/Saisai123') {
                sh 'docker push o365-app'
                   // }
            }
        }
    }
}
