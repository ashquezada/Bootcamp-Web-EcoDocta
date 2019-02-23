import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { MessageService } from './services/message.service';
import { EventComponent } from './event/event.component';
import { MachineComponent } from './machine/machine.component';
import { BenefitsComponent } from './benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    EventComponent,
    MachineComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ],
 providers: [ MessageService ]
})
export class AppModule { }
