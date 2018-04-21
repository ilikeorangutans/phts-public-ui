import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { PathService } from './services/path.service';
import { ShareService } from './services/share.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { ShareViewerComponent } from './share-viewer/share-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShareViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PathService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
