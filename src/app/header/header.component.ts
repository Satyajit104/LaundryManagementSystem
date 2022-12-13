import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  currentUser=sessionStorage.getItem('name');
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean= true;
  constructor(
    private router : Router,

  ) { }

  ngOnInit(): void {
  }

  sideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
// currentUser= sessionStorage.getItem("name");

userLogout(){
  this.router.navigate(['/login']);
}
}
