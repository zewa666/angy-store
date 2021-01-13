import { InjectionToken, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { isStateHistory } from './history';
import { Store, StoreOptions } from './store';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: "Console", useValue: console },
    { provide: Performance, useValue: performance }
  ],
  exports: []
})
export class ANGyStoreModule {
  constructor(private injector: Injector) {
    DIContainer = this.injector;
  }

  public static forRoot(config: StoreOptions): ModuleWithProviders<ANGyStoreModule> {
    return {
      ngModule: ANGyStoreModule,
      providers: [
        Store,
        {
          provide: StoreConfig,
          useFactory: () => {
            if (!config || !config.initialState) {
              throw new Error("initialState must be provided via options");
            }

            if (config.history?.undoable && !isStateHistory(config.initialState)) {
              config.initialState = { past: [], present: config.initialState, future: [] };
            }

            return config;
          }
        }
      ]
    };
  }
}

export let DIContainer: Injector;

export const StoreConfig = new InjectionToken<StoreOptions>("StoreOptions");
