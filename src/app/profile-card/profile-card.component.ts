import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  img_addr = "assets/images/home.jpeg"
  constructor() { }

  ngOnInit(): void {
  }

}
