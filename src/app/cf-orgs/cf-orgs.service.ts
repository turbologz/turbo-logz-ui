import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { FetchResult } from 'apollo-link';
import { CfSpace } from '../cf-spaces/cf-spaces.state';

const getOrgsQUery = gql`
  query {
    cfOrgs {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CfOrgsService {

  constructor(private apollo: Apollo) {
  }

  getOrgs() {
    return this.apollo.query<FetchResult<CfSpace[]>>({query: getOrgsQUery});
  }
}
