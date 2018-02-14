var signUpCommands = {
    setEmail: function() {
        this.waitForElementVisible("@email", 5000);
        var emailAddress = "alex+" + Math.floor(Math.random() * 10000) + "@test.com";
        this.sendKeys("@email", emailAddress);
        return this;
    }
};

module.exports = {
    url: 'https://www.walmart.com/account/signup',
    commands: [signUpCommands],
    elements: {
        firstName: "input[name='firstName']",
        lastName: "input[name='lastName']",
        email: "input[name='email']",
        password: "input[name='password']",
        passwordShowButton: "button[data-automation-id='password-show-btn']",
        passwordHideButton: "button[data-automation-id='password-hide-btn']",
        keepMeSignInCheckbox: '#checkbox-0',
        emailMeCheckbox: '#checkbox-1',
        createAccountButton: "button[data-automation-id='signup-submit-btn']",
        signInButton: "button[data-automation-id='signup-sign-in-btn']",
        passwordTipsModal: ".password-help",
        rememberMeTipsButton: ".flowtip-flyout.remember-me-flyout button",
        rememberMeTipsModal: ".flowtip-flyout-modal",
        firstNameError: "form > div:nth-child(3) > label > div.error-label.ada-error-message > span.ada-error-text",
        lastNameError: "form > div:nth-child(4) > label > div.error-label.ada-error-message > span.ada-error-text",
        emailError: "form > div:nth-child(5) > label > div.error-label.ada-error-message > span.ada-error-text",
        passwordError: "form > div:nth-child(6) > div > div.js-password > label > div.error-label.ada-error-message > span.ada-error-text"
    }
};