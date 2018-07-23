import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;
  @Input() loveIts:number;

  created_at = new Date();


  constructor() {
  }

  ngOnInit() {
  }

  getLoveIts(){
    return this.loveIts;
  }

  onLikeIt(){
     this.loveIts = this.loveIts +1;
     console.log('LovesIts: ' + this.loveIts );
  }
  onDontLike(){
    this.loveIts = this.loveIts -1;
    console.log('LovesIts: ' + this.loveIts );
  }
}
