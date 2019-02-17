import {AppState} from '../app.state';
import {CfAppsState} from './cf-apps.state';

export interface ModuleState extends AppState {
  cfApps: CfAppsState;
}
