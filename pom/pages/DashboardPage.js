import { Selector } from 'testcafe'

class DashboardPage {
  constructor(){
    this.entradaButton = Selector('div[data-v-8733fc98]').withText('ENTRADA')
    this.salidaButton = Selector('div[data-v-8733fc98]').withText('SALIDA')
    this.seguroButton = Selector('button[type="submit"]')
    this.registradoTitle = Selector('h1[data-v-534a445f]')
  }
}
export default new DashboardPage()
