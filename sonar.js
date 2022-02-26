const scanner = require('sonarqube-scanner')

scanner(
    {
        serverUrl: 'http://137.116.92.194:9090/',
        token: '27a7655fbca7ae494592229ed450fa8c49faee68',
        options: {
            'sonar.projectName': 'hexagonal-front',
            'sonar.projectKey': 'hexagonal-front',
            'sonar.projectDescription': 'proof of a hex architecture in frontend develoment',
            'sonar.javascript.coveragePlugin': 'lcov',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.sources': './src',
            'sonar.coverage.exclusions': 'src/**/*.spec.ts'
        }
    },
    () => process.exit()
)
