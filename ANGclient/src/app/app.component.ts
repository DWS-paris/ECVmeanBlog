import { Component } from '@angular/core';
import { PostService } from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ PostService ]
})

export class AppComponent {

  constructor( private postService: PostService ){};
  public uniqPost = { title: null, content: null }
  
  public addPost(){
    this.postService.addPost( this.uniqPost ).then( data =>{
      console.log(data);

    }).catch( err => {
      console.log(err)
    });
  };
};