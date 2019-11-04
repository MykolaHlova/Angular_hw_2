import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputedValue: string;
  searchValue: string;
  isLogClick = false;
  isRegClick = false;
  isHouseClick = false;
  showedHouseIndex :number = 0;

  createUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
    isBlocked: Boolean(Math.floor(Math.random() * 2))
  };

  auth = {
    email: '',
    password: ''
  };

  users = [
    {
      name: 'Bohdan',
      surname: 'Petrov',
      email: 'adas@asas.com',
      password: '1111',
      isBlocked: true
    },
    {
      name: 'Petro',
      surname: 'Mysyk',
      email: 'adas@asas.com',
      password: '3333',
      isBlocked: true
    },
    {
      name: 'Ivan',
      surname: 'Bula',
      email: 'iv@bula.com',
      password: '2222',
      isBlocked: true
    },
    {
      name: 'Tania',
      surname: 'Panas',
      email: 'panas@email.com',
      password: '4444',
      isBlocked: true
    },
  ];

  createHouse = {
    id: this.users.length +1,
    city: '',
    street: '',
    price: 0,
    owner: this.users[Math.floor(Math.random() * this.users.length)]
  };

  houses = [
    {
      id: 1,
      city: 'Lviv',
      street: 'S.Bandery',
      price: 50000,
      owner: this.users[0]
    },
    {
      id: 2,
      city: 'Kyiv',
      street: 'I.Franko',
      price: 100000,
      owner: this.users[1]
    },
    {
      id: 3,
      city: 'Kovel',
      street: 'M.Verbyckoho',
      price: 40000,
      owner: this.users[2]
    },
    {
      id: 4,
      city: 'Dnipro',
      street: 'L.Ukrainky',
      price: 30000,
      owner: this.users[3]
    },
  ];

  onInput(ev) {
    this.inputedValue = ev.target.value;
  }

  value() {
    this.searchValue = this.inputedValue;
  }

  register() {
    this.isRegClick = !this.isRegClick;
    this.isLogClick = false;
    this.isHouseClick = false;
  }

  login() {
    this.isLogClick = !this.isLogClick;
    this.isRegClick = false;
    this.isHouseClick = false;
  }

  addHouse() {
    this.isHouseClick = !this.isHouseClick;
    this.isLogClick = false;
    this.isRegClick = false;
  }

  registerUser(registerForm: NgForm) {
this.users.push(this.createUser);
    console.log(this.createUser);
    console.log(registerForm)
  }

  loginUser() {
    const findUser = this.users.find(user => this.auth.email === user.email && this.auth.password === user.password);
    findUser ? alert('Welcome') : alert('User is not found');
  }

  houseToCreate(houseReg: NgForm) {
    this.houses.push(this.createHouse);
    console.log(this.houses);
    console.log(houseReg);
  }

  showFull(id) {
    this.showedHouseIndex = id;
    console.log(id);
    console.log(this.showedHouseIndex);
  }
}
