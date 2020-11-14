import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { APIResponse } from '../Models/apiresponse';
import { Personaje } from '../Models/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor() { }



  ApiUrl= "https://rickandmortyapi.com/api/character/?page=";

  getResponse(): Promise<AxiosResponse<APIResponse>>{
    return Axios.get(this.ApiUrl);
  }

  /*getPage(response: APIResponse, page: number = 1) {
    return response.results
  }*/


   /*getPage(page: number=0): Promise<AxiosResponse<APIResponse>>{
    if(page=0){
       return Axios.get(this.ApiUrl);
    }
    return Axios.get(`${this.ApiUrl}?page=${page}`);
  }

  getPersonajes(response: APIResponse ):Array<Personaje> {
    return response.results
  }*/

  getPage(page: number=0){
    console.log(page,"HOLA")
    if(page==0){
       return Axios.get(this.ApiUrl);
    }
    return Axios.get(`${this.ApiUrl}${page}`);
  }




}
