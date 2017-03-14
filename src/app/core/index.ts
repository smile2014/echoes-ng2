import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { throwIfAlreadyLoaded } from './module-imports.guards';

import { CoreStoreModule } from './store';
import effects from './effects';

import { APP_SERVICES } from './services';

const AppEffects = [
  EffectsModule.run(effects[0]),
  EffectsModule.run(effects[1]),
  EffectsModule.run(effects[2]),
  EffectsModule.run(effects[3])
];

@NgModule({
  imports: [
    CoreStoreModule,
    // ...AppEffects,
  ],
  declarations: [
  ],
  exports: [
    CoreStoreModule,
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
