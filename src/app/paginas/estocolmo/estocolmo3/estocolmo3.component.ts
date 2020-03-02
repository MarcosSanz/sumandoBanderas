import { Component } from '@angular/core';

@Component({
  selector: 'app-estocolmo3',
  templateUrl: './estocolmo3.component.html',
  styleUrls: ['./estocolmo3.component.css']
})
export class Estocolmo3Component {

  imagen1 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7267.JPG';
  imagen3 = '../../../assets/imagenes/galeriaEstocolmo/marcosElVikingo.JPG';
  imagen4 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-5.jpg';
  imagen5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7443.JPG';
  imagen6 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-7.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7267.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaEstocolmo/marcosElVikingo.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-5.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7443.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaEstocolmo/estocolmodia3-7.jpg';
  titulo1 = 'Oscarskyrkan';
  titulo2 = 'Nodisk Museet';
  titulo3 = 'Marcos Disfrazado de vikingo';
  titulo4 = 'San Jorge matando al dragón';
  titulo5 = 'Vistas al Museo Nacional';
  titulo6 = 'Atardecer en Estocolmo';

  siguiente = 'Palacio de Drottningholm';
  siguienteDonde = '/estocolmo-dia-4';
  anterior = 'Birka';
  anteriorDonde = '/estocolmo-dia-2';

  constructor() { }

}
