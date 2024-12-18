Repo Web path = "https://github.com/Baskaran150/WebDriverIO/tree/main"

# WebDriverIO Test Automation

This repository contains an example setup for WebDriverIO to execute automated tests on different browsers (e.g., Chrome, Firefox, Edge) and view test results using Allure reporting.

## Prerequisites

Before running the tests, ensure that you have the following tools installed:

1. **Node.js**: Install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. **WebDriverIO**: This is the framework used for running the tests.
3. **Allure Reporter**: Used for generating and viewing the test reports.

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/Baskaran150/WebDriverIO.git


### 2. Install Dependencies

In the project folder, run the following command to install all the required dependencies:

npm install


### 3. Install WebDriver Manager

If you haven't already, you'll need to install WebDriver manager to download and manage the WebDriver binaries for different browsers. You can do this by running:


npx wdio config


This command will prompt you to configure your WebDriverIO setup. After the configuration, WebDriver manager will automatically download the necessary WebDriver binaries.

### 4. Running the Tests

To run the tests on a specific browser, use the `--capabilities` flag with the desired browser:

#### For Chrome:

npm run test:chrome

#### For Firefox:

npm run test:firefox

#### For Microsoft Edge:

npm run test:edge

### 8. View Allure Reports

After running the tests, the Allure results will be saved in the `allure-results` folder. To generate the Allure report, run the following command:


npx allure serve allure-results


This will launch a local server where you can view the Allure report in your browser.

---

## Test Execution Flow

- When you run the tests, WebDriverIO will execute them on the configured browser.
- The results are saved in the `allure-results` directory.
- After running the tests, Allure generates a report that can be viewed in a browser, providing detailed test execution logs and insights.

---

## Additional Information

### Customize Capabilities

You can modify the capabilities in `wdio.conf.js` to customize which browsers or devices you'd like to run the tests on. You can add more browsers, operating systems, or even headless configurations as needed.


## Troubleshooting

If you run into issues, ensure that you have the correct WebDriver binaries installed, and that your browser versions are compatible with WebDriver.

Additionally, check the WebDriver logs and Allure reports for detailed information on what went wrong.

---

Happy Testing! 🎉
