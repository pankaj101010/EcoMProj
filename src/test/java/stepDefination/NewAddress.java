package stepDefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObjects.AddressPage;

public class NewAddress {
	AddressPage page = new AddressPage();
	@Given("^Name of Customer$")
	public void name_of_Customer() throws Throwable {
	    page.name("pankaj D");
	   
	}

	@Then("^Customer mobile number$")
	public void customer_mobile_number() throws Throwable {
	    page.number("99999999");
	   
	}

	@Then("^Customer pin code$")
	public void customer_pin_code() throws Throwable {
	   page.pincode("444444"); 
	   
	}

	@Then("^Customer locality$")
	public void customer_locality() throws Throwable {
	    page.locality("nagpur");
	   
	}

	@Then("^Customer  Address$")
	public void customer_Address() throws Throwable {
	    
	   
	}

	@Then("^Customer City$")
	public void customer_City() throws Throwable {
	    
	   
	}

	@Then("^State where product want to be shipped$")
	public void state_where_product_want_to_be_shipped() throws Throwable {
	    
	   
	}

	@Then("^Address landmark$")
	public void address_landmark() throws Throwable {
	    
	   
	}

	@Then("^Alternate phone number$")
	public void alternate_phone_number() throws Throwable {
	    
	   
	}

	@Then("^Address Type$")
	public void address_Type() throws Throwable {
	    
	   
	}
	
}
