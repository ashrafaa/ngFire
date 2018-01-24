"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source");
var image_1 = require("tns-core-modules/ui/image");
var fs = require("tns-core-modules/file-system");
var Camera = require("nativescript-camera");
var SocialShare = require("nativescript-social-share");
var Screenshot = require("nativescript-screenshot");
var page_1 = require("tns-core-modules/ui/page");
var SharepicComponent = (function () {
    function SharepicComponent(page) {
        this.page = page;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.picture = "https://placehold.it/200x200";
    }
    SharepicComponent.prototype.takePicture = function () {
        var _this = this;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio
            //            saveToGallery: this.saveToGallery
        };
        Camera.takePicture(options).then(function (pic) {
            // console.dir(pic);
            _this.imageTaken = pic;
            console.log(pic.android);
            var source = new image_source_1.ImageSource();
            source.fromAsset(pic).then(function (source) {
                console.log("source");
                // console.dir(source);
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
    SharepicComponent.prototype.shareThis = function () {
        if (this.imageFile)
            SocialShare.shareImage(this.imageFile);
    };
    SharepicComponent.prototype.screenshotThis = function () {
        var shotImg = new image_1.Image();
        shotImg.imageSource = Screenshot.getImage(this.page);
        this.imageFile = shotImg.imageSource;
        var folder = fs.knownFolders.documents().path;
        var date = new Date();
        var filename = "ss-" + date.getTime().toString() + ".png";
        console.log(filename);
        var file = fs.path.join(folder, filename);
        var saved = this.imageFile.saveToFile(file, "png");
        if (saved) {
            console.log("saved img : " + file);
            this.picture = file;
        }
    };
    SharepicComponent = __decorate([
        core_1.Component({
            selector: "sharepic",
            moduleId: module.id,
            templateUrl: "./sharepic.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], SharepicComponent);
    return SharepicComponent;
}());
exports.SharepicComponent = SharepicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVwaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmVwaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDhEQUE0RDtBQUM1RCxtREFBa0Q7QUFDbEQsaURBQW1EO0FBQ25ELDRDQUE4QztBQUM5Qyx1REFBeUQ7QUFDekQsb0RBQXNEO0FBQ3RELGlEQUFnRDtBQU9oRDtJQVVJLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU52QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFLeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztJQUNqRCxDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFBQSxpQkErQkE7UUE5QkcsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNqRCwrQ0FBK0M7U0FDdEMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNoQyxvQkFBb0I7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dC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b3JlXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gJ25hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmUnO1xuaW1wb3J0ICogYXMgU2NyZWVuc2hvdCBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuc2hvdCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2hhcmVwaWNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2hhcmVwaWMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVwaWNDb21wb25lbnQge1xuICAgIHB1YmxpYyBwaWN0dXJlOiBhbnk7XG4gICAgcHVibGljIGltYWdlVGFrZW46IEltYWdlQXNzZXQ7XG4gICAgcHVibGljIGltYWdlRmlsZTogSW1hZ2VTb3VyY2U7XG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBrZWVwQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMzAwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgc3RhY2tMYXlvdXQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5waWN0dXJlID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MjAwXCI7XG4gICAgIH1cblxuICAgICBwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0aGlzLmtlZXBBc3BlY3RSYXRpb1xuLy8gICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICAgICAgfTtcbiAgICAgICAgQ2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpLnRoZW4ocGljID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHBpYyk7XG4gICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4gPSBwaWM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMuYW5kcm9pZCk7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KHBpYykudGhlbihzb3VyY2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzb3VyY2VgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gc291cmNlO1xuICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBcInNzLVwiICsgZGF0ZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnBhdGguam9pbihmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgc2F2ZWQgPSBzb3VyY2Uuc2F2ZVRvRmlsZShmaWxlLCBcInBuZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIGltZyA6ICR7ZmlsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlID0gZmlsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKHRoaXMuaW1hZ2VGaWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlVGhpcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VGaWxlKSBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKHRoaXMuaW1hZ2VGaWxlKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNjcmVlbnNob3RUaGlzKCkge1xuICAgICAgICBsZXQgc2hvdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzaG90SW1nLmltYWdlU291cmNlID0gU2NyZWVuc2hvdC5nZXRJbWFnZSh0aGlzLnBhZ2UpO1xuICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHNob3RJbWcuaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBmaWxlbmFtZSA9IFwic3MtXCIgKyBkYXRlLmdldFRpbWUoKS50b1N0cmluZygpICsgXCIucG5nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcbiAgICAgICAgbGV0IGZpbGUgPSBmcy5wYXRoLmpvaW4oZm9sZGVyLCBmaWxlbmFtZSk7XG4gICAgICAgIGxldCBzYXZlZCA9IHRoaXMuaW1hZ2VGaWxlLnNhdmVUb0ZpbGUoZmlsZSwgXCJwbmdcIik7XG4gICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIGltZyA6ICR7ZmlsZX1gKTsgIFxuICAgICAgICAgICAgdGhpcy5waWN0dXJlID0gZmlsZTsgICAgICAgICAgXG4gICAgICAgIH0gICAgICAgXG4gICAgfVxufSJdfQ==