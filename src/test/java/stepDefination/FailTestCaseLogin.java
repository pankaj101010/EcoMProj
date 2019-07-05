package stepDefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import keyword.Constants;
import pageObjects.LoginPage;

public class FailTestCaseLogin {
	LoginPage page = new LoginPage(Constants.driver);
	@Given("^To check diffusers \"([^\"]*)\"$")
	public void to_check_diffusers(String user) throws Throwable {
	    page.userName(user);
	    
	}

	@Given("^To check diffpass \"([^\"]*)\"$")
	public void to_check_diffpass(String pass) throws Throwable {
	    page.passWord(pass);
	    
	}

	@Then("^To be sucessfully login$")
	public void to_be_sucessfully_login() throws Throwable {
	    page.click();
	}
}
