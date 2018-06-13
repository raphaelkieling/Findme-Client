import { urlDomain } from './config';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InterceptorService } from './services/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MarkerManager, GoogleMapsAPIWrapper } from '@agm/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { FlexModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE, MatPaginatorIntl, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ServiceWorkerModule } from '@angular/service-worker';

const config: SocketIoConfig = {
  url: urlDomain, options: {
    transports: ['websocket']
  }
};

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    appRouting,
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    HttpModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhDpLlU6jqo4aWEP26jG3RE_-OFktIyvQ'
    }),
    SocketIoModule.forRoot(config),
    FlexModule,
    ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    MarkerManager,
    GoogleMapsAPIWrapper,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-br'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: `${urlDomain}/graphql` }),
      cache: new InMemoryCache({
        addTypename: false
      }),
      connectToDevTools: true
    });
  }


}
