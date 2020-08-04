package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDefs {
    HomePage homePage = new HomePage();

    @Given("^User is on homepage$")
    public void user_is_on_homepage() {
        homePage.verifyTextToHomepage();
    }

    @When("^User enter valid username$")
    public void user_enter_valid_username() {
        homePage.enterUserName();
    }
    @When("^User enter valid password$")
    public void user_enter_valid_password(){
        homePage.enterPassword();
    }
    @Then("^User should able to click on login button$")
    public void user_should_able_to_click_on_login_button(){
        homePage.clickLoginButton();
}
    @Then("^User should able to login successfully and user should see welcome page$")
    public void user_should_able_to_login_successfully_and_user_should_see_welcome_page(){
        homePage.verifyTextWelcomePage();
    }
    @When("^User enters \"([^\"]*)\" in username inputbox$")
    public void user_enters_in_username_inputbox(String invalid_username) {
        homePage.invalidUsername(invalid_username);
    }
    @When("^User enter \"([^\"]*)\" in password inputbox$")
    public void user_enter_in_password_inputbox(String invalid_password) {
        homePage.invalidPassword(invalid_password);
    }
    @Then("^User should not be able to log in successfully and user should get an error message$")
    public void user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message() {
        homePage.getErrorMessage();
    }

}
