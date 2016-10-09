import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ROUTES} from './app.routes';
import {AppComponent as App} from './app.component';
import {Home} from './home';
import {About} from './about';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    declarations: [
        App,
        Home,
        About
    ],
    bootstrap: [App]
})
export class AppModule {
}
