import {NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {TabsComponent} from './components/tabs/tabs.component';
import {HeaderComponent} from './components/header/header.component';
import {TabBodyComponent} from './components/tab-body/tab-body.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {TableDataComponent} from './components/table-data/table-data.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {UpdateCheckerComponent} from './components/update-checker/update-checker.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HebrewAlphabetComponent} from './components/hebrew-alphabet/hebrew-alphabet.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    TabBodyComponent,
    TableDataComponent,
    UpdateCheckerComponent,
    HebrewAlphabetComponent,
    AuthenticationComponent,
    ChangePasswordModalComponent,
    UserSettingsComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    NgxAudioPlayerModule,
    MatTableModule,
    MatSortModule,
    HammerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {
}
