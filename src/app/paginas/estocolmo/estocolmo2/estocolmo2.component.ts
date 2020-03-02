import { Component } from '@angular/core';

@Component({
  selector: 'app-estocolmo2',
  templateUrl: './estocolmo2.component.html',
  styleUrls: ['./estocolmo2.component.css']
})
export class Estocolmo2Component {

  imagen1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7087.JPG';
  imagen2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7115.jpg';
  imagen3 = '../../../assets/imagenes/galeriaEstocolmo/pueblovikingo.JPG';
  imagen4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7173.JPG';
  imagen5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7223.JPG';
  imagen6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7242.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7087.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7115.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaEstocolmo/pueblovikingo.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7173.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7223.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7242.JPG';
  titulo1 = 'Cruz de Ansgar';
  titulo2 = 'Recreación poblado vikingo en Birka';
  titulo3 = 'Recreación poblado vikingo en Birka';
  titulo4 = 'Iglesia de Riddarholmskyrkan';
  titulo5 = 'Stortorget';
  titulo6 = 'Gamla Stan';

  siguiente = 'Isla de los Museos y Estocolmo';
  siguienteDonde = '/estocolmo-dia-3';
  anterior = 'Estocolmo';
  anteriorDonde = '/estocolmo-dia-1';

  constructor() { }

}
