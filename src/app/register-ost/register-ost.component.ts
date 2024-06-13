import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-ost',
  templateUrl: './register-ost.component.html',
  styleUrls: ['./register-ost.component.css']
})
export class RegisterOstComponent implements OnInit {
  customers: any[] = [];
  ost: any = {
    id: null,
    customerDni: '',
    plate: '',
    brand: '',
    model: '',
    date: new Date(),
    issue: '',
    status: 'Pendiente'
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  addOst() {
    this.ost.id = this.dataService.getOSTs().length + 1;
    this.dataService.addOst(this.ost);
    this.resetForm();
  }

  resetForm() {
    this.ost = {
      id: null,
      customerDni: '',
      plate: '',
      brand: '',
      model: '',
      date: new Date(),
      issue: '',
      status: 'Pendiente'
    };
  }
}
