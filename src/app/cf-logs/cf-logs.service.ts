import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { FetchResult } from 'apollo-link';
import { CfLog } from './cf-log.model';

const subscribeToFileChangesQuery = gql`
  subscription onTailLog($ident: String!) {
    tailLog(ident: $ident) {
      host
      ident
      message
      time
      pid
      tag
  }
}`;


@Injectable({
  providedIn: 'root'
})
export class CfLogsService {

  constructor(private apollo: Apollo) {
  }

  subscribeToLogs(ident: string) {
    return this.apollo.subscribe<FetchResult<CfLog>>({query: subscribeToFileChangesQuery, variables: {ident}});
  }
}
