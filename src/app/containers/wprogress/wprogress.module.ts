import { NgModule } from '@angular/core';
import { WprogressComponent } from './wprogress.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

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
