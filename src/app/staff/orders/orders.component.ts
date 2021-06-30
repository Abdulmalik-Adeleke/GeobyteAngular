import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/ApiRequest/Geobyte/staff.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data: any;

  constructor(private staff: StaffService) { }

 async ngOnInit(): Promise<void> {
    this.data = await this.staff.getOrders();
    console.log(this.data);
  }

}
