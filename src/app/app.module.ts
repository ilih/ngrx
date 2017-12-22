import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { LikesComponent } from './home/likes/likes.component';
import { DislikeComponent } from './home/dislike/dislike.component';
import { CountComponent } from './home/likes/count/count.component';
import { WeatherComponent } from './home/weather/weather.component';
import { HomeComponent } from './home/home.component';

// Services
import { WeatherService } from './services/weather.service';
import {ThreadService} from './services/thread.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// Reducers
import { counterReducer } from './store/home/counter.reducer';
import { nameReducer } from './store/home/name.reducer';
import { postReducer } from './store/home/post.reducer';
// Effects
import { WeatherEffects } from './store/home/weather.effect';
import { UserComponent } from './user/user.component';
import { UserSelectComponent } from './user/user-select/user-select.component';
import { ThreadListComponent } from './user/thread-list/thread-list.component';
import { MessageListComponent } from './user/message-list/message-list.component';
import { MessageSectionComponent } from './user/message-section/message-section.component';
import { ThreadSectionComponent } from './user/thread-section/thread-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    DislikeComponent,
    CountComponent,
    WeatherComponent,
    HomeComponent,
    UserComponent,
    UserSelectComponent,
    ThreadListComponent,
    MessageListComponent,
    MessageSectionComponent,
    ThreadSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // EffectsModule.run(
    //   WeatherEffects
    // ),
    StoreModule.provideStore({
      counter: counterReducer,
      username: nameReducer,
      post: postReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [
    WeatherService,
    ThreadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
