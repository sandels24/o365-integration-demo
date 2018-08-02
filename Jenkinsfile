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
                sh 'node app.js'
            }
        }
    }
}
