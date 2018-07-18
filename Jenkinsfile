pipeline {
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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
