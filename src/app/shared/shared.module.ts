import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: []
})
export class SharedModule {
  // Avoid the creation of many instances of AuthService, because ShareModule is imported in login and register module
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
