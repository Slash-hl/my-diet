import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';
import { AppComponent as App } from './app.component';
import { Home } from './pages/home';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    declarations: [
        App,
        Home
    ],
    bootstrap: [App]
})
export class AppModule {
}
