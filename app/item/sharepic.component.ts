import { Component } from "@angular/core";
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource } from 'tns-core-modules/image-source';
import { Image } from 'tns-core-modules/ui/image';
import * as fs from 'tns-core-modules/file-system';
import * as Camera from 'nativescript-camera';
import * as SocialShare from 'nativescript-social-share';
import * as Screenshot from 'nativescript-screenshot';
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: "sharepic",
    moduleId: module.id,
    templateUrl: "./sharepic.component.html",
})
export class SharepicComponent {
    public picture: any;
    public imageTaken: ImageAsset;
    public imageFile: ImageSource;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    constructor(private page: Page) {
        
        this.picture = "https://placehold.it/200x200";
     }

     public takePicture() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio
//            saveToGallery: this.saveToGallery
        };
        Camera.takePicture(options).then(pic => {
            // console.dir(pic);
            this.imageTaken = pic;
            console.log(pic.android);
            let source = new ImageSource();
            source.fromAsset(pic).then(source => {
                console.log(`source`);
                // console.dir(source);
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
        if (this.imageFile) SocialShare.shareImage(this.imageFile);
    }
    
    public screenshotThis() {
        let shotImg = new Image();
        shotImg.imageSource = Screenshot.getImage(this.page);
        this.imageFile = shotImg.imageSource;

        let folder = fs.knownFolders.documents().path;
        let date = new Date();
        let filename = "ss-" + date.getTime().toString() + ".png";
        console.log(filename);
        let file = fs.path.join(folder, filename);
        let saved = this.imageFile.saveToFile(file, "png");
        if (saved) {
            console.log(`saved img : ${file}`);  
            this.picture = file;          
        }       
    }
}