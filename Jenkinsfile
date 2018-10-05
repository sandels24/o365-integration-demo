pipeline {
    agent any
    stages {
        stage ('checkout'){
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'docker version'
                bat 'docker build -t o365-app .'
            }
        }
    }
}
