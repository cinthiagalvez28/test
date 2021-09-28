import loginPage from '../pages/LoginPage.js'
import dashboardPage from '../pages/DashboardPage.js'
import { URLS, CREDENTIALS } from '../data/Constants.js'

fixture('Check In feature testing user')
  .page`${URLS.LOGIN_URL}`

test('As a standard user, I should be able to log in and check in when I provide valid credentials', async t =>{
  await loginPage.submitLoginForm(CREDENTIALS.MY_USER.EMAIL, CREDENTIALS.MY_USER.PASSWORD)
  await t.click(dashboardPage.entradaButton)
  await t.click(dashboardPage.seguroButton)
  await t.wait(10000)
  await t.expect(dashboardPage.registradoTitle.innerText).eql('Entrada registrada')
})

