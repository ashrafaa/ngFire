import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    public user: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) {
     }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.user = {
            email: 'qwe@qwe.co',
            password: '123456'
        };
    }

    anyLogin(): void {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(
            user => { 
                alert(`User id: ${user.uid}`); 
            }, 
            error => {
                alert(`Trouble login : ${error}`);
            }
        );
    }

    emailLogin(): void {
        console.log(`Check [${this.user.email}]`);
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.email,
                password: this.user.password
            }
        }).then(
            user => {
                console.log(`${this.user.email} logged in!`);
                JSON.stringify(user);
            },
            error => {
                alert(error);
            }
        );
    }

    emailSignup(): void {
        firebase.createUser({
            email: this.user.email,
            password: this.user.password
        }).then(
            user => {
                console.log(`${this.user.email} is added!`);
                JSON.stringify(user);
            },
            error => {
                alert(error);
            }
        );
    }

}