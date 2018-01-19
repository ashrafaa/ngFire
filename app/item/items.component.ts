import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Item } from "./item";
import { ItemService } from "./item.service";
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource } from 'tns-core-modules/image-source';
import * as Camera from 'nativescript-camera';
import * as fs from 'tns-core-modules/file-system';
import * as SocialShare from 'nativescript-social-share';

@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    public user: any;
    public picture: any;
    public imageTaken: ImageAsset;
    public imageFile: ImageSource;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) {
        this.picture = "https://placehold.it/200x200";
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

    public takePicture() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio
//            saveToGallery: this.saveToGallery
        };
        Camera.takePicture(options).then(pic => {
            console.dir(pic);
            this.imageTaken = pic;
            console.log(pic.android);
            let source = new ImageSource();
            source.fromAsset(pic).then(source => {
                console.log(`source`);
                console.dir(source);
                this.imageFile = source;
                let folder = fs.knownFolders.documents().path;
                console.log(folder);
                let date = new Date();
                let filename = "ss-" + date.getTime().toString() + ".png";
                console.log(filename);
                let file = fs.path.join(folder, filename);
                let saved = source.saveToFile(file, "png");
                if (saved) {
                    console.log(`saved img : ${file}`);
                    this.picture = file;
                }
            });
        }).then(() => {
            SocialShare.shareImage(this.imageFile);
        });
    }

    public shareThis() {
        //SocialShare.shareImage(this.imageFile);
    }
}