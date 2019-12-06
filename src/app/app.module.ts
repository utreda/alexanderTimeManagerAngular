import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MountListComponent } from './mount-list/mount-list.component';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'mounts', component: MountListComponent},
  {path: 'users', component: UserListComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MountListComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
