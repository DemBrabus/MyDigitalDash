//
// Main Views JS File
//

import { DataMenuCtrl } from "../Menu/DataMenu";
import { StateMachine } from "../State/State";

export const MainViewsCtrl = (function(){

    return {
        renderViews: function(){
            const tabs = DataMenuCtrl.MenuTabs();
            const footerTabs = DataMenuCtrl.FooterTabs();
            const viewsInner = document.getElementById('views-inner');
            let view = '';
            tabs.forEach(function(tab){
                view += `
                    <div class="view__container" id="view-${tab}">
                        <div class="view__container-inner" id="view-container-inner-${tab}">

                        </div>
                    </div>
                `;
            });
            let footerView = '';
            footerTabs.forEach(function(footerTab){
                footerView += `
                    <div class="view__container" id="view-${footerTab}">
                        <div class="view__container-inner" id="view-container-inner-${footerTab}">

                        </div>
                    </div>
                `;
            })
            viewsInner.innerHTML = view + footerView;
        },
        displayViews: function(){
            const views = document.querySelectorAll('.view__container');
            views.forEach(function(view){
                view.style.display = 'block';
            })
        },
        displayActiveView: function(){
            const viewStatus = StateMachine.viewStatus();
            const mainViews = DataMenuCtrl.MenuTabs();
            const footerViews = DataMenuCtrl.FooterTabs();

            mainViews.forEach(function(view){
                if(view === viewStatus){
                    document.getElementById(`view-${view}`).style.opacity = "1";
                    document.getElementById(`view-${view}`).style.zIndex = "10";
                } else if(view !== viewStatus){
                    document.getElementById(`view-${view}`).style.opacity = "0";
                    document.getElementById(`view-${view}`).style.zIndex = "1";
                }
            });
            footerViews.forEach(function(view){
                if(view === viewStatus){
                    document.getElementById(`view-${view}`).style.opacity = "1";
                    document.getElementById(`view-${view}`).style.zIndex = "10";
                } else if(view !== viewStatus){
                    document.getElementById(`view-${view}`).style.opacity = "0";
                    document.getElementById(`view-${view}`).style.zIndex = "1";
                }
            });
        },
    }

}());