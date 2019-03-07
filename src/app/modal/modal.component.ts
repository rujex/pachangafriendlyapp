import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavParams, ToastController} from '@ionic/angular';
import {PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal/ngx';
import {FirebaseService} from '../servicios/firebase.service';
import {PasardatosService} from '../servicios/pasardatos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    /**
     * Paso por parametros los siguientes objetos
     * @param router
     * @param toast
     * @param pasardatos
     * @param props
     * @param alertController
     * @param modalController
     * @param paypal
     * @param firebase
     */

    constructor(private router: Router, private toast: ToastController, public pasardatos: PasardatosService, private props: NavParams,
                public alertController: AlertController, public modalController: ModalController,
                private paypal: PayPal, private firebase: FirebaseService) {
    }

    /**
     * Cuando se inicia la ventana modal llama al metodo presentAlert.
     */
    ngOnInit(): void {
     this.presentAlert();
    }
    /**
     * Muestra una ventanita emergente con información de una cuenta de prueba
     */
    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Cuenta de prueba',
            message: 'Introduce el usuario rujex93rujex-buyer@gmail.com Contraseña: 12345678',
            buttons: ['Aceptar']
        });

        await alert.present();
    }
    /**
     * Muestra mensaje de exito
     */
    async presentToast() {
        const toast = await this.toast.create({
            message: 'Se ha realizado la reserva con éxito.',
            duration: 2000
        });
        toast.present();
    }
    /**
     * Metodo para cerrar el modal
     */
    cerrarModal() {
        this.modalController.dismiss();
    }
    /**
     * Método que implementa la transferencia de dinero a traves de una cuenta de paypal
     */
    pay() {
        this.paypal.init({
            PayPalEnvironmentProduction: '',
            PayPalEnvironmentSandbox: 'AVw5AHWzVOubmn1fpqmV71XizARnn5hqNZYgn_W06ONvVS7aVOShMdPCSj0ry4KhpMkv6tZ9fvf4iuvC'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                const payment = new PayPalPayment('0.01', 'EUR', 'Descripcion', 'sale');
                this.paypal.renderSinglePaymentUI(payment).then(() => {
                    this.firebase.agregaEvento(this.pasardatos.getData());
                    this.cerrarModal();
                    this.presentToast();
                }, () => {

                });
            }, () => {

            });
        }, () => {

        });
    }




}
