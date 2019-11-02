import { StateMachine } from "../State/State";
import { UIMenuCtrl } from "./UIMenu";
import { UIViewsCtrl } from "../Views/UIViews";

//
// Menu Item JS File
//

export const ItemMenuCtrl = (function(){

    const EventListeners = function(){
        const menuCovers = document.querySelectorAll('.menu__tab--cover');
        menuCovers.forEach(function(cover){
            cover.addEventListener('click', ItemMenuCtrl.updateViewState);
            cover.addEventListener('mouseover', ItemMenuCtrl.menuHoverEffect);
            cover.addEventListener('mouseleave', ItemMenuCtrl.menuUnHoverEffect);
        })
    }

    return {
        updateViewState: function(e){
            const coverId = e.target.id.split('-')[3];
            StateMachine.updateViewStatus(coverId);
            UIMenuCtrl.highlightActiveTab();
            UIViewsCtrl.displayActiveView();
        },
        menuHoverEffect: function(e){
            const coverId = e.target.id.split('-')[3];
            UIMenuCtrl.highlightHoverTab(coverId);
        },
        menuUnHoverEffect: function(e){
            const coverId = e.target.id.split('-')[3];
            UIMenuCtrl.darkenNonHoverTab(coverId);
        },
        loadEventListeners: function(){
            EventListeners();
        }
    }

}());