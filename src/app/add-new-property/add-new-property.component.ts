import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.scss']
})
export class AddNewPropertyComponent implements AfterViewInit {

  @ViewChild('modal') modalElem!: ElementRef;
  @Output() addNewRecordEvent = new EventEmitter<any>();
  @Output() modelDismissEvent= new EventEmitter<any>();
  name: string = '';
  description: string = '';
  size: string = '';
  jqueryInstance: any;
  constructor(private el: ElementRef,
    private restService: RestService) {
      this.jqueryInstance = (window as any).$;
     }

  ngAfterViewInit(): void {
    this.jqueryInstance(this.modalElem.nativeElement).modal();
  }

  addNewRecord() {
    if(this.name && this.description && this.size) {
      let fields = {Name: '', Description: '', Size: ''};
      fields.Name = this.name;
      fields.Description = this.description;
      fields.Size = this.size;
      this.restService.saveRecord({fields: fields}).subscribe((response: any)=> {
          this.addNewRecordEvent.emit(response);
          this.jqueryInstance(this.modalElem.nativeElement).modal('hide');
      }, error => {
        console.log(error);
      });
    }
  }

  modelDismiss() {
    this.modelDismissEvent.emit();
  }
}
