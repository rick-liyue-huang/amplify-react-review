## Amplify React Review

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

To connect your React app with AWS Amplify, we start from Amplify hosting, and then click github to deploy repository to AWS Amplify. you will need to run the following command in your project directory:

```bash
amplify init
```
