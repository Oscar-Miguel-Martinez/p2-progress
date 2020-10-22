import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    const promesa = new  Promise((resolve, reject) => {
      if (false){
      resolve ('Hola mundo');
    }else{
      reject('Algo salio mal')
  }
    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error)=>{console.log(error);})

    console.log("xd");
  }

}
