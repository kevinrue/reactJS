import { Accounts } from 'meteor/accounts-base';
 
// Username-based login: see https://docs.meteor.com/api/accounts.html#Accounts-ui-config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

// Prevent users from signing up themselves
Accounts.config({
  forbidClientAccountCreation: true
})