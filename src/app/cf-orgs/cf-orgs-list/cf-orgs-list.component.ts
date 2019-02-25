import { Component, Input, OnInit } from '@angular/core';
import { CfOrg } from '../cf-org.model';

@Component({
  selector: 'app-cf-orgs-list',
  templateUrl: './cf-orgs-list.component.html',
  styleUrls: ['./cf-orgs-list.component.scss']
})
export class CfOrgsListComponent implements OnInit {

  @Input() orgs: CfOrg[];

  constructor() {
  }

  ngOnInit() {
  }

}
