import { Selector } from 'testcafe'

class DashboardPage {
  constructor(){
    this.entradaButton = Selector('div').withText('Registrar entrada')
    this.salidaButton = Selector('div[data-v-8733fc98]')
    this.seguroButton = Selector('span[data-v-8733fc98]')
    this.entradaRegistradaTitle = Selector('h1').withText('Entrada registrada')
    this.salidaRegistradaTitle = Selector('h1[data-v-534a445f]')
    this.saludoTitle = Selector('h1').withText('¡Hola, Cinthia Alejandra!')
  }
}
export default new DashboardPage()
