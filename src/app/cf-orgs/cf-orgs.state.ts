import { CfOrg } from './cf-org.model';

export const cfOrgsState: CfOrgsState = {
  isFetchingOrgs: false,
  orgs: []
};

export interface CfOrgsState {
  isFetchingOrgs: boolean;
  orgs: CfOrg[];
}
