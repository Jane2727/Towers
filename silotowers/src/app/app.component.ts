import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public towers = [
    {
      "id": 1,
      "weight":{    
        "id": 1,
        "title": "Масса карналита",
        "value": "1065",
        "minValue": "0",
        "maxValue": "1087"
        },
      "level": {
        "id": 1,
        "title": "Уровень карналита в силосной башне №1",
        "value": "98",
        "minValue": "0",
        "maxValue": "100"
        }
    },
    {
      "id": 2,
      "weight":{
        "id": 2,
        "title": "Масса карналита",
        "value": "998",
        "minValue": "0",
        "maxValue": "1663"
      },
      "level": {
        "id": 2,
        "title": "Уровень карналита в силосной башне №2",
        "value": "60",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 3,
      "weight":{
        "id": 3,
        "title": "Масса карналита",
        "value": "578",
        "minValue": "0",
        "maxValue": "1521"
      },
      "level": {
        "id": 3,
        "title": "Уровень карналита в силосной башне №3",
        "value": "38",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 4,
      "weight":{
        "id": 4,
        "title": "Масса карналита",
        "value": "967",
        "minValue": "0",
        "maxValue": "1224"
      },
      "level": {
        "id": 4,
        "title": "Уровень карналита в силосной башне №4",
        "value": "79",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 5,
      "weight":{
        "id": 5,
        "title": "Масса карналита",
        "value": "1365",
        "minValue": "0",
        "maxValue": "1379"
      },
      "level": {
        "id": 5,
        "title": "Уровень карналита в силосной башне №5",
        "value": "99",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 6,
      "weight":{
        "id": 6,
        "title": "Масса карналита",
        "value": "3143",
        "minValue": "0",
        "maxValue": "1905"
      },
      "level": {
        "id": 6,
        "title": "Уровень карналита в силосной башне №6",
        "value": "60",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 7,
      "weight":{
        "id": 7,
        "title": "Масса карналита",
        "value": "856",
        "minValue": "0",
        "maxValue": "1678"
      },
      "level": {
        "id": 7,
        "title": "Уровень карналита в силосной башне №7",
        "value": "151",
        "minValue": "0",
        "maxValue": "100"
      }
    },
    {
      "id": 8,
      "weight":{
        "id": 8,
        "title": "Масса карналита",
        "value": "956",
        "minValue": "0",
        "maxValue": "1593"
      },
      "level": {
        "id": 8,
        "title": "Уровень карналита в силосной башне №8",
        "value": "60",
        "minValue": "0",
        "maxValue": "100"
      }
    }
  ];
}
