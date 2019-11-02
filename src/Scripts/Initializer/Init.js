import { UIMenuCtrl } from "../Menu/UIMenu";
import { ItemMenuCtrl } from "../Menu/ItemMenu";
import { UIViewsCtrl } from "../Views/UIViews";

//
// Dashboard App Initializer JS File
//

export const appInitializer = (function(){

    return {
        init: function(){
            //View
            UIViewsCtrl.renderViews();
            UIViewsCtrl.displayViews();
            UIViewsCtrl.displayActiveView();
            
            //Menu
            UIMenuCtrl.renderMenuTabs();
            UIMenuCtrl.renderMenuFooterTabs();
            UIMenuCtrl.highlightActiveTab();
            ItemMenuCtrl.loadEventListeners();
        }
    }
}());

    