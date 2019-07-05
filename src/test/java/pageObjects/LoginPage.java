package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import keyword.Constants;
import keyword.Keyword;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver ) {
		this.driver =driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "(//input[@type='text'])[2]")
	WebElement username;
	@FindBy(how = How.XPATH, using = "//input[@type='password']")
	WebElement password;
	@FindBy(how = How.XPATH, using = "(//button[@type='submit'])[2]")
	WebElement click;

	public void userName(String user) {
		username.sendKeys(user);
	}

	public void passWord(String pass) {
		password.sendKeys(pass);
	}

	public void click() {
		click.click();
		Keyword.sleepTime(2000);
	}
}
