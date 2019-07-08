package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import com.relevantcodes.extentreports.model.Log;

import keyword.Constants;
import keyword.Keyword;
import utility.Logconfig;

public class LoginPage {
	//WebDriver driver;
	Logconfig log = new Logconfig();

	public LoginPage(WebDriver driver) {
		//this.driver = driver;
		PageFactory.initElements(new AjaxElementLocatorFactory(Constants.driver, 30), this);
	}

	@CacheLookup
	@FindBy(how = How.XPATH, using = "(//input[@type='text'])[2]")
	WebElement username;
	@CacheLookup
	@FindBy(how = How.XPATH, using = "//input[@type='password']")
	WebElement password;
	@CacheLookup
	@FindBy(how = How.XPATH, using = "(//button[@type='submit'])[2]")
	WebElement click;

	public void userName(String user) {
		log.startTestCase("LoginPage");
		username.sendKeys(user);
	    log.info("username webelement detected");
	    log.error("webelement not found");
	}

	public void passWord(String pass) {
		password.sendKeys(pass);
		log.debug("password debugging");
	}

	public void click() {
		click.click();
		log.warn("should click on button");
		Keyword.sleepTime(2000);
	}
}
