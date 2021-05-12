import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-vacunam',
  templateUrl: './vacunam.page.html',
  styleUrls: ['./vacunam.page.scss'],
})
export class VacunamPage implements OnInit {

  public totals: Array<any>;
  public backup: Array<any>;

  constructor(private dades: DadesService) { }
  ngOnInit() {
  this.dades.dadesVacuna2().subscribe(
  (data: Array<any>) => {
  this.totals = data;
  
 console.log(this.totals);
  }
  )
  
}
initializeItems(){
  this.backup = []
  this.totals.forEach(val => this.backup.push(Object.assign({},val)));
}

buscar(ev: any){
  
  this.initializeItems();

  const val = ev.target.value;

  if(val && val.trim() != ''){
    this.backup = this.backup.filter((item) =>{
      return (item.municipi.toLowerCase().indexOf(val.toLowerCase()) > -1)
    })
  }else{
    this.backup=[]
  }
}
 }
