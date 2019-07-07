package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import keyword.Constants;

public class AddressPage {
//WebDriver driver;
	public AddressPage() {
		//this.driver = Constants.driver;
		//PageFactory.initElements(driver, this);
		PageFactory.initElements(new AjaxElementLocatorFactory(Constants.driver, 30), this);
	}
	@FindBy(how = How.XPATH, using="//div[@class='uK6xOa'][1]/div[1]/input[@name='name']")
	WebElement Name;
	@FindBy(how =How.XPATH,using ="//div[@class='uK6xOa'][1]/div[2]/input[@name='phone']")
	WebElement mobileNumber;
	@FindBy(how =How.XPATH , using="//div[@class='uK6xOa'][2]/div/input[@name='pincode']")
	WebElement pincode;
	@FindBy(how =How.XPATH , using ="//div[@class='uK6xOa'][2]/div/input[@name='addressLine2']")
	WebElement locality;
	public void name(String name) {
		Name.sendKeys(name);
	} 
	public void number(String number) {
		mobileNumber.sendKeys(number);
	} 
	public void pincode(String pin_code) {
		pincode.sendKeys(pin_code);
	} 
	public void locality(String locality_Add) {
		locality.sendKeys(locality_Add);
	} 
	
}
