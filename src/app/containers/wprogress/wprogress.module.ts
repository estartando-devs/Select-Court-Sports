import { NgModule } from '@angular/core';
import { WprogressComponent } from './wprogress.component';
import { CalendarComponent } from 'components/calendar/calendar.component';
import { ModalComponent } from 'components/modal/modal.component';

@NgModule({
    declarations: [
        WprogressComponent,
        CalendarComponent,
        ModalComponent
    ],
    imports: [],
    exports: [
        WprogressComponent
    ]
})
export class WprogressModule{

}
