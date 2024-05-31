import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template:
        `
            <div [ngClass]="{container: true}">
                <div *ngIf="visibility" [ngClass]="{invisible: !this.visibility, wrapper: true}">
                    <h1 bold selectedSize="48px" [defaultSize]="'40px'" [ngClass]="{title: true}">Just <kbd>Angular Project</kbd></h1>
                    <p [ngClass]="{text: true}" >
                        Angular представляет. В главных ролях, Angular и ....
                    </p>
                </div>
                <div *ngIf="!visibility" [ngClass]="{invisible: this.visibility, wrapper: true}">
                    <h1 bold selectedSize="48px" [defaultSize]="'40px'" [ngClass]="{title: true}">Just <kbd>React Project</kbd></h1>
                    <p [ngClass]="{text: true}" >
                        React представляет. В главных ролях, React и ....
                    </p>
                </div>
                <button [ngClass]="button" (click)="toggle()">Toggle</button>
            </div>
            <div [ngClass]="{container: true}">
                <ul>
                    <li [ngClass]="{text: true}" *ngFor="let item of items">{{item}}</li>
                </ul>
            </div>
        `,
    styles: [
        `
         .container{margin: 40px auto; background-color: #202020; padding: 30px; border-radius: 30px}
         .invisible{display: none;}
         .wrapper{margin-bottom: 60px; margin-top: 20px}
         .text{font-size: 28px; font-family: monospace; color: lightgray}
         .title{font-family: "Times New Roman", sans-serif; color: cyan}
         .btn{padding: 10px 30px; border-radius: 15px; font-size: 18px!important; background-color: transparent; color: white; border: #FF3F4B solid 1px}
        `
    ]
})

export class AppComponent {
    visibility: boolean = false

    button = {
        btn: true,
        text: true
    }
    toggle(){
        this.visibility=!this.visibility
    }

    items = ["React", "Angular", "Vue"]
}