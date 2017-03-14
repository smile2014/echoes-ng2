import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { throwIfAlreadyLoaded } from './module-imports.guards';

import { CoreStoreModule } from './store';
import effects from './effects';

import { APP_SERVICES } from './services';

export function bootstrapEffects() {
  return effects.map((effect: any) => EffectsModule.run(effect));
}
@NgModule({
  imports: [
    CoreStoreModule,
    ...bootstrapEffects(),
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
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
