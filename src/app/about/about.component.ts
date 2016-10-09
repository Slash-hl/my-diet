import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    template: `
        <h1>About</h1>
        <pre>this.localState = {{ localState | json }}</pre>
      `
})
export class About {
    localState: any;

    constructor(public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {
                this.localState = data;
            });
    }

}