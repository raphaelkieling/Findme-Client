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
import { retiraPalavra } from './utils';
import { FlexModule } from '@angular/flex-layout';

const config: SocketIoConfig = { url: `${retiraPalavra(urlDomain, '/graphql')}`, options: {} };

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
    FlexModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    MarkerManager,
    GoogleMapsAPIWrapper
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
