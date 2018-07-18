pipeline {
    agent any
    stages {
        stage ('checkout'){
            checkout scm
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t o365-app .'
            }
        }
    }
}
