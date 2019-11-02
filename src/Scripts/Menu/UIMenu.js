import { DataMenuCtrl } from "./DataMenu";
import { StateMachine } from "../State/State";


//
// Menu UI JS File
//

export const UIMenuCtrl = (function(){

    return {
        renderMenuTabs: function(){
            const tabs = DataMenuCtrl.MenuTabs();
            const menuList = document.getElementById('menu-tabs-list');
            let menuTab = '';
            tabs.forEach(function(tab){
                menuTab += `
                    <li class="menu__tabs--listItem">
                        <div class="menu__tab--active" id="menu-tab-active-${tab}"></div>
                        <div class="menu__tab--content">
                            <div class="menu__tab--cover" id="menu-tab-cover-${tab}"></div>
                            <div class="menu__tab--icon" id="menu-tab-icon-${tab}"></div>
                            <p class="menu__tab--text" id="menu-tab-text-${tab}">${tab}</p>
                            <div class="menu__tab-notification" id="menu-tab-notification-${tab}"></div>
                        </div>
                    </li>
                `;
            })
            menuList.innerHTML = menuTab;
        },
        renderMenuFooterTabs: function(){
            const footerTabs = DataMenuCtrl.FooterTabs();
            const footerList = document.getElementById('menu-footer-tabs');
            let footerTab = '';
            footerTabs.forEach(function(tab){
                footerTab += `
                    <li class="menu__tabs--listItem">
                        <div class="menu__tab--active" id="menu-tab-active-${tab}"></div>
                        <div class="menu__tab--content">
                            <div class="menu__tab--cover" id="menu-tab-cover-${tab}"></div>
                            <div class="menu__tab--icon" id="menu-tab-icon-${tab}"></div>
                            <p class="menu__tab--text" id="menu-tab-text-${tab}">${tab}</p>
                            <div class="menu__tab-notification" id="menu-tab-notification-${tab}"></div>
                        </div>
                    </li>
                `;
            })
            footerList.innerHTML = footerTab;
        },
        highlightActiveTab: function(){
            const viewStatus = StateMachine.viewStatus();
            const mainTabs = DataMenuCtrl.MenuTabs();
            const footerTabs = DataMenuCtrl.FooterTabs();
            
            mainTabs.forEach(function(tab){
                if(tab === viewStatus){
                    document.getElementById(`menu-tab-icon-${tab}`).style.backgroundColor = 'rgb(206, 206, 206)';
                    document.getElementById(`menu-tab-text-${tab}`).style.color = 'rgb(206, 206, 206)';
                    document.getElementById(`menu-tab-active-${tab}`).style.display = 'block';
                } else if(tab !== viewStatus) {
                    document.getElementById(`menu-tab-icon-${tab}`).style.backgroundColor = '#6F6F6F';
                    document.getElementById(`menu-tab-text-${tab}`).style.color = '#6F6F6F';
                    document.getElementById(`menu-tab-active-${tab}`).style.display = 'none';
                }
            });
            footerTabs.forEach(function(footerTab){
                const footerTabLowerCase = footerTab.toLowerCase();
                if(footerTabLowerCase === viewStatus){
                  document.getElementById(`menu-tab-icon-${footerTab}`).style.backgroundColor = 'rgb(206, 206, 206)';
                    document.getElementById(`menu-tab-text-${footerTab}`).style.color = 'rgb(206, 206, 206)';
                    document.getElementById(`menu-tab-active-${footerTab}`).style.display = 'block';
                } else if(footerTabLowerCase!== viewStatus) {
                    document.getElementById(`menu-tab-icon-${footerTab}`).style.backgroundColor = '#6F6F6F';
                    document.getElementById(`menu-tab-text-${footerTab}`).style.color = '#6F6F6F';
                    document.getElementById(`menu-tab-active-${footerTab}`).style.display = 'none';
                }
            })
        },
        highlightHoverTab: function(id){
            const menuTabTexts = document.querySelectorAll('.menu__tab--text');
            const menuTabIcon = document.querySelectorAll('.menu__tab--icon');
            const viewStatus = StateMachine.viewStatus();
                menuTabTexts.forEach(function(tabText){
                    const textId = tabText.id.split('-')[3];
                    if(textId === id && textId === viewStatus){
                        
                    } else if(textId === id && textId !== viewStatus) {
                        tabText.style.color = 'rgb(167, 167, 167)';
                    } else if(textId !== id && textId !== viewStatus){
                        tabText.style.color = '#6F6F6F';
                    }
                });
                menuTabIcon.forEach(function(tabIcon){
                    const IconId = tabIcon.id.split('-')[3];
                    if(IconId === id && IconId === viewStatus){
                        
                    } else if(IconId === id && IconId !== viewStatus) {
                        tabIcon.style.backgroundColor = 'rgb(167, 167, 167)';
                    } else if(IconId !== id && IconId !== viewStatus){
                        tabIcon.style.backgroundColor = '#6F6F6F';
                    }
                });
            
        },
        darkenNonHoverTab: function(id){
            const menuTabTexts = document.querySelectorAll('.menu__tab--text');
            const menuTabIcon = document.querySelectorAll('.menu__tab--icon');
            const viewStatus = StateMachine.viewStatus();
                menuTabTexts.forEach(function(tabText){
                    const textId = tabText.id.split('-')[3];
                    if(textId === id && textId === viewStatus){
                        
                    } else if(textId === id && textId !== viewStatus) {
                        tabText.style.color = '#6F6F6F';
                    }
                });
                menuTabIcon.forEach(function(tabIcon){
                    const IconId = tabIcon.id.split('-')[3];
                    if(IconId === id && IconId === viewStatus){
                        
                    } else if(IconId === id && IconId !== viewStatus) {
                        tabIcon.style.backgroundColor = '#6F6F6F';
                    }
                });
        },
    }

}());