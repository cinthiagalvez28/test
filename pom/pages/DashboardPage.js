import { Selector } from 'testcafe'

class DashboardPage {
  constructor(){
    this.entradaButton = Selector('div[data-v-8733fc98]')
    this.entradaRegistradaTitle = Selector('h1[data-v-534a445f]')
    this.salidaButton = Selector('div[data-v-8733fc98]')
    this.seguroButton = Selector('button[type="submit"]')
    this.salidaRegistradaTitle = Selector('h1[data-v-534a445f]')
  }
}
export default new DashboardPage()
