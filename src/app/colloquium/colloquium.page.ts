import { Component, OnInit } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-colloquium',
  templateUrl: './colloquium.page.html',
  styleUrls: ['./colloquium.page.scss'],
})
export class ColloquiumPage implements OnInit {

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
    this.document.viewDocument('file:///android_asset/www/assets/Colloquium/Ambient Computing to Support in-home Seniors Medication Habits.pdf', 'application/pdf', options)
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
    fileTransfer.download('https://www.dropbox.com/sh/xrznxsxs0xl00v8/AACxbNUnNfn3mzmBXbDOudd5a?dl=0/Wearable Technology as a Mediator for Communication and Learning.pdf', path + 'mexIHC.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })
  }*/

  ngOnInit() {
  }

}
