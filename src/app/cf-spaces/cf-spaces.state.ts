export const cfSpacesState: CfSpacesState = {
  isLoadingSpaces: false,
  spaces: []
};

export interface CfSpacesState {
  isLoadingSpaces: boolean;
  spaces: CfSpace[];
}

export interface CfSpace {
  id: string;
  name: string;
}
