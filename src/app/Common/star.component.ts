import { Component,EventEmitter, OnChanges, Input, Output } from '@angular/core';

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class starComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick():void{
        console.log("The rating is "+this.rating+" clicked!");
        this.ratingClicked.emit("The rating "+this.rating+" is clicked!");
    }

}