import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignageConfigurationComponent } from './signage-configuration/signage-configuration.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { TreeModule } from 'angular-tree-component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSpinner } from '@angular/material';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SignageConfigurationComponent,
    CreateAdsComponent,
    MaterialFileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    TreeModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [MatSpinner, MaterialFileUploadComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
