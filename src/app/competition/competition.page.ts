import { Component, OnInit } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {

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
    this.document.viewDocument('file:///android_asset/www/assets/Competition/Helpi.pdf', 'application/pdf', options)
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
    fileTransfer.download('https://bitbucket.org/Rey_1213/mexihc_pdfs/src/master/Competition/Helpi.pdf', path + 'mIHC.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })
  }*/

  ngOnInit() {
  }

}
