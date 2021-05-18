import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'property-management';
  records: Array<any> = [];
  showAddNewModal = false;

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getRecords().subscribe((response: any) => {
      this.records = response["records"];
    });
  }

  deleteRecord(record: any) {
    this.restService.deleteRecord(record.id).subscribe((response: any) => {
      if(response.deleted) {
        const index = this.findRecordById(response.id);
        this.records.splice(index, 1);
      }
    }, error => {
      console.log(error);
    });
  }

  addNewRecord(record: any) {
    this.records.push(record);
    this.showAddNewModal = false;
  }

  findRecordById(id: string) {
    return this.records.findIndex(r => r.id === id);  
  }
}
