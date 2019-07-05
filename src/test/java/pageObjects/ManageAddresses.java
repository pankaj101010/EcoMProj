package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import keyword.Constants;
import keyword.Keyword;

public class ManageAddresses {
	WebDriver driver;

	public ManageAddresses() {
		this.driver = Constants.driver;
		PageFactory.initElements(driver, this);
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), this);
	}

	@FindBy(how = How.XPATH, using = "(//div[@class='dHGf8H'])[1]/descendant::*[4]")
	WebElement clickonProfile;

	@FindBy(how = How.XPATH, using = "//div[contains(text(),'My Profile')]")
	WebElement myprofile;

	@FindAll({ 
		@FindBy(how = How.XPATH, using = "//div[contains(text(),'Manage Addresses')]"),
		@FindBy(how = How.XPATH, using = "(//div[@class='NqIFxw'])[1]") 
	})
	WebElement clickOnManageAdd;

	@FindBy(how = How.XPATH, using = "//div[@class='_2kr2AM']")
	WebElement Address;

	public void onProfile() {
		Keyword.getActionObject().moveToElement(clickonProfile).build().perform();
	}

	public void myProfile() {
		myprofile.click();
	}

	public void manageAddress() {
		clickOnManageAdd.click();
	}

	public void address() {
		Address.click();
	}
}
