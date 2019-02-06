import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonSlides, LoadingController, ModalController, Platform} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../servicios/firebase.service';
import {ModalComponent} from '../modal/modal.component';
import { Instagram } from '@ionic-native/instagram/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;
  @ViewChild('dynamicList') dynamicList;
  listado = [];
  listadoPanel = [];
  SwipedTabsIndicator: any = null;
  tabs = ['selectTab(0)', 'selectTab(1)'];
  public category: any = '0';
  ntabs = 2;
  skinmenu: any;
  private event: FormGroup;
  myloading: any;
  /*
  Le paso por parametro objetos de clases y se controla la entrada de datos del formulario
 */
constructor(public toastController: ToastController, private translate: TranslateService,
            private instagram: Instagram, public modalController: ModalController, private formBuilder: FormBuilder,
            private firebase: FirebaseService, public loadingController: LoadingController) {
    this.event = this.formBuilder.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.compose([Validators.pattern('^[0-9]{8}[A-Z]$'), Validators.required])],
      fecha: ['', Validators.required],
      deporte: ['', Validators.required],
      polideportivo: ['', Validators.required]
    });
  }
  ngOnInit(): void {
   //Cuando se inicie la ventana inicio se ejecuta el toast
    this.toast();
  }

  /*
   Muestra un mensaje emergente personalizado
   */
  async toast() {
      const toast = await this.toastController.create({
          message: 'Es una versión beta',
          color: 'success' ,
          showCloseButton: true,
          position: 'top',
          closeButtonText: 'Ok'
      });
      toast.present();
  }

    /*
      Devuelve el nombre de los eventos midiendo la cantidad de letras
     */
  getFilteredItem(searchbar) {
    var item = searchbar.target.value;
    this.listadoPanel = this.listado.filter((data) => {
      return (data.nombre.toLowerCase().indexOf(item.trim().toLowerCase()) > -1
      );
    });
  }
/*
   Cuando accede a home.page muestra los eventos de la base de datos
   La variable SwipedTabsIndicatos almacena el id de la pestaña
*/
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById('indicator');
    this.firebase.leeEventos()
        .subscribe((querySnapshot) => {
          this.listado = [];
          this.delete();
          querySnapshot.forEach((doc) => {
            this.listado.push({id: doc.id, ...doc.data()});
          });
          this.listadoPanel = this.listado;
          this.loadingController.dismiss();
        });
  }
/*
  Cuando esta a punto de entrar a la ventana inicializa la categoria a 0 y el ntabs cambia
 */
  ionViewWillEnter() {
    this.category = '0';
    this.SwipedTabsSlider.length().then(l => {
      this.ntabs = l;
    });
  }
/*
  Para solucionar el bug de list-items-sliding con ngfor
 */
  async delete() {
    await this.dynamicList.closeSlidingItems();
  }

  /* Actualiza la categoría que esté en ese momento activa*/
  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category;
    });
  }
  /* El método que permite actualizar el indicador cuando se cambia de slide*/
  updateIndicatorPosition() {
    this.SwipedTabsSlider.getActiveIndex().then(i => {
      if (this.ntabs > i) {  // this condition is to avoid passing to incorrect index
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
      }
    });
  }
  /* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
  animateIndicator(e) {
    // console.log(e.target.swiper.progress);
    if (this.SwipedTabsIndicator) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
          ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
    }
  }
  /*
    Se obtienen los datos de la base de datos que se han escrito en el formulario
    ademas lanza el cargando y limpia los datos del formulario
   */
  logForm() {
    const data = {
      nombre: this.event.get('nombre').value,
      dni: this.event.get('dni').value,
      fecha: this.event.get('fecha').value,
      deporte: this.event.get('deporte').value,
      polideportivo: this.event.get('polideportivo').value
    };

    this.myloading = this.presentLoading();
    this.firebase.agregaEvento(data)
        .then((docRef) => {
          console.log('DNI insertado (por si lo necesitamos):', docRef.id);
          this.event.setValue({
            nombre: '',
            dni: '',
            fecha: '',
            deporte: '',
            polideportivo: '',
          });
          this.loadingController.dismiss();
          this.presentModal();
        })
        .catch((error) => {
          console.error('Error insertado documento: ', error);
          this.loadingController.dismiss();
        });

  }
    /*
      Comparte el evento por instagram pasando la url
     */
    shareInsta() {
      this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
          .then(() => console.log('Shared!'))
          .catch((error: any) => console.error(error));
    }

    /*
    Actualiza los eventos deslizando hacia abajo
     */
    doRefresh(refresher) {
        this.firebase.leeEventos()
            .subscribe(querySnapshot => {
               this.listado=[];
               this.delete();
               querySnapshot.forEach((doc) => {
                   this.listado.push({id: doc.id, ...doc.data()});
               });
               this.listadoPanel = this.listado;
               refresher.target.complete();
            });
    }

  /*
    Método para mostrar un cargando
   */
  async presentLoading() {
    this.myloading = await this.loadingController.create({
      message: 'Guardando',
      spinner: 'dots',
      duration: 3000
    });
    return await this.myloading.present();
  }

/*
  Método para mostrar un modal indicando el componente ModalComponent
 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }



}
