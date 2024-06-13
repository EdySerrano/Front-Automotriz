// ost-details.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ost } from '../models/ost.model'; // Asegúrate de importar la interfaz Ost si la tienes definida

@Component({
  selector: 'app-ost-details',
  templateUrl: './ost-details.component.html',
  styleUrls: ['./ost-details.component.css']
})
export class OstDetailsComponent implements OnInit {
  osts: Ost[] = []; // Asegúrate de inicializar osts como un array de tipo Ost

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.osts = this.dataService.getOSTs();
  }

  getCustomerName(customerDni: string): string {
    const customer = this.dataService.getCustomers().find(c => c.dni === customerDni);
    return customer ? customer.name : 'Cliente no encontrado';
  }
}

