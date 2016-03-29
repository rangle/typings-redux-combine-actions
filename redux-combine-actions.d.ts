declare let ReduxCombineActions: ReduxCombineActions.Static;

declare module ReduxCombineActions {
  
  interface Static {
    (): (next: any) => (action: any) => any;
    reduxCombineActions(): (next: any) => (action: any) => any; 
  } 
}

declare module "redux-combine-actions" {
  export = ReduxCombineActions;
}
