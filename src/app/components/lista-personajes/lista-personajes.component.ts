import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  personajes: Array<Personaje>;
  respuesta: APIResponse;
  pagenumber: string = '1';
  nextpage: string ;
  prevpage: string 
  //filterForm: FormGroup;
  nombre: string;
  selection: string;


  constructor(private ApiRequest : ApiRequestService,
    private route: ActivatedRoute,
    private router: Router,
   private builder: FormBuilder,) {
      
    /*this.filterForm = this.builder.group({
      value: [''] ,
      tipo: [''] 
    })*/

    



      
      this.route.paramMap.subscribe((params)=>
    {   
      this.pagenumber = params.get('number')
      console.log(this.pagenumber)
      this.getPersonajes(parseInt(this.pagenumber,10))
    })
    
     }



  ngOnInit(): void {

  }

  getPersonajes(page: number ){
    this.ApiRequest.getPage(page).then((response)=>{
      this.respuesta = response.data
      this.personajes=this.respuesta.results
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
    
    let pag: number  = parseInt (this.pagenumber)-1;
    if(pag>=1){
      this.nextpage = pag.toString()
      console.log(this.nextpage);
      this.router.navigate(['/characterpage/',this.nextpage])
    }else{
      window.alert("si estas viendo este mensaje nico quieres explotar la pag,  se me olvido quitar este boton para que no apareciera en la primera pag pero perdoname que yo tqm")
    }
  }

  Busqueda(){
  console.log(this.nombre);
  console.log(this.selection)
  this.ApiRequest.getFilter(this.selection, this.nombre).then((response)=>{
      
      this.respuesta = response.data
      
      this.personajes=this.respuesta.results
      console.log(this.personajes);
    }).catch(error =>{
      window.alert('No se encontraron resultados')  
      console.log('error')
      })
  }

  





}
