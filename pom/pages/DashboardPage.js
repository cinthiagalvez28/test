import { Selector } from 'testcafe'

class DashboardPage {
  constructor(){
    this.entradaButton = Selector('div').withText('Registrar entrada')
    this.entradaRegistradaTitle = Selector('h1').withText('Entrada registrada')
    this.saludoTitle = Selector('h1').withText('¡Hola, Cinthia Alejandra!')
    this.salidaButton = Selector('div[data-v-8733fc98]')
    this.seguroButton = Selector('button[type="submit"]')
    this.salidaRegistradaTitle = Selector('h1[data-v-534a445f]')
  }
}
export default new DashboardPage()
