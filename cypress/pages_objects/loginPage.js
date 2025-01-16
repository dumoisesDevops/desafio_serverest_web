class LoginPage {

  enterEmail(email) {
    cy.get('input[name="email"]').type(email); 
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password); 
  }

  clickLogin() {
    cy.get('button[type="submit"]').click(); 
  }

  login(userKey) {
    cy.fixture('login.json').then((loginData) => {
      const user = loginData[userKey];
      this.enterEmail(user.email);
      this.enterPassword(user.password);
      this.clickLogin();
    });
  }
}

export default LoginPage;
