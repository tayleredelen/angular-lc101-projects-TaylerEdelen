import { Component, OnInit } from '@angular/core';

@Component({
  favLinks: ['https://www.peanutbutter.com/', 'https://jelly.com/'],
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
