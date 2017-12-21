import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './reducers/counter';

// Components
import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { DislikeComponent } from './dislike/dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    DislikeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter: counterReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
