import {CfApp} from './cf-app.model';

export const cfAppState: CfAppsState = {
  isFetchingApps: false,
  cfApps: []
};

export interface CfAppsState {
  isFetchingApps: boolean;
  cfApps: CfApp[];
}
