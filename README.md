# quality-check-demo
Quality check repository
Test!!!!!!!

# NodeJS SonarQube Demo App

This is a simple Express API used for testing SonarQube integration with AWS CodePipeline.

## 🚀 Run the App
```bash
npm install
npm start
```
Visit [http://localhost:3000](http://localhost:3000)

## 🧪 Run Unit Tests
```bash
npm test
```

## 🔍 Local SonarQube Analysis
Replace `<EC2_PUBLIC_IP>` and `<SONAR_TOKEN>` in `sonar-project.properties` with actual values.

Then run:
```bash
sonar-scanner
```

Results appear in your SonarQube dashboard under **Node Demo App**.
