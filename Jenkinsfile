pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t o365-app .'
            }
        }
        stage('Tag image') {
            steps {
                echo 'Tagging..'
                sh 'docker tag o365-app sandels/0365-app:latest'
            }
        }
        stage('Push to docker hub') {
            steps {
                echo 'Pushing....'
                sh 'docker push sandels/o365-app:latest'
            }
        }
    }
}
