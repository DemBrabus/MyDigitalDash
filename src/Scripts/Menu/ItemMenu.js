import { StateMachine } from "../State/State";
import { UIMenuCtrl } from "./UIMenu";

//
// Menu Item JS File
//

export const ItemMenuCtrl = (function(){

    const EventListeners = function(){
        const menuCovers = document.querySelectorAll('.menu__tab--cover');
        menuCovers.forEach(function(cover){
            cover.addEventListener('click', ItemMenuCtrl.updateViewState)
        })
    }

    return {
        updateViewState: function(e){
            const coverId = e.target.id.split('-')[3];
            StateMachine.updateViewStatus(coverId);
            UIMenuCtrl.highlightActiveTab();
            UIMenuCtrl.displayActiveView();
        },
        loadEventListeners: function(){
            EventListeners();
        }
    }

}());