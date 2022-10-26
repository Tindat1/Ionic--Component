import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import config from '../../../../capacitor.config';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss : false,
      message:'This is an alert message',
      header: 'Alert!',
      buttons: ['OK']
      });

    await alert.present();

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss : false,
      message:'This is an alert message',
      header: 'Alert!',
      buttons: [
        {
          text : 'OK',
          handler : () => {
            console.log('Clickeo OK')
          }
        },
        {
          text : 'Cancel',
          role : 'cancel',
          cssClass: 'rojo',

        },
      ]
      });

    await alert.present();

  }

  async presentAlertprompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss : false,
      header: 'Please enter your info',
      buttons: [{
        text : 'OK',
        handler : (data:any) => {
          console.log( data )
        }
      }],
      animated: false,
      inputs: [
        {
          placeholder: 'Name',
          type: 'text',
          name : 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          name : 'Sobrenombre',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          name : 'Edad',
          min: 1,
          max: 134,
        },
        {
          type: 'textarea',
          name : 'TextArea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}

