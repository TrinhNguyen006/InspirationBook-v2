import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ib-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.scss']
})
export class DecoComponent implements OnInit {
  data = {
    scores: [
      { // 2, 3 or 4 elements
        name: 'Ethnique',
        color: '#AA8A77' ,
        value: 45
      },
      {
        name: 'Bord de mer' ,
        color: '#2C4A6C' ,
        value: 35
      }, 
      {
        name: 'Charme' ,
        color: '#E7DCD0' ,
        value: 15
      },
      {
        name: 'Nordique' ,
        color: '#728780' ,
        value: 5
      }
    ],
    pictures: [
      {
        am_id: '1' ,
        // image url: {{host}}/book/visuals/[id]/medias/medium.jpg
        category: 'visuals' , // (can be 'visuals' or 'inspirationPictures'),
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450489.jpeg'
      },
      {
        am_id: 'AM_ID_2' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450490.jpeg'
      },
      {
        am_id: '3' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450492.jpeg'
      },
      {
        am_id: '4' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450491.jpeg'
      },
      {
        am_id: '5' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450488.jpeg'
      },
      {
        am_id: '6' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450493.jpeg'
      },
      {
        am_id: '7' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450496.jpeg'
      },
      {
        am_id: '8' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450494.jpeg'
      },
      {
        am_id: '9' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450495.jpeg'
      },
      {
        am_id: '10' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/92527/userUpload/20-11-2020-at-15-39-49-436-1450485.jpeg'
      },
      {
        am_id: '11' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/realProperties/82006/userUpload/10-8-2020-at-21-40-52-941-1.jpeg'
      },
      {
        am_id: '12' ,
        // image url: {{host}}/book/inspirationPictures/[id]/medias/medium.jpg
        category: 'inspirationPictures',
        url: 'https://api.rhinov.fr/uploads/inspirationsImages/27-1562592271862.jpg'
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
