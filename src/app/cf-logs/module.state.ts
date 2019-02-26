import { AppState } from '../app.state';
import { CfLogsState } from './cf-logs.state';

export interface ModuleState extends AppState {
  cfLogs: CfLogsState;
}
