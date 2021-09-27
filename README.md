# Test
Check In (1 test scenario)
Check Out (1 test scenario)

## Installation
Ensure that Node.js﻿ and npm﻿ are installed on your computer. Download the zip, unzipped the content, open your favorite IDE and open the project folder. Once inside, open a new terminal and type:
```
npm install testcafe
npm install dotenv
```
Create a .env file in the root directory of your project. Add the following environment-specific variables:

//URLS
```
//URLS
BASE_URL=https://www.example.com/iniciar-sesion

//CREDENTIALS
MY_EMAIL=jane.doe@texas.eu
MY_PASSWORD=example1234$
```

Do not forget to change the value of these variables, and provide those that will be used in the tests.

Note: BASE_URL is the url of the website that is going to be tested.

## Execution
Now, you are set up to run the tests. Run in the terminal:
```
npm run test-check-out
```
This will initialize the test scenario related to the Check Out scenario. If you want to run the check in scenario (it doesn't work yet), type:
```
npm run test-check-in
```
