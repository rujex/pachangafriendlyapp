import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {environment} from '../environments/environment';
import {CambiarTemaService} from './servicios/CambiarTema.service';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    skinmenu: any;
    langmenu: any;
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Mapa',
            url: '/mapa',
            icon: 'map'
        },
    ];

    constructor(
        private router: Router,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private tema: CambiarTemaService,
        private translate: TranslateService,
    ) {
        this.initializeApp();
        this.skinmenu = (environment.defaultSkin == 'light' ? false : true);
        this.langmenu = (environment.defaultLanguage == "es" ? false : true);
    }
    /**
     * Gestionamos el idioma del sistema: en función del lenguaje por defecto o
     el idioma del navegador si está disponible.
     */
    initializeApp() {
        this.platform.ready().then(() => {
            this.translate.addLangs(environment.currentLanguages);  // add all languages
            this.translate.setDefaultLang(environment.defaultLanguage); // use default language
            if (this.translate.getBrowserLang) {  // if browsers's language is avalaible is set up as default
                if (environment.currentLanguages.includes(this.translate.getBrowserLang())) {
                    this.translate.use(this.translate.getBrowserLang());
                }
            }
            this.tema.setTheme(environment.defaultSkin);
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    /**
     *  Te dirige a la ventana Mapa
     */
    mapa() {
        this.router.navigate(['mapa']);
    }
    /**
     * Te dirige a la ventana de Inicio
     */
    inicio() {
        this.router.navigate(['home']);
    }
    /**
     * Cambia el tema de la aplicación a modo nocturno
     * @param e
     */
    changeSkin(e) {
        if (e.detail.checked) {
            this.tema.setTheme('dark');
        } else {
            this.tema.setTheme('light');
        }

    }
    /**
     * Método para cambiar de idioma la aplicación
     * @param e
     */
    changeLang(e) {
        if (e.detail.checked) {
            this.translate.use('en');
        } else {
            this.translate.use('es');
        }
    }
}
