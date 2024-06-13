// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private customers = [
    { dni: '12345678', name: 'Juan Pérez', address: 'Calle 1', sex: 'M', phone: '123456789' },
    { dni: '87654321', name: 'Maria García', address: 'Calle 2', sex: 'F', phone: '987654321' },
    { dni: '11223344', name: 'Carlos Rodríguez', address: 'Calle 3', sex: 'M', phone: '111222333' },
    { dni: '44332211', name: 'Ana Martínez', address: 'Calle 4', sex: 'F', phone: '444333222' },
    { dni: '55667788', name: 'Luis Gómez', address: 'Calle 5', sex: 'M', phone: '555666777' },
  ];

  private osts = [
    { id: 1, customerDni: '12345678', plate: 'ABC123', brand: 'Toyota', model: 'Corolla', date: new Date(), issue: 'No arranca', status: 'Pendiente' }
  ];

  private problemLog = [
    { id: 1, issue: 'No arranca', solution: 'Reemplazar la batería' }
  ];
  constructor() { }

  getCustomers() {
    return this.customers;
  }

  getOSTs() {
    return this.osts;
  }
  addOst(ost: any){
    this.osts.push(ost);
  }
  getProblemLog() {
    return this.problemLog;
  }

  addProblem(problem: { id: number, issue: string, solution: string }) {
    this.problemLog.push(problem);
  }
}
