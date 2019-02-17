import {Component, Input, OnInit} from '@angular/core';
import {CfApp} from '../cf-app.model';

@Component({
  selector: 'app-cf-apps-list',
  templateUrl: './cf-apps-list.component.html',
  styleUrls: ['./cf-apps-list.component.scss']
})
export class CfAppsListComponent implements OnInit {

  @Input() cfApps: CfApp[];

  constructor() {
  }

  ngOnInit() {
  }

}
