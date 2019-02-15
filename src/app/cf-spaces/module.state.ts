import {AppState} from "../app.state";
import {CfSpacesState} from "./cf-spaces.state";

export interface ModuleState extends AppState {
  cfSpaces: CfSpacesState;
}
