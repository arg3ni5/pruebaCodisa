import { NgModule } from '@angular/core';
import { SiNOPipe } from './si-no.pipe';

@NgModule({
  declarations: [SiNOPipe],
  exports: [
    SiNOPipe
  ]
})
export class PipesModule { }
