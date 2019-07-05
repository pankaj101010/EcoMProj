Feature: Login 
@singleLogin 
Scenario: In order to verify login function 
	Given user should enter valid username 
	And user should enter valid password 
	Then user should sucessfully login 
@multipleLogin 
Scenario Outline: In order to verify multiple login 
	Given To check diffusers "<username>" 
	And To check diffpass "<password>" 
	Then To be sucessfully login 
Examples: 

	| username | password | 
	| pankaj123   |  pankaj345  |
	| isdvndvv | 89235289475 |
@ManageAddress
Scenario: addressManage
 Given user should click on profile
 When user then click on manageAddress
 Then user should click on address	
	