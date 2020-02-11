import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-routines',
  templateUrl: './assign-routines.page.html',
  styleUrls: ['./assign-routines.page.scss'],
})
export class AssignRoutinesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("arrive");
  }
}
