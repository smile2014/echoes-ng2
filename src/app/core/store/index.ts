import { Observable } from 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/operator/let';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
// import { NgrxActionCreatorFactoryModule } from './action-creator.util';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { getSidebarExpanded } from './app-layout';
// import { registerReducers } from './store.registry';

import { getAppReducersRegistry, EchoesState, EchoesReducers, EchoesActions } from './reducers';

import { localStorageSync } from 'ngrx-store-localstorage';

export { EchoesState } from './reducers';
// const storeAssets = registerReducers(getAppReducersRegistry());
const actions = EchoesActions; //storeAssets.actions;
const reducers = EchoesReducers; //storeAssets.reducers;
const storageConfig = ['videos', 'player', 'nowPlaylist', 'search', 'appLayout'];
// TODO - error thrown with compose 
// ERROR in Error encountered resolving symbol values statically. 
//Function calls are not supported. 
//Consider replacing the function or lambda with a reference to an exported function 
//(position 12:42 in the original .ts file), resolving symbol compose in 
// /Projects/echoes-player/node_modules/@ngrx/core/compose.d.ts, 
// const composeStore = compose(
  // localStorageSync(storageConfig, true),
  // combineReducers
// )(reducers);
const composeStore = reducers;
const optionalImports = [];

// if ('production' !== ENV) {
    // Note that you must instrument after importing StoreModule
    optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
// }
@NgModule({
  imports: [
    StoreModule.provideStore(composeStore),
    ...optionalImports
  ],
  declarations: [],
  exports: [],
  providers: [ ...actions, ActionCreatorFactory ]
})
export class CoreStoreModule {};

// shared selectors
function getAppLayoutState(state$: Observable<EchoesState>) {
  return state$.select(state => state.appLayout);
}
export function getSidebarCollapsed$(state$: Observable<EchoesState>) {
  return state$.select((state) => state.appLayout.sidebarExpanded);
}
