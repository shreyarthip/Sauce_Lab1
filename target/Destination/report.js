$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinvalid_username\u003e\" in username inputbox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\u003cinvalid_password\u003e\" in password inputbox",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": ";user-should-not-be-able-to-log-in-successfully;",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "invalid_password"
      ],
      "line": 25,
      "id": ";user-should-not-be-able-to-log-in-successfully;;1"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 26,
      "id": ";user-should-not-be-able-to-log-in-successfully;;2"
    },
    {
      "cells": [
        "",
        "admin123"
      ],
      "line": 27,
      "id": ";user-should-not-be-able-to-log-in-successfully;;3"
    },
    {
      "cells": [
        "admin@123",
        "password"
      ],
      "line": 28,
      "id": ";user-should-not-be-able-to-log-in-successfully;;4"
    },
    {
      "cells": [
        "123",
        "admin123"
      ],
      "line": 29,
      "id": ";user-should-not-be-able-to-log-in-successfully;;5"
    },
    {
      "cells": [
        "ADMIN520",
        "admin123"
      ],
      "line": 30,
      "id": ";user-should-not-be-able-to-log-in-successfully;;6"
    },
    {
      "cells": [
        "@admin",
        "ADMIN123"
      ],
      "line": 31,
      "id": ";user-should-not-be-able-to-log-in-successfully;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14039836100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"admin\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 570366500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 166647800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 109161100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 102829700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 53612700,
  "status": "passed"
});
formatter.after({
  "duration": 1747949100,
  "status": "passed"
});
formatter.before({
  "duration": 7961135800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 64428900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 137374700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 182153500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 180782500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 57073800,
  "status": "passed"
});
formatter.after({
  "duration": 526218200,
  "status": "passed"
});
formatter.before({
  "duration": 7662400900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"admin@123\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"password\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 73661200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 270970700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 213556100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 1052061200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 54822300,
  "status": "passed"
});
formatter.after({
  "duration": 561902800,
  "status": "passed"
});
formatter.before({
  "duration": 8023272100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"123\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 70836000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 158701100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 247229800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 787072400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 54344700,
  "status": "passed"
});
formatter.after({
  "duration": 4190353500,
  "status": "passed"
});
formatter.before({
  "duration": 7786034400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"ADMIN520\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 82853000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN520",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 239138800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 188606500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 686113600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 60567900,
  "status": "passed"
});
formatter.after({
  "duration": 237738900,
  "status": "passed"
});
formatter.before({
  "duration": 8291608700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"@admin\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"ADMIN123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 71962100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@admin",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 220785700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN123",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 194694600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 657320300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 46788000,
  "status": "passed"
});
formatter.after({
  "duration": 273133000,
  "status": "passed"
});
});