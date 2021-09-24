import { Selector,t } from 'testcafe'

class LoginPage {
  constructor(){
    this.emailInput = Selector('input[name="user"]')
    this.passwordInput = Selector('input[name="password"]')
    this.loginButton = Selector('button[data-qa="login-button"]')
    
  }

  async submitLoginForm(email,password){
    if(email != null){
      await t.typeText(this.emailInput, email, { paste:true })
    }
    if(password != null){
      await t.typeText(this.passwordInput, password, { paste:true })
    }
    await t.click(this.loginButton)
  }
}

export default new LoginPage()
