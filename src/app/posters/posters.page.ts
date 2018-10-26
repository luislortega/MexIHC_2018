import { Component, OnInit } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.page.html',
  styleUrls: ['./posters.page.scss'],
})
export class PostersPage implements OnInit {

  constructor (
    private platform: Platform,
    private document: DocumentViewer, 
    private file: File,
    private transfer: FileTransfer
  ) { }

  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'Workshop Technology'
    }
    this.document.viewDocument('file:///android_asset/www/assets/Posters/¿Cómo podría ayudar un sistema interactivo a reforzar el recuerdo de los aromas en pacientes con déficit olfativo_.pdf', 'application/pdf', options)
  }

  /*openOnlinePdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    }
    else {
      path = this.file.dataDirectory;
    }

    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download("https://drive.google.com/open?id=15ige4qTsjXcfVz33cdw4vE4D-mPiXScS/User Experience Delight from the Designer´s Perspective.pdf", path + 'mexIHC.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })
  }*/

  ngOnInit() {
  }

}
