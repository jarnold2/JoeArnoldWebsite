import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component';
import { DefaultComponent } from './default/default.component';
import { SandboxComponent } from './sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DefaultComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'sandbox', component: SandboxComponent },
      { path: '', component: DefaultComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
