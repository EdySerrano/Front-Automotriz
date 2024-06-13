import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Problem } from '../models/problem.model'; // Importa la interfaz o clase Problem si es que la tienes

@Component({
  selector: 'app-problem-log',
  templateUrl: './problem-log.component.html',
  styleUrls: ['./problem-log.component.css']
})
export class ProblemLogComponent implements OnInit {
  problems: Problem[] = []; // Asegúrate de inicializar problems como un array de tipo Problem

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.problems = this.dataService.getProblemLog();
  }
}
