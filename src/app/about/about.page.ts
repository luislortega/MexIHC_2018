import { Component } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

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
    this.document.viewDocument('file:///android_asset/www/assets/WorkshopTechnology.pdf', 'application/pdf', options)
  }

  openOnlinePdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    }
    else {
      path = this.file.dataDirectory;
    }

    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download('https://github.com/Rey1213/mexIHC_PDFs/tree/master/Competition/Helpi.pdf', path + 'mexIHC.PDF').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })
  }

}
