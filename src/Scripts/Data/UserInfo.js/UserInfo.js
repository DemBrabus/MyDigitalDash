//
// User Info JS File
//

export const UserInfo = (function(){

    const Data = {
        Users: [
            {
                id: 0,
                name: 'Daniel Montoya',
                age: 26,
                userName: 'Dmontoya',
                email: 'danmontoya@gmail.com',
                password: 'Daniel12345'
            },
            {
                id: 1,
                name: 'Sami Smith',
                age: 19,
                userName: 'Ssmith',
                email: 'samismith@gmail.com',
                password: 'Sami12345'
            },
            {
                id: 2,
                name: 'Paul Wall',
                age: 32,
                userName: 'Pwall',
                email: 'paulwall@gmail.com',
                password: 'Paul12345'
            },
        ]
    }
    
    return {
        accessUserInfo: function(userName){
            let Users = Data.Users;
            let targetUser;
            Users.forEach(function(User){
                if(User.userName === userName){
                    targetUser = User;
                }
            });
            return targetUser;
        }
    }

}());