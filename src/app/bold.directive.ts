import {Directive, ElementRef, Renderer2, HostListener, HostBinding, Input} from "@angular/core";

@Directive({
    selector: '[bold]',
})

export class BoldDirective{
    private fontSize: string;
    private fontWeight: string = "normal";

    @Input() selectedSize: string = "48px";
    @Input() defaultSize: string = "40px";

    @HostBinding("style.fontSize") get getFontSize() {
        return this.fontSize;
    }
    @HostBinding("style.fontWeight") get getFontWeight() {
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }
    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}