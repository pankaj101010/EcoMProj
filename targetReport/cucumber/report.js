$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "In order to verify login function",
  "description": "",
  "id": "login;in-order-to-verify-login-function",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@singleLogin"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user should enter valid username",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user should enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should sucessfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_should_enter_valid_username()"
});
formatter.result({
  "duration": 52480797000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_enter_valid_password()"
});
formatter.result({
  "duration": 262099600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_sucessfully_login()"
});
formatter.result({
  "duration": 5962662900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "addressManage",
  "description": "",
  "id": "login;addressmanage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@ManageAddress"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user should click on profile",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user then click on manageAddress",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user should click on address",
  "keyword": "Then "
});
formatter.match({
  "location": "AddressManage.user_should_click_on_profile()"
});
formatter.result({
  "duration": 3515301100,
  "status": "passed"
});
formatter.match({
  "location": "AddressManage.user_then_click_on_manageAddress()"
});
formatter.result({
  "duration": 7096881800,
  "status": "passed"
});
formatter.match({
  "location": "AddressManage.user_should_click_on_address()"
});
formatter.result({
  "duration": 2101028800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Shipping Address should be updated",
  "description": "",
  "id": "login;shipping-address-should-be-updated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@UpdateAddress"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Name of Customer",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Customer mobile number",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Customer pin code",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Customer locality",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Customer  Address",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Customer City",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "State where product want to be shipped",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Address landmark",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Alternate phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Address Type",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAddress.name_of_Customer()"
});
formatter.result({
  "duration": 506107000,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.customer_mobile_number()"
});
formatter.result({
  "duration": 220657400,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.customer_pin_code()"
});
formatter.result({
  "duration": 198411800,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.customer_locality()"
});
formatter.result({
  "duration": 140410800,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.customer_Address()"
});
formatter.result({
  "duration": 58600,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.customer_City()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.state_where_product_want_to_be_shipped()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.address_landmark()"
});
formatter.result({
  "duration": 67300,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.alternate_phone_number()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "location": "NewAddress.address_Type()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
});