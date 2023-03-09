import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Groovy Pics';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://outline-prod.imgix.net/20191127-FUrZgJqlpdctKmNBTT4I?auto=format&q=60&w=1280&s=8a4c10f929fafc391c1afd9a191b2fa7';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}