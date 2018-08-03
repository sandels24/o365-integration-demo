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
                sh 'docker build -t o365-app .'
            }
        }
    }
}
