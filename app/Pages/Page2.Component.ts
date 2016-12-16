import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
   
        <div>
           <ngb-datepicker [(ngModel)]="my" (navigate)="date = $event"></ngb-datepicker>
            <pre>{{my | json}}</pre>
            <pre>{{date | json}}</pre>

        </div>
    ` 
})
export class Page2Component {
    my : NgbDateStruct;
    date : Date;
   
};