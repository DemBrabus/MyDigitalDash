//
// UI Views JS File
//

import { DataViewCtrl } from "../Views/DataViews";
import { StateMachine } from "../State/State";
import { UserInfo } from "../Data/UserInfo.js/UserInfo";

export const UIViewsCtrl = (function(){

    return {
        renderViews: function(){
            const mainViews = DataViewCtrl.MainViews();
            const footerViews = DataViewCtrl.FooterViews();
            const viewsInner = document.getElementById('views-inner');
            const User = UserInfo.accessUserInfo('Dmontoya');
            const UserFirstName = User.name.split(' ')[0];
            let MHtml = '';
            mainViews.forEach(function(view){
                MHtml += `
                    <div class="view__container" id="view-${view}">
                        <div class="view__container-inner" id="view-container-inner-${view}">

                            <div class="view__header block-styles">
                                <p class="header__title">${view}</p>
                                <div class="header__user-info--container">
                                    <div class="header__icon-container">
                                        <div class="header__icon"></div>
                                        <div class="header__icon-notification"></div>
                                    </div>
                                    <div class="header__icon-container">
                                        <div class="header__icon"></div>
                                        <div class="header__icon-notification"></div>
                                    </div>
                                    <p class="header__user-greeting">Hello, ${UserFirstName}</p>
                                    <div class="header__user-image"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                `;
            });
            let FHtml = '';
            footerViews.forEach(function(footerView){
                FHtml += `
                    <div class="view__container" id="view-${footerView}">
                        <div class="view__container-inner" id="view-container-inner-${footerView}">

                            <div class="view__header block-styles">
                                <p class="header__title">${footerView}</p>
                                <div class="header__user-info--container">
                                    <div class="header__icon-container">
                                        <div class="header__icon"></div>
                                        <div class="header__icon-notification"></div>
                                    </div>
                                    <div class="header__icon-container">
                                        <div class="header__icon"></div>
                                        <div class="header__icon-notification"></div>
                                    </div>
                                    <p class="header__user-greeting">Hello, ${UserFirstName}</p>
                                    <div class="header__user-image"></div>
                                </div>
                            </div>

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