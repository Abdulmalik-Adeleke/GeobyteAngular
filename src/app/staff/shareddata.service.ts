import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  data: string;

  setdata(uuid: string){
    this.data = uuid;
  }
}
