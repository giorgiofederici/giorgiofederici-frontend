import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

// Contact
import { ContactComponent } from './containers/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const ROUTES: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [ContactComponent, ContactFormComponent]
})
export class ContactModule {
  constructor() {
    library.add(faExclamation);
  }
}
