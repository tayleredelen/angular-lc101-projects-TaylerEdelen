import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Groovy Pics';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aLdzjpfdvPmJP_-eOBAbTAzMxhtFQ3eEeFy2HBM4MmEUvJlzCfMA9FR1d0ZVgxPjiUg&usqp=CAU';
  image2 = 'https://outline-prod.imgix.net/20191127-FUrZgJqlpdctKmNBTT4I?auto=format&q=60&w=1280&s=8a4c10f929fafc391c1afd9a191b2fa7';
  image3 = 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Sphynx.1.jpg?h=ee36b89e&itok=2fNViXNl';

  constructor() { }

  ngOnInit() {
  }

}