import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CfSpace } from './cf-spaces.state';
import { FetchResult } from 'apollo-link';

const getSpacesQuery = gql`
  query cfSpaces($orgId: String!) {
    cfSpaces(orgId: $orgId) {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CfSpacesService {

  constructor(private apollo: Apollo) {
  }

  getSpaces(orgId: string) {
    return this.apollo.query<FetchResult<CfSpace[]>>({query: getSpacesQuery, variables: {orgId}});
  }
}
