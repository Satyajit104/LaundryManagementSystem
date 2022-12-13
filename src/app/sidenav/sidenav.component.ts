import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() sideNavStatus: boolean = true;
  list= [
    {
          number: '1',
          name:'Dashboard',
          icon : 'fa fa-th-large',
          router : '/dashboard'
    },
    {
          number: '2',
          name:'Laundry Request',
          icon : 'fa fa-folder',
          router : '/request'

    },
    {
          number: '3',
          name:'Request Status',
          icon : 'fa fa-id-card',
          router : '/userRequest'

      },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
