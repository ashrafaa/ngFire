"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUEwRDtBQUUxRCwrQ0FBNkM7QUFPN0M7SUFJSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMzQyxDQUFDO0lBRUYsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsS0FBSyxFQUFFLFlBQVk7WUFDbkIsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLElBQUk7WUFDQSxLQUFLLENBQUMsY0FBWSxJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUssQ0FBQyxxQkFBbUIsS0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQUcsQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQy9CO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBYSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQy9CLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZUFBWSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTlEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBT21DLDBCQUFXO09BTm5DLGNBQWMsQ0FnRTFCO0lBQUQscUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IF9fZmlsZW5hbWUsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBwdWJsaWMgdXNlcjogYW55O1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHtcbiAgICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAncXdlQHF3ZS5jbycsXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQ1NidcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhbnlMb2dpbigpOiB2b2lkIHtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkFOT05ZTU9VU1xuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgdXNlciA9PiB7IFxuICAgICAgICAgICAgICAgIGFsZXJ0KGBVc2VyIGlkOiAke3VzZXIudWlkfWApOyBcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBUcm91YmxlIGxvZ2luIDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBlbWFpbExvZ2luKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2hlY2sgWyR7dGhpcy51c2VyLmVtYWlsfV1gKTtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnVzZXIuZW1haWx9IGxvZ2dlZCBpbiFgKTtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGVtYWlsU2lnbnVwKCk6IHZvaWQge1xuICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnVzZXIuZW1haWx9IGlzIGFkZGVkIWApO1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59Il19