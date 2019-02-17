import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {FetchResult} from 'apollo-link';
import {CfApp} from './cf-app.model';

const getAppsQuery = gql`
  query cfApps($spaceId: String!) {
    cfApps(spaceId: $spaceId) {
      id
      spaceId
      appId
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CfAppsService {

  constructor(private apollo: Apollo) {
  }

  getApps(spaceId: string) {
    return this.apollo.query<FetchResult<CfApp[]>>({query: getAppsQuery, variables: {spaceId}});
  }
}
