import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/Models/apiresponse';
import { Personaje } from 'src/app/Models/personaje';
import { ApiRequestService } from 'src/app/Services/api-request.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  constructor(private ApiRequest : ApiRequestService,
    private route: ActivatedRoute) {
      
      
      this.route.paramMap.subscribe((params)=>
    {   
      this.pagenumber = params.get('number')
      console.log(this.pagenumber)
      this.getPersonajes(parseInt(this.pagenumber,10))
    })
     }

  personajes: Array<Personaje>;
  respuesta: APIResponse;
  pagenumber: string = '1';

  ngOnInit(): void {
  }

  getPersonajes(page: number ){
    this.ApiRequest.getPage(page).then((response)=>{
      console.log("response ",response)
      this.respuesta = response.data
      console.log(this.respuesta)
      this.personajes=this.respuesta.results
      console.log(this.personajes)
    }).catch(error =>{
        console.log('error')
      })
  }

  changePage(){
    this.route.paramMap.subscribe((params)=>
    {   
      this.pagenumber = params.get('number')
      console.log(this.pagenumber)
      this.getPersonajes(parseInt(this.pagenumber,10))
    })

    this.pagenumber=this.pagenumber+1
  }



}
