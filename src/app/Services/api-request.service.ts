import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { APIResponse } from '../Models/apiresponse';
import { Personaje } from '../Models/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor() { }


  //yo se que deberia ser una sola pero te juro que no queria servir con una sola y me moleste porque con varias si agarra
  ApiUrl= "https://rickandmortyapi.com/api/character/?page=";
  ApiUrlpersonaje= "https://rickandmortyapi.com/api/character/"

  getResponse(): Promise<AxiosResponse<APIResponse>>{
    return Axios.get(this.ApiUrl);
  }

  getPage(page: number=0){
    console.log(page,"HOLA")
    if(page==0){
       return Axios.get(this.ApiUrl);
    }
    return Axios.get(`${this.ApiUrl}${page}`);
  }

  getPersonaje(id: number){
    return Axios.get(`${this.ApiUrlpersonaje}${id}`);

  }

  getFilter(tipo: string, nombre: string){
    return Axios.get(`${this.ApiUrlpersonaje}/?${tipo}=${nombre}`)
  }

  //?name=rick




}
