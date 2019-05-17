import { NgModule } from '@angular/core';
import { WprogressComponent } from './wprogress.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
    declarations: [
        WprogressComponent,
        ButtonComponent,
        CalendarComponent,
        InputComponent,
        ModalComponent
    ],
    imports: [],
    exports: [
        WprogressComponent
    ]
})
export class WprogressModule{

}