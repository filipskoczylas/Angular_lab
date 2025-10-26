import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[scrollIntoView]'
})
export class ScrollIntoViewDirective implements AfterViewInit {

    constructor(private _elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        // TODO: 13
    }


}