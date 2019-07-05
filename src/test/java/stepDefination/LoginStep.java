package stepDefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import keyword.Constants;
import keyword.Keyword;
import pageObjects.LoginPage;
import utility.ReadConfig;

public class LoginStep {
	static {
		Keyword.openBrowser("chrome");
    	Keyword.LaunchUrl("https://www.flipkart.com");
	}
	ReadConfig prop = new ReadConfig();
	LoginPage page = new LoginPage(Constants.driver);
	@Given("^user should enter valid username$")
	public void user_should_enter_valid_username() throws Throwable {
	//	Keyword.LaunchUrl(prop.getProperty("Url"));
		page.userName(prop.getProperty("Email"));
		System.out.println("hi2");
	}

	@Given("^user should enter valid password$")
	public void user_should_enter_valid_password() throws Throwable {
		page.passWord(prop.getProperty("Password"));

	}

	@Then("^user should sucessfully login$")
	public void user_should_sucessfully_login() throws Throwable {
		page.click();
		Thread.sleep(3000);
	}
	
}
