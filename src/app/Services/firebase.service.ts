import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { __param } from 'tslib';
import { FavPersonajes } from '../Models/fav-personajes';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private favoritesColletion: AngularFirestoreCollection<FavPersonajes>
  

  constructor(private db: AngularFirestore) {
    this.favoritesColletion= this.db.collection<FavPersonajes>('favorites')
   }

   /*getListOfFavorites(userId: string) {
    return this.favoritesColletion.ref.where('userId', '==', userId).get()

   }


   addToFavorite(userId: string, characterId:number){
     return this.favoritesColletion.ref.where('userId', '==', userId).get()
     .then((res)=>{


      if(res.docs.length<=0){
        this.favoritesColletion.add({userId, favorites:[characterId]})
        .then((res)=>{
          console.log(res.id)
        })
      }else{
        let newFavorites = [...res.docs[0].get('favorites')];


        if(

        )
      }
     })

     }
   }*/

}
