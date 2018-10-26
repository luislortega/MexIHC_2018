import { Component, OnInit } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.page.html',
  styleUrls: ['./papers.page.scss'],
})
export class PapersPage implements OnInit {

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
    this.document.viewDocument('file:///android_asset/www/assets/Papers/A Computer Graphics Program to Make Exercises Using the  Kinect Device.pdf', 'application/pdf', options)
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
    fileTransfer.download('https://education.github.com/git-cheat-sheet-education.pdf', path + 'mexIHC.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })
  }*/

  ngOnInit() {
  }

}
