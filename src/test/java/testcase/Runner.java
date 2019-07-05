package testcase;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//tags which "tag1","tag2" are AnDing 
//tags which "tag1 , tag2" are ORing
/*extends AbstractTestNGCucumberTests it is used for running using testng */
@RunWith(Cucumber.class)
@CucumberOptions(features = "feature", glue = { "stepDefination" }, tags = { "~@multipleLogin"})
public class Runner {

}
