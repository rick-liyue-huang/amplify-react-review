# Amplify React Review

This is a review of the Amplify React workshop.

## Getting Started

This project was bootstrapped with [Create React App], and uses the [Amplify CLI] to create and manage AWS resources. It also need to use the [Amplify library] to interact with the AWS resources. Before we create this project, we need to git push the project to the GitHub.

To get started, you will need to install the Amplify CLI and configure it to use your AWS account. You will also need to install the Amplify library in your React project.

```bash
npm install -g @aws-amplify/cli
amplify configure
npm install aws-amplify @aws-amplify/ui-react
```

## Connect with AWS Amplify

To connect your React app with AWS Amplify, we start from Amplify hosting, and then click github to deploy repository to AWS Amplify. In the hosting environment, we will get the deployed project by Amplify, and then we click 'Backend environment' to create the project backend, which is the amplify configuration in amplify studio, and go to the project staging environment. Connect your app to this backend environment using the Amplify CLI by running the following command from your project root folder by using the following command:

```bash
amplify pull --appId d17oc9mp5ew9k7 --envName staging
```

and then we can see the amplify configuration in the project folder by using the following command:

```bash
Amplify AppID found: d17oc9mp5ew9k7. Amplify App name is: amplify-react-review
Backend environment staging found in Amplify Console app: amplify-react-review
? Choose your default editor: Visual Studio Code
✔ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
No AppSync API configured. Please add an API
? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment staging from the cloud.
✅

✅ Successfully pulled backend environment staging from the cloud.
Run 'amplify pull' to sync future upstream changes.
```

To select Amplify Studio, and then we can see the amplify configuration in the project folder by using the following command:

```bash
amplify console
```

## Add Authentication

To add authentication to your app, you can use the `withAuthenticator` higher-order component from the @aws-amplify/ui-react library. This component wraps your app and provides a sign-in and sign-up experience for your users. To use it, import the `withAuthenticator` component and wrap your app component with it. and also need to run the following command to add authentication to your app:

```bash
amplify add auth
```

and then we can see the amplify configuration in the project folder by using the following command:

```bash
? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.
```

and then we can see the amplify configuration in the project folder by using the following command:

```bash
amplify push -y
```
