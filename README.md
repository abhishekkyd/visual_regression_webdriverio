## Visual regression testing using WebdriverIO

## Setup
* Install dependencies
`npm install`

## Running your tests
`npm test`

## Generate Report
`allure generate --clean && allure open`

## Note
- The screenshots captured are saved to the below folders:
1) Baseline screenshot - `./screenshots/baseline`
2) Actual screenshot - `./screenshots/actual`
3) Diff screenshot - `./screenshots/diff`
