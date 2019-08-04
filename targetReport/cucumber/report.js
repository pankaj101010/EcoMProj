$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1277851100,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat keyword.Keyword.openBrowser(Keyword.java:59)\r\n\tat stepDefination.BaseClass.setUp(BaseClass.java:10)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_should_enter_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_should_sucessfully_login()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2668579700,
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.util.Objects.requireNonNull(Objects.java:221)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:65)\r\n\tat keyword.Keyword.getActionObject(Keyword.java:175)\r\n\tat pageObjects.ManageAddresses.onProfile(ManageAddresses.java:38)\r\n\tat stepDefination.AddressManage.user_should_click_on_profile(AddressManage.java:19)\r\n\tat ✽.Given user should click on profile(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddressManage.user_then_click_on_manageAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddressManage.user_should_click_on_address()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24615900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$001(AjaxElementLocator.java:39)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:165)\r\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:51)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:95)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat pageObjects.AddressPage.name(AddressPage.java:27)\r\n\tat stepDefination.NewAddress.name_of_Customer(NewAddress.java:11)\r\n\tat ✽.Given Name of Customer(Login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAddress.customer_mobile_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.customer_pin_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.customer_locality()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.customer_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.customer_City()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.state_where_product_want_to_be_shipped()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.address_landmark()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.alternate_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAddress.address_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 340500,
  "error_message": "java.lang.NullPointerException\r\n\tat keyword.Keyword.getData(Keyword.java:92)\r\n\tat keyword.Keyword.onClick(Keyword.java:271)\r\n\tat stepDefination.BaseClass.tearDown(BaseClass.java:17)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});