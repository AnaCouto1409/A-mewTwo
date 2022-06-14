import {mongoDb} from React;
import './MOCK_DATA.json'

const data =[
    [
        {
         "createdAt": "Porsche Mustang",
         "name": "Wagon",
         "email": {},
         "vehicles": {},
         "username": "Alek10",
         "knownIps": [
          "3.201.65.52",
          "4fec:5830:3bd5:1f65:5bce:6d8d:b3c2:0cbf"
         ],
         "profile": {
          "firstName": "Mallie",
          "lastName": "Emard",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "1"
        },
        {
         "createdAt": "Bentley Volt",
         "name": "Minivan",
         "email": {},
         "vehicles": {},
         "username": "Aida.Ebert",
         "knownIps": [
          "109.0.37.241",
          "a0ad:8ff3:38fd:3fa1:37db:8dd2:3008:1e1b"
         ],
         "profile": {
          "firstName": "Tess",
          "lastName": "Prosacco",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "2"
        },
        {
         "createdAt": "Rolls Royce Silverado",
         "name": "Hatchback",
         "email": {},
         "vehicles": {},
         "username": "Mariano_Moore",
         "knownIps": [
          "17.14.44.54",
          "cf20:4363:6c0b:0091:39b2:928c:f6ec:46e5"
         ],
         "profile": {
          "firstName": "Citlalli",
          "lastName": "Bernhard",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "3"
        },
        {
         "createdAt": "Volkswagen Explorer",
         "name": "Coupe",
         "email": {},
         "vehicles": {},
         "username": "Richard.Huels21",
         "knownIps": [
          "127.77.138.105",
          "8d85:6a80:7fcc:8cdf:9620:1e55:bdfa:d3f1"
         ],
         "profile": {
          "firstName": "Jaeden",
          "lastName": "Trantow",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "4"
        },
        {
         "createdAt": "Jaguar Challenger",
         "name": "Minivan",
         "email": {},
         "vehicles": {},
         "username": "Katharina.Bednar57",
         "knownIps": [
          "100.191.225.105",
          "d646:0cba:c100:e736:df40:0520:5fdf:2ad5"
         ],
         "profile": {
          "firstName": "Adriel",
          "lastName": "Feeney",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "5"
        },
        {
         "createdAt": "Honda Fiesta",
         "name": "Passenger Van",
         "email": {},
         "vehicles": {},
         "username": "Merlin5",
         "knownIps": [
          "157.147.22.161",
          "47ce:229d:bbc2:03be:96e6:5035:04cf:a4fa"
         ],
         "profile": {
          "firstName": "Ceasar",
          "lastName": "Franecki",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "6"
        },
        {
         "createdAt": "Bugatti Fortwo",
         "name": "Hatchback",
         "email": {},
         "vehicles": {},
         "username": "Rick41",
         "knownIps": [
          "170.176.240.229",
          "1a3b:48c9:6583:da3e:23a9:503f:454c:afc9"
         ],
         "profile": {
          "firstName": "Mathew",
          "lastName": "Ortiz",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "7"
        },
        {
         "createdAt": "Maserati Civic",
         "name": "Passenger Van",
         "email": {},
         "vehicles": {},
         "username": "Cathryn_OReilly5",
         "knownIps": [
          "253.249.16.174",
          "ff0d:8c4c:431d:81f6:37a4:d75b:0206:96c0"
         ],
         "profile": {
          "firstName": "Bertram",
          "lastName": "Lueilwitz",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "8"
        },
        {
         "createdAt": "Ferrari Model T",
         "name": "Wagon",
         "email": {},
         "vehicles": {},
         "username": "Christy.Buckridge",
         "knownIps": [
          "158.232.104.180",
          "3144:82cf:b516:4ca5:42dd:312b:7006:7305"
         ],
         "profile": {
          "firstName": "Bella",
          "lastName": "Stracke",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "9"
        },
        {
         "createdAt": "Porsche CX-9",
         "name": "Convertible",
         "email": {},
         "vehicles": {},
         "username": "Darrin_Heaney71",
         "knownIps": [
          "97.190.176.147",
          "0220:2d59:8cf7:d75e:e6e9:c1c1:79e7:e739"
         ],
         "profile": {
          "firstName": "Hollis",
          "lastName": "Langworth",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "10"
        },
        {
         "createdAt": "Porsche F-150",
         "name": "Hatchback",
         "email": {},
         "vehicles": {},
         "username": "Jaida.McGlynn50",
         "knownIps": [
          "73.128.209.74",
          "583c:8bf8:4174:c5fc:55f1:250f:f1f8:bc92"
         ],
         "profile": {
          "firstName": "Davion",
          "lastName": "Hegmann",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "11"
        },
        {
         "createdAt": "Tesla Malibu",
         "name": "Extended Cab Pickup",
         "email": {},
         "vehicles": {},
         "username": "Kaitlyn58",
         "knownIps": [
          "220.6.183.248",
          "051d:94a7:8e86:bdce:4e15:abcd:ad30:b0cf"
         ],
         "profile": {
          "firstName": "Bobby",
          "lastName": "Collins",
          "staticData": [
           100,
           200,
           300
          ]
         },
         "id": "12"
        }
       ]
]