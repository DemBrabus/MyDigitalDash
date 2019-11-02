import { UIMenuCtrl } from "../Menu/UIMenu";
import { ItemMenuCtrl } from "../Menu/ItemMenu";
import { MainViewsCtrl } from "../Views/MainViews";

//
// Dashboard App Initializer JS File
//

export const appInitializer = (function(){

    return {
        init: function(){
            MainViewsCtrl.renderViews();
            UIMenuCtrl.renderMenuTabs();
            UIMenuCtrl.renderMenuFooterTabs();
            UIMenuCtrl.highlightActiveTab();
            MainViewsCtrl.displayViews();
            MainViewsCtrl.displayActiveView();
            

            ItemMenuCtrl.loadEventListeners();
        }
    }
}());

    