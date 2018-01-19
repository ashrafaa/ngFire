"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source");
var Camera = require("nativescript-camera");
var fs = require("tns-core-modules/file-system");
var SocialShare = require("nativescript-social-share");
var SharepicComponent = (function () {
    function SharepicComponent() {
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
    SharepicComponent.prototype.shareThis = function () {
        //SocialShare.shareImage(this.imageFile);
    };
    SharepicComponent = __decorate([
        core_1.Component({
            selector: "sharepic",
            moduleId: module.id,
            templateUrl: "./sharepic.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], SharepicComponent);
    return SharepicComponent;
}());
exports.SharepicComponent = SharepicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVwaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmVwaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDhEQUE0RDtBQUM1RCw0Q0FBOEM7QUFDOUMsaURBQW1EO0FBQ25ELHVEQUF5RDtBQU96RDtJQVNJO1FBTE8sa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUM7SUFDakQsQ0FBQztJQUVNLHVDQUFXLEdBQWxCO1FBQUEsaUJBK0JBO1FBOUJHLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDakQsK0NBQStDO1NBQ3RDLENBQUM7UUFDRixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxJQUFNLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBQ0kseUNBQXlDO0lBQzdDLENBQUM7SUFoRFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDOztPQUNXLGlCQUFpQixDQWlEN0I7SUFBRCx3QkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJztcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSAnbmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNoYXJlcGljXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NoYXJlcGljLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlcGljQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcGljdHVyZTogYW55O1xuICAgIHB1YmxpYyBpbWFnZVRha2VuOiBJbWFnZUFzc2V0O1xuICAgIHB1YmxpYyBpbWFnZUZpbGU6IEltYWdlU291cmNlO1xuICAgIHB1YmxpYyBzYXZlVG9HYWxsZXJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMga2VlcEFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAzMDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5waWN0dXJlID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MjAwXCI7XG4gICAgIH1cblxuICAgICBwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0aGlzLmtlZXBBc3BlY3RSYXRpb1xuLy8gICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICAgICAgfTtcbiAgICAgICAgQ2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpLnRoZW4ocGljID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHBpYyk7XG4gICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4gPSBwaWM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMuYW5kcm9pZCk7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KHBpYykudGhlbihzb3VyY2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzb3VyY2VgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gc291cmNlO1xuICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBcInNzLVwiICsgZGF0ZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnBhdGguam9pbihmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgc2F2ZWQgPSBzb3VyY2Uuc2F2ZVRvRmlsZShmaWxlLCBcInBuZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIGltZyA6ICR7ZmlsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlID0gZmlsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKHRoaXMuaW1hZ2VGaWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlVGhpcygpIHtcbiAgICAgICAgLy9Tb2NpYWxTaGFyZS5zaGFyZUltYWdlKHRoaXMuaW1hZ2VGaWxlKTtcbiAgICB9ICAgICBcbn0iXX0=