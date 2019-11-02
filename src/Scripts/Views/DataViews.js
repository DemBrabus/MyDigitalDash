//
// Data Views JS File
//

export const DataViewCtrl = (function(){

    const Data = {
        MainViews: [
            'dashboard',
            'finances',
            'health',
            'goals',
            'calendar',
            'account',
            'notepad',
            'files'
        ],
        FooterViews: [
            'settings',
            'upgrade'
        ]
    }

    return {
        MainViews: function(){
            return Data.MainViews;
        },
        FooterViews: function(){
            return Data.FooterViews;
        }
    }

}());


