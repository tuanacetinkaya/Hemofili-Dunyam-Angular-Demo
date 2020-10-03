import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  context = [
    {
      id: 'anlamak',
      'headline': '#HEMOFİLİYİ ANLAMAK',
      'title': 'Tedavi Yöntemleri',
      'highlight': 'Kişiselleştirilmiş',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'dunyam',
      'headline': '#HEMOFİLİ DÜNYAM',
      'title': 'Hemofili',
      'highlight': 'Babasıyım',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'yasamak',
      'headline': '#HEMOFİLİ DÜNYASINDA YAŞAMAK',
      'title': 'Hemofili',
      'highlight': 've İş Dünyası',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'destekciler',
      'headline': '#BUDÜNYANINDESTEKÇİLERİ',
      'title': 'Bu Dünyanın',
      'highlight': 'Destekçileri',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
