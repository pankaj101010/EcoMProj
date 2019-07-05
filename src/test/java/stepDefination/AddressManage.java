package stepDefination;

import org.apache.log4j.PropertyConfigurator;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import keyword.Keyword;
import pageObjects.ManageAddresses;
import utility.Logconfig;

public class AddressManage {
	ManageAddresses page = new ManageAddresses();
	Logconfig log = new Logconfig();

	@Given("^user should click on profile$")
	public void user_should_click_on_profile() throws Throwable {
		PropertyConfigurator.configure("log4j.properties");
		page.onProfile();
		log.info("profile opened");
		Keyword.sleepTime(1000);
	}

	@When("^user then click on manageAddress$")
	public void user_then_click_on_manageAddress() throws Throwable {
		page.myProfile();
		log.info("Profile setting opened");
		Keyword.sleepTime(1000);
		page.manageAddress();
		log.info("click on manage address");
		Keyword.sleepTime(1000);

	}

	@Then("^user should click on address$")
	public void user_should_click_on_address() throws Throwable {
		page.address();
		log.info("click on address");

	}

}
