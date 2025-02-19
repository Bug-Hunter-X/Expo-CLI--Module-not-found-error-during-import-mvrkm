# Expo CLI: Module Not Found Error

This repository demonstrates a common error encountered when using the Expo CLI: the "Module not found" error during module imports in React Native projects.  The `bug.js` file showcases the problematic code, while `bugSolution.js` offers solutions and best practices for preventing this issue.

## Problem

The primary cause of this error is attempting to import a module that either does not exist or is not correctly installed and linked in your project's dependencies.

## Solution

The solution file (`bugSolution.js`) illustrates several approaches to resolve this error, such as:

* **Double-checking the module name for typos.**
* **Verifying that the module is correctly installed using `expo install <package-name>`**
* **Ensuring the correct file path is used when importing the module.**
* **Cleaning and rebuilding the project using `expo prebuild` and `expo start`**
* **Checking if the module has peer dependencies that you also need to install.**

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install` to install dependencies (the bug file will intentionally have missing imports)
4. Run `expo start` and observe the error message.
5. Try to fix the error by following instructions in `bugSolution.js`

This repository is for educational purposes and aims to aid in understanding and resolving common import errors within Expo projects.