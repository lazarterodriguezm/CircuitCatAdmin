import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
})
export class ScanQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  options : BarcodeScannerOptions = {
    preferFrontCamera : false,
    showFlipCameraButton : true,
    showTorchButton : true,
    disableAnimations : false,
    disableSuccessBeep : false,
    prompt : "Prompt",
    formats : "QR_CODE",
    orientation : "none",
    torchOn : false,
    resultDisplayDuration : 1500
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQrPage');

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log('Cancelled: ', barcodeData.cancelled);
      console.log('Format: ', barcodeData.format);
      console.log('Text', barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
