//This script will load before loading index.html
//Here we load things that angular need to know before rendering the index.html
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//First we check if the env is prod or not
if (environment.production) {
  enableProdMode();
}
//Here we load the platformBrowserDynamic by passing AppModule and bootstraping it
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
