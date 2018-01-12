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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUEwRDtBQUcxRCwrQ0FBNkM7QUFPN0M7SUFJSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsS0FBSyxFQUFFLFlBQVk7WUFDbkIsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLElBQUk7WUFDQSxLQUFLLENBQUMsY0FBWSxJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUssQ0FBQyxxQkFBbUIsS0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQUcsQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQy9CO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBYSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQy9CLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZUFBWSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTdEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBT21DLDBCQUFXO09BTm5DLGNBQWMsQ0E4RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIHB1YmxpYyB1c2VyOiBhbnk7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgZW1haWw6ICdxd2VAcXdlLmNvJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFueUxvZ2luKCk6IHZvaWQge1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuQU5PTllNT1VTXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICB1c2VyID0+IHsgXG4gICAgICAgICAgICAgICAgYWxlcnQoYFVzZXIgaWQ6ICR7dXNlci51aWR9YCk7IFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYFRyb3VibGUgbG9naW4gOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGVtYWlsTG9naW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGVjayBbJHt0aGlzLnVzZXIuZW1haWx9XWApO1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMudXNlci5lbWFpbH0gbG9nZ2VkIGluIWApO1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZW1haWxTaWdudXAoKTogdm9pZCB7XG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMudXNlci5lbWFpbH0gaXMgYWRkZWQhYCk7XG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59Il19