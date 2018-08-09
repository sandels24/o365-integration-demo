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
                bat "@FOR /f "tokens=*" %i IN ('docker-machine env') DO @%i"
                bat 'docker build -t o365-app .'
            }
        }
    }
}
