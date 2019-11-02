//
// State Machine JS File
//


export const StateMachine = (function(){

    const data = {
        state: [
            {signedIn: false},
            {view: 'dashboard'},
        ]
    }

    return {
        logViewState: function(){
            console.log(data.state[1].view)
        },
        viewStatus: function(){
            return data.state[1].view;
        },
        updateViewStatus: function(id){
            data.state[1].view = id;
        },
    }

}());

