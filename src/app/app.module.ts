import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogListComponent } from './log-list/log-list.component';
import { LogAverageComponent } from './log-average/log-average.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: InstructionsComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LogListComponent,
    InstructionsComponent,
    LogAverageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
