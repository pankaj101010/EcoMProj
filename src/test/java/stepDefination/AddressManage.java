package stepDefination;

import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import keyword.Keyword;
import pageObjects.ManageAddresses;

public class AddressManage {
	ManageAddresses page = new ManageAddresses();
	@Given("^user should click on profile$")
	public void user_should_click_on_profile() throws Throwable {
	   page.onProfile();
	}

	@When("^user then click on manageAddress$")
	public void user_then_click_on_manageAddress() throws Throwable {
		page.myProfile();
		Keyword.sleepTime(2000);
	   page.manageAddress();
		Keyword.sleepTime(2000);
	   
	    
	}

	@Then("^user should click on address$")
	public void user_should_click_on_address() throws Throwable {
	   page.address();
	    
	}

}
