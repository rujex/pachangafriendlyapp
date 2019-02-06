import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

    constructor(public alertController: AlertController, public modalController: ModalController, private paypal: PayPal) {
    }
    /*
        Cuando se inicia la ventana modal llama al metodo presentAlert.
     */
    ngOnInit(): void {
     this.presentAlert();
    }
    /*
     Implementa un mensaje de alerta con su correspondiente mensaje, cabecera y botón.
     */
    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Cuenta de prueba',
            message: 'Introduce el usuario rujex93rujex-buyer@gmail.com Contraseña: 12345678',
            buttons: ['Aceptar']
        });

        await alert.present();
    }
    /*
    Metodo para cerrar el modal
     */
    cerrarModal() {
        this.modalController.dismiss();
    }
    /*
        Método que implementa la transferencia de dinero a traves de una cuenta de paypal
     */
    pay(){
        this.paypal.init({
            PayPalEnvironmentProduction: '',
            PayPalEnvironmentSandbox: 'AVw5AHWzVOubmn1fpqmV71XizARnn5hqNZYgn_W06ONvVS7aVOShMdPCSj0ry4KhpMkv6tZ9fvf4iuvC'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new PayPalPayment('0.01', 'EUR', 'Description', 'sale');
                this.paypal.renderSinglePaymentUI(payment).then(() => {
                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, () => {
                    // Error or render dialog closed without being successful
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }




}
