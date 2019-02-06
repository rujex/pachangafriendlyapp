import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import leaflet from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
/*
    La clase implementa el mapa en local sin necesidad de que el usuario necesite internet
    indicando donde se localizan los polideportivos.
 */
export class MapaPage{
    @ViewChild('map') mapContainer: ElementRef;
    map: any;
    icon = leaflet.icon({
        iconUrl: '../../assets/icon/marker.png',
        iconSize: [20, 20]
    });
    /*
        Cuando se accede a la ventana mapa se ejecuta el mapa con los marcadores en las ubicaciones de los polideportivos
     */
    ionViewDidEnter() {
        this.loadmap();

        leaflet.marker([37.8609137, -4.777726400000006],  {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Guadalquivir');
        leaflet.marker([37.8766775, -4.7913409999999885], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Vista Alegre');
        leaflet.marker([37.8827085, -4.761687499999994], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Fuensanta');
        leaflet.marker([37.900532, -4.760807], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Fátima');
        leaflet.marker([37.8964129, -4.776318800000013], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo El Naranjo');
        leaflet.marker([37.88338530000001, -4.791184499999986], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Ciudad Jardín');
        leaflet.marker([37.897163, -4.790596999999934], {icon: this.icon}).addTo(this.map).bindPopup('Polideportivo Las Margaritas');
  }
/*
    Implementa el zoom necesario para mostrar la zona de  Córdoba y no tengas que aumentar y disminuir el mapa
 */
    loadmap() {
        this.map = leaflet.map('map').fitWorld().setView([37.8881751, -4.7793834999999945], 13);
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'www.tphangout.com',
            maxZoom: 20,
            minZoom: 5
        }).addTo(this.map);
    }

}
