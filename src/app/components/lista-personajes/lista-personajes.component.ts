import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router) {
      
      
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
  nextpage: string ;
  prevpage: string 

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

  getNextPage(){
    let pag: number  = parseInt (this.pagenumber)+1;
    this.nextpage = pag.toString()
    console.log(this.nextpage);
    this.router.navigate(['/characterpage/',this.nextpage])    
  }

  getPrevPage(){
    
    let pag: number  = parseInt (this.pagenumber);
    if(pag>1){
      this.nextpage = pag.toString()
      console.log(this.nextpage);
      this.router.navigate(['/characterpage/',this.nextpage])
    }else{
      window.alert("si estas viendo este mensaje nico quieres explotar la pag,  se me olvido quitar este boton para que no apareciera en la primera pag pero perdoname que yo tqm")
    }
  }

  





}
