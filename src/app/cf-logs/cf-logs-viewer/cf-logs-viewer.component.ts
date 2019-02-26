import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModuleState } from '../module.state';
import { Store } from '@ngrx/store';
import { Terminal } from 'xterm';
import * as actions from '../cf-logs.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cf-logs-viewer',
  templateUrl: './cf-logs-viewer.component.html',
  styleUrls: ['./cf-logs-viewer.component.scss']
})
export class CfLogsViewerComponent implements OnInit {

  @ViewChild('terminalContainer') terminalContainer: ElementRef;
  @ViewChild('terminal') terminal: ElementRef;

  private xterm: Terminal;

  constructor(private store: Store<ModuleState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.xterm = new Terminal({cursorBlink: true, rows: 11});
    
    this.xterm.open(this.terminal.nativeElement);

    this.route.params.subscribe(({appId}) => this.store.dispatch(new actions.SubscribeToLogs(appId, this.xterm.write)));
  }

}
