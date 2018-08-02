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
                //bat 'npm install'
                //bat 'node app.js'
                bat 'docker build -t o365-app .'
            }
        }
    }
}
