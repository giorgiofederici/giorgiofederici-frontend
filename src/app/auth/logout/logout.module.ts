import { NgModule } from '@angular/core';

// Material
import { MaterialModule } from 'src/app/material/material.module';

// Logout
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';


@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        LogoutConfirmationDialogComponent
    ],
    entryComponents: [
        LogoutConfirmationDialogComponent
    ]
})
export class LogoutModule { }

