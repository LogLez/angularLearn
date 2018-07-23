import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts = [
  {
      title: 'Test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0
  },
  {
      title: 'Aviation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0
  },
  {
      title: 'Méteo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0
  }
  ]

  constructor(){
  }



}
