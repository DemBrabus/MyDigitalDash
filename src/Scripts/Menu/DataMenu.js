//
// Menu Data JS File
//

export const DataMenuCtrl = (function(){

    const Data = {
        MenuTabs: [
            'dashboard',
            'finances',
            'health',
            'goals',
            'calendar',
            'account',
            'notepad',
            'files'
        ],
        FooterTabs: [
            'settings',
            'upgrade'
        ]
    }

    return {
        MenuTabs: function(){
            return Data.MenuTabs;
        },
        FooterTabs: function(){
            return Data.FooterTabs;
        }
    }

}());