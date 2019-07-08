package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import keyword.Keyword;

public class BaseClass {
    @Before("@singleLogin ")
	public void setUp() {
	 Keyword.openBrowser("chrome");
		Keyword.LaunchUrl("https://www.flipkart.com");
		Keyword.windowMaximize();
	}
	@After("@UpdateAddress")
	public void tearDown() 
	{
		Keyword.closeBrowser();
	}
	
}
