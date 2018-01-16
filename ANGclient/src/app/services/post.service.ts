/*
Import des composants du service
*/
  // Import des interfaces
  import { Injectable } from '@angular/core';
  import { Http, Response, Headers } from '@angular/http';
  import 'rxjs/add/operator/toPromise';
// 

@Injectable()
export class PostService {

  private apiUrl = `http://localhost:3000/api/post`;

  constructor( private http: Http ) { };

  // Fonction pour ajouter un post
  public addPost( postData: any ): Promise<any>{
    let myHeader = new Headers();
    myHeader.append('Content-type', 'application/json');

    return this.http.post(this.apiUrl, postData, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
  }

  // Créer une fonction pour traiter le retour de l'API
  private getData(res: Response){
    return res.json() || {};
  };

  // Créer une fonction pour traiter les erreurs de requête
  private handleError(err: any){
    return Promise.reject(err);
  };

};
