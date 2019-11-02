//
// UI Views JS File
//

import { DataViewCtrl } from "../Views/DataViews";
import { StateMachine } from "../State/State";

export const UIViewsCtrl = (function(){

    return {
        renderViews: function(){
            const mainViews = DataViewCtrl.MainViews();
            const footerViews = DataViewCtrl.FooterViews();
            const viewsInner = document.getElementById('views-inner');
            let MHtml = '';
            mainViews.forEach(function(view){
                MHtml += `
                    <div class="view__container" id="view-${view}">
                        <div class="view__container-inner" id="view-container-inner-${view}">

                        </div>
                    </div>
                `;
            });
            let FHtml = '';
            footerViews.forEach(function(footerView){
                FHtml += `
                    <div class="view__container" id="view-${footerView}">
                        <div class="view__container-inner" id="view-container-inner-${footerView}">

                        </div>
                    </div>
                `;
            })
            viewsInner.innerHTML = MHtml +FHtml;
        },
        displayViews: function(){
            const views = document.querySelectorAll('.view__container');
            views.forEach(function(view){
                view.style.display = 'block';
            })
        },
        displayActiveView: function(){
            const viewStatus = StateMachine.viewStatus();
            const mainViews = DataViewCtrl.MainViews();
            const footerViews = DataViewCtrl.FooterViews();

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