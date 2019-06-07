import { NgModule } from '@angular/core';
import { WprogressComponent } from './wprogress.component';
import { ModalComponent } from 'components/modal/modal.component';

@NgModule({
    declarations: [
        WprogressComponent,
        ModalComponent
    ],
    imports: [],
    exports: [
        WprogressComponent
    ]
})
export class WprogressModule{

}
