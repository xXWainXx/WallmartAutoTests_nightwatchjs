module.exports = {
    beforeEach : function(browser) {
      var signUp = browser.page.signUpPage();
      signUp.navigate();
      signUp.waitForElementVisible('@keepMeSignInCheckbox', 5000);

      signUp.getValue("@keepMeSignInCheckbox", function(result) {      
        if (result.value === 'false') {
          browser.execute(function() {
            document.getElementById('checkbox-0').click();
          });
        }
      });

      signUp.getValue("@emailMeCheckbox", function(result) {      
        if (result.value === 'false') {
          browser.execute(function() {
            document.getElementById('checkbox-1').click();
          });
        }
      });
    },

    'Create user with all valid data and without "Keep me sign in" and "Email me" checkbox' : function (browser) {
        var signUp = browser.page.signUpPage();
        browser.execute(function() {
          document.getElementById('checkbox-0').click();
        });
        browser.execute(function() {
          document.getElementById('checkbox-1').click();
        });
        signUp.setEmail()
          .sendKeys('@firstName', 'Alex')
          .sendKeys('@lastName', 'Test')
          .sendKeys('@password', '1234567')
          .click('@createAccountButton');

        browser.waitForElementVisible('#global-search-input', 5000);
        browser.verify.title('Account');

        browser.url("https://www.walmart.com/account/logout");
        browser.end();
    },

    'Create user with all valid data and with "Keep me sign in" checkbox' : function (browser) {
      var signUp = browser.page.signUpPage();
      browser.execute(function() {
        document.getElementById('checkbox-0').click();
      });
      signUp.setEmail()
        .sendKeys('@firstName', 'Alex')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '1234567')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Create user with all valid data and with "Keep me sign in" and "Email me" checkbox' : function (browser) {
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', 'Alex')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '1234567')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Create user with all valid data and "Email me" checkbox' : function (browser) {
      var signUp = browser.page.signUpPage();
      browser.execute(function() {
        document.getElementById('checkbox-1').click();
      });
      signUp.setEmail()
        .sendKeys('@firstName', 'Alex')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '1234567')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Create user with latters and numbers in first and last name fields' : function (browser) {
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', 'Alex123')
        .sendKeys('@lastName', 'Test321')
        .sendKeys('@password', '1234567')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Create user with password lenght 6 charaters' : function (browser) {
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', 'Alex')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '123456')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Create user with password lenght 12 charaters' : function (browser) {
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', 'Alex')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '123456789012')
        .click('@createAccountButton');

      browser.waitForElementVisible('#global-search-input', 5000);
      browser.verify.title('Account');

      browser.url("https://www.walmart.com/account/logout");
      browser.end();
    },

    'Showing tips modal window after I set focus to password field' : function (browser) {
      var signUp = browser.page.signUpPage();

      signUp.sendKeys('@password', '123456789012');
      
      signUp.expect.element('@passwordTipsModal').to.be.visible;

      browser.end();
    },

    'Showing tips modal window after I click "?" button on "Keep me sign in" field' : function(browser) {
      var signUp = browser.page.signUpPage();

      signUp.click('@rememberMeTipsButton');
      
      signUp.expect.element('@rememberMeTipsModal').to.be.visible;

      browser.end();
    },

    'Create user with numbers in first name field' : function (browser) {
      var errorMessage = "Please enter a valid first name.";
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', '123')
        .sendKeys('@lastName', 'Test')
        .sendKeys('@password', '123456789012')
        .click('@createAccountButton');

      signUp.assert.containsText('@firstNameError', errorMessage);
      browser.end();
    },

    'Create user with numbers in last name field' : function (browser) {
      var errorMessage = "Please enter a valid last name.";
      var signUp = browser.page.signUpPage();

      signUp.setEmail()
        .sendKeys('@firstName', 'test')
        .sendKeys('@lastName', '123')
        .sendKeys('@password', '123456789012')
        .click('@createAccountButton');

      signUp.assert.containsText('@lastNameError', errorMessage);
      browser.end();
    },
  };