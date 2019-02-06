import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    myCollection: any;

    constructor(private fireStore: AngularFirestore) {
        this.myCollection = fireStore.collection<any>(environment.firebaseConfig.eventosColeccion);
    }
    /*
    Agrega los datos a la colección evento de la base de datos
     */
    agregaEvento(datos) {
        return this.myCollection.add(datos);
    }
    /*Recupera todos los documentos (eventos) de la colección 'evento'
        Devuelve un Observable
    */
    leeEventos() {
        return this.myCollection.get();
    }
}
