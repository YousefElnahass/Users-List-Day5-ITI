import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  searchText: string = '';
  users = [
    {
      name: 'Yousef Nasr',
      email: 'yousef.nasr@example.com',
      phone: '01010934000',
      birthdate: '2001-09-13',
      role: 'admin',
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Wael Ahmed',
      email: 'Wael.ahmed@example.com',
      phone: '01234567891',
      birthdate: '1999-06-25',
      role: 'user',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Omar Khaled',
      email: 'omar.khaled@example.com',
      phone: '01122334455',
      birthdate: '2003-02-14',
      role: 'moderator',
      image: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Mohammed Mostafa',
      email: 'Mohammed.mostafa@example.com',
      phone: '01599887766',
      birthdate: '2000-12-05',
      role: 'user',
      image: 'https://i.pravatar.cc/150?img=14'
    },
    {
      name: 'Karim Mohamed',
      email: 'karim.mohamed@example.com',
      phone: '01077766655',
      birthdate: '1998-08-19',
      role: 'admin',
      image: 'https://i.pravatar.cc/150?img=15'
    },
    {
      name: 'Nadia Samir',
      email: 'nadia.samir@example.com',
      phone: '01255667788',
      birthdate: '1995-11-30',
      role: 'moderator',
      image: 'https://i.pravatar.cc/150?img=16'
    },
    {
      name: 'Hossam Fathy',
      email: 'hossam.fathy@example.com',
      phone: '01033445566',
      birthdate: '2002-04-10',
      role: 'user',
      image: 'https://i.pravatar.cc/150?img=17'
    },
    {
      name: 'Hossam Adel',
      email: 'Hossam.adel@example.com',
      phone: '01111222333',
      birthdate: '1997-07-21',
      role: 'moderator',
      image: 'https://i.pravatar.cc/150?img=18'
    }
  
];

  get filteredUsers() {
  return this.users.filter(u =>
    u.name?.toLowerCase().includes(this.searchText.toLowerCase()) ||
    u.email.toLowerCase().includes(this.searchText.toLowerCase())
  );
}


}
