import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {CfSpace} from './cf-spaces.state';
import {FetchResult} from 'apollo-link';

const getSpacesQuery = gql`
  query {
    cfSpaces {
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

  getSpaces() {
    return this.apollo.query<FetchResult<CfSpace[]>>({query: getSpacesQuery});
  }
}
