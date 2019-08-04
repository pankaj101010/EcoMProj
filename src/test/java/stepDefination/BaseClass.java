package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import keyword.Keyword;

public class BaseClass {
    @Before("@singleLogin")
	public void setUp() {
	 Keyword.openBrowser("chrome");
		Keyword.LaunchUrl("https://www.flipkart.com");
		Keyword.windowMaximize();
	}
	@After("@UpdateAddress")
	public void tearDown() 
	{
		Keyword.onClick("xpath", "(//div[@class='_3NNJZh row'])[6]");
		Keyword.sleepTime(1000);
		Keyword.closeBrowser();
	}
	
}
