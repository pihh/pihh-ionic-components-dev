import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  title:string = "Post";
  constructor(private router: Router) {
    const currentNavigation:any | undefined = router.getCurrentNavigation();
    if(currentNavigation){
      console.log(currentNavigation); // should log out 'bar'
      try{
        this.title = "Post "+currentNavigation.extras.state.id
      }catch(ex){

      }
    }
  }

  ngOnInit() {
  }

}
