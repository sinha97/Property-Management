import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//const baseTable = "appHAqt4e9lIjz6BB/Table%201";
const baseTable="appzVwOsi02Xs0lV4/Property"
@Injectable()
export class RestService {

  constructor(protected http: HttpClient) {
   
  }

  getRecords() {
    return this.http.get("https://api.airtable.com/v0/" + baseTable);
  }

  saveRecord(data: any) {
    return this.http.post("https://api.airtable.com/v0/" + baseTable, data);
  }

  deleteRecord(id: string) {
    return this.http.delete("https://api.airtable.com/v0/" + baseTable + "/" + id);
  }
}


//keyVYKBvkKeMDBwSu