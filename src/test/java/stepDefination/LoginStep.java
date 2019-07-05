package stepDefination;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import keyword.Constants;
import keyword.Keyword;
import pageObjects.LoginPage;
import utility.Logconfig;
import utility.ReadConfig;

public class LoginStep {
	static {
		Keyword.openBrowser("chrome");
		Keyword.LaunchUrl("https://www.flipkart.com");
		Keyword.windowMaximize();
	}
	Logconfig log = new Logconfig();
	ReadConfig prop = new ReadConfig();
	LoginPage page = new LoginPage(Constants.driver);

	@Given("^user should enter valid username$")
	public void user_should_enter_valid_username() throws Throwable {
		page.userName(prop.getProperty("Email"));
        log.info("Email id validate successfully");
	}

	@Given("^user should enter valid password$")
	public void user_should_enter_valid_password() throws Throwable {
		page.passWord(prop.getProperty("Password"));
		log.info("Password validated");

	}

	@Then("^user should sucessfully login$")
	public void user_should_sucessfully_login() throws Throwable {
		page.click();
		log.info("successfully login");
		Thread.sleep(3000);
	}

}
