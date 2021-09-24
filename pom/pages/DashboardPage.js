import { Selector } from 'testcafe'

class DashboardPage {
  constructor(){
    this.entradaButton = Selector('div').withText('Registrar entrada')
    this.salidaButton = Selector('div').withText('Registrar salida')
    this.seguroButton = Selector('span').withText('Sí, seguro')
    this.entradaRegistradaTitle = Selector('h1').withText('Entrada registrada')
    this.salidaRegistradaTitle = Selector('h1').withText('Salida registrada')
    this.saludoTitle = Selector('h1').withText('¡Hola, Cinthia Alejandra!')
  }
}
export default new DashboardPage()
