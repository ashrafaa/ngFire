"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var item_service_1 = require("./item.service");
var image_source_1 = require("tns-core-modules/image-source");
var Camera = require("nativescript-camera");
var fs = require("tns-core-modules/file-system");
var SocialShare = require("nativescript-social-share");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.picture = "https://placehold.it/200x200";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this.user = {
            email: 'qwe@qwe.co',
            password: '123456'
        };
    };
    ItemsComponent.prototype.anyLogin = function () {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(function (user) {
            alert("User id: " + user.uid);
        }, function (error) {
            alert("Trouble login : " + error);
        });
    };
    ItemsComponent.prototype.emailLogin = function () {
        var _this = this;
        console.log("Check [" + this.user.email + "]");
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.email,
                password: this.user.password
            }
        }).then(function (user) {
            console.log(_this.user.email + " logged in!");
            JSON.stringify(user);
        }, function (error) {
            alert(error);
        });
    };
    ItemsComponent.prototype.emailSignup = function () {
        var _this = this;
        firebase.createUser({
            email: this.user.email,
            password: this.user.password
        }).then(function (user) {
            console.log(_this.user.email + " is added!");
            JSON.stringify(user);
        }, function (error) {
            alert(error);
        });
    };
    ItemsComponent.prototype.takePicture = function () {
        var _this = this;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio
            //            saveToGallery: this.saveToGallery
        };
        Camera.takePicture(options).then(function (pic) {
            console.dir(pic);
            _this.imageTaken = pic;
            console.log(pic.android);
            var source = new image_source_1.ImageSource();
            source.fromAsset(pic).then(function (source) {
                console.log("source");
                console.dir(source);
                _this.imageFile = source;
                var folder = fs.knownFolders.documents().path;
                console.log(folder);
                var date = new Date();
                var filename = "ss-" + date.getTime().toString() + ".png";
                console.log(filename);
                var file = fs.path.join(folder, filename);
                var saved = source.saveToFile(file, "png");
                if (saved) {
                    console.log("saved img : " + file);
                    _this.picture = file;
                }
            });
        }).then(function () {
            SocialShare.shareImage(_this.imageFile);
        });
    };
    ItemsComponent.prototype.shareThis = function () {
        //SocialShare.shareImage(this.imageFile);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: __filename,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUEwRDtBQUUxRCwrQ0FBNkM7QUFFN0MsOERBQTREO0FBQzVELDRDQUE4QztBQUM5QyxpREFBbUQ7QUFDbkQsdURBQXlEO0FBT3pEO0lBV0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQckMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBS3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUM7SUFDakQsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEtBQUssRUFBRSxZQUFZO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1NBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxJQUFJO1lBQ0EsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFLLENBQUMscUJBQW1CLEtBQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFBQSxpQkFpQkM7UUFoQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFHLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUMvQjtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZ0JBQWEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQUEsaUJBYUM7UUFaRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUMvQixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGVBQVksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFTSxvQ0FBVyxHQUFsQjtRQUFBLGlCQStCQztRQTlCRyxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ2pELCtDQUErQztTQUN0QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBTSxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUNJLHlDQUF5QztJQUM3QyxDQUFDO0lBM0dRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FjbUMsMEJBQVc7T0FibkMsY0FBYyxDQTRHMUI7SUFBRCxxQkFBQztDQUFBLEFBNUdELElBNEdDO0FBNUdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbSc7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tICduYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIHB1YmxpYyB1c2VyOiBhbnk7XG4gICAgcHVibGljIHBpY3R1cmU6IGFueTtcbiAgICBwdWJsaWMgaW1hZ2VUYWtlbjogSW1hZ2VBc3NldDtcbiAgICBwdWJsaWMgaW1hZ2VGaWxlOiBJbWFnZVNvdXJjZTtcbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMzAwO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5waWN0dXJlID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MjAwXCI7XG4gICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBlbWFpbDogJ3F3ZUBxd2UuY28nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcxMjM0NTYnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYW55TG9naW4oKTogdm9pZCB7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5BTk9OWU1PVVNcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIHVzZXIgPT4geyBcbiAgICAgICAgICAgICAgICBhbGVydChgVXNlciBpZDogJHt1c2VyLnVpZH1gKTsgXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChgVHJvdWJsZSBsb2dpbiA6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZW1haWxMb2dpbigpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coYENoZWNrIFske3RoaXMudXNlci5lbWFpbH1dYCk7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy51c2VyLmVtYWlsfSBsb2dnZWQgaW4hYCk7XG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBlbWFpbFNpZ251cCgpOiB2b2lkIHtcbiAgICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy51c2VyLmVtYWlsfSBpcyBhZGRlZCFgKTtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRoaXMua2VlcEFzcGVjdFJhdGlvXG4vLyAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeVxuICAgICAgICB9O1xuICAgICAgICBDYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykudGhlbihwaWMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kaXIocGljKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbiA9IHBpYztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBpYy5hbmRyb2lkKTtcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgICAgIHNvdXJjZS5mcm9tQXNzZXQocGljKS50aGVuKHNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNvdXJjZWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvbGRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IFwic3MtXCIgKyBkYXRlLmdldFRpbWUoKS50b1N0cmluZygpICsgXCIucG5nXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZnMucGF0aC5qb2luKGZvbGRlciwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCBzYXZlZCA9IHNvdXJjZS5zYXZlVG9GaWxlKGZpbGUsIFwicG5nXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWQgaW1nIDogJHtmaWxlfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY3R1cmUgPSBmaWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UodGhpcy5pbWFnZUZpbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hhcmVUaGlzKCkge1xuICAgICAgICAvL1NvY2lhbFNoYXJlLnNoYXJlSW1hZ2UodGhpcy5pbWFnZUZpbGUpO1xuICAgIH1cbn0iXX0=