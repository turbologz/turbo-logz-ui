import { AppState } from '../app.state';
import { CfOrgsState } from './cf-orgs.state';

export interface ModuleState extends AppState {
  cfOrgs: CfOrgsState;
}
