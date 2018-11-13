import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Pages that create in ionic_3
import { PapersPage } from '../pages/papers/papers';
  //full and short papers
import { FullpapersPage } from '../pages/fullpapers/fullpapers';
import { ShortpapersPage } from '../pages/shortpapers/shortpapers';
import { ColoquioPage } from '../pages/coloquio/coloquio';
import { CompetitionPage } from '../pages/competition/competition';
import { PostersPage } from '../pages/posters/posters';
import { October29Page } from '../pages/october29/october29';
import { October30Page } from '../pages/october30/october30';
import { October31Page } from '../pages/october31/october31';
//nativethings
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * We ned add al the pages in the declarations and entryComponents
 */
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //PapersPage,
    //FullpapersPage,
    //ShortpapersPage,
    //ColoquioPage,
    //CompetitionPage,
    //PostersPage,
    //October29Page,
    //October30Page,
    //October31Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PapersPage,
    FullpapersPage,
    ShortpapersPage,
    ColoquioPage,
    CompetitionPage,
    PostersPage,
    October29Page,
    October30Page,
    October31Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
