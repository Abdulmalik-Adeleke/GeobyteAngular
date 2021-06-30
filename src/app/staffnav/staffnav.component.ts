import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffnav',
  templateUrl: './staffnav.component.html',
  styleUrls: ['./staffnav.component.css']
})
export class StaffnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('key');
    this.router.navigateByUrl("/login");
  }
}
