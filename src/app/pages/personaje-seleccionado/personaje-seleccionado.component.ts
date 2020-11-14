import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/Models/personaje';
import { ApiRequestService } from 'src/app/Services/api-request.service';

@Component({
  selector: 'app-personaje-seleccionado',
  templateUrl: './personaje-seleccionado.component.html',
  styleUrls: ['./personaje-seleccionado.component.scss']
})
export class PersonajeSeleccionadoComponent implements OnInit {

  personaje: Personaje =null;

  constructor(private ApiRequest : ApiRequestService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.paramMap.subscribe((params)=>
    {
       
      const personajeId = params.get('Id')
      console.log(personajeId)
      this.getPersonaje(parseInt(personajeId,10))
    })
      
     }

  ngOnInit(): void {
  }

    getPersonaje(id: number){
  
    this.ApiRequest.getPersonaje(id).then((response) =>{
      this.personaje= response.data

    }).catch(error =>{
        console.log('error')
      }) 
  }



}
