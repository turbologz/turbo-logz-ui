import { Component, Input, OnInit } from '@angular/core';
import { CfSpace } from '../cf-spaces.state';

@Component({
  selector: 'app-cf-spaces-list',
  templateUrl: './cf-spaces-list.component.html',
  styleUrls: ['./cf-spaces-list.component.scss']
})
export class CfSpacesListComponent implements OnInit {

  @Input() spaces: CfSpace[];

  constructor() {
  }

  ngOnInit() {
  }

}
