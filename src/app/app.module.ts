import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Timer Module
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
// Services
import { CookieService } from 'ng2-cookies';
import { AuthService} from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CountdownModule,
    ChartsModule
  ],
  providers: [CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
