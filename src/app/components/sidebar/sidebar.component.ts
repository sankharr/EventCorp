import { Component, OnInit } from '@angular/core';
import {onIdentify} from '../../../scripts/side_bar.js';
import { filter } from 'rxjs-compat/operator/filter';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

export const ROUTES1: RouteInfo[] = [
  { path: '/artist-home', title: 'Home',  icon: 'home', class: '' },
  // { path: '/artist-calendar', title: 'Event Calendar',  icon: 'calendar_today', class: '' },
  { path: '/artist-notification', title: 'Notifications',  icon: 'notifications', class: '' },
  { path: '/artist-request', title: 'Booking Requests',  icon: 'view_list', class: '' },
  { path: '/artist', title: 'Edit Profile',  icon: 'file_copy', class: '' },
  { path: '#', title: 'Settings',  icon: 'settings', class: '' },
  { path: '/venueHome', title: 'Venue Home',  icon: 'file_copy', class: '' },
  { path: '/venueProfile', title: 'Venue Profile',  icon: 'file_copy', class: '' },
  { path: '/venueCalendar', title: 'Venue Calendar',  icon: 'file_copy', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

export const ROUTES2:RouteInfo[]=[
  { path: '/organizer-home', title: 'Home',  icon: 'home', class: '' },
];

export const ROUTES3:RouteInfo[]=[
  { path: '/location-owner-home', title: 'Home',  icon: 'home', class: '' },
];

export const ROUTES4:RouteInfo[]=[
  { path: '/supplier-home', title: 'Home',  icon: 'home', class: '' },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css','./sidebar.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  getUser:String='';
  isAdmin:boolean=false;

  constructor() { }

  ngOnInit() {
    this.getUser=onIdentify();
    if(this.getUser=='artist')
    this.menuItems = ROUTES1.filter(menuItem => menuItem);
    else if(this.getUser=='organizer')
    this.menuItems=ROUTES2.filter(menuItem=>menuItem);
    else if(this.getUser=='location-owner')
    this.menuItems=ROUTES3.filter(menuItem=>menuItem);
    else if(this.getUser=='supplier')
    this.menuItems=ROUTES4.filter(menuItem=>menuItem);
    else{
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.isAdmin=true;
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
