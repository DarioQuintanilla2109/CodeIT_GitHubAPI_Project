//Initialize class
const github = new GitHub;

//Init UI class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');



//search input event listener
//arrow function accepts event parameter
//keyup event => 
searchUser.addEventListener('keyup', (e) =>{

    //gets value from searchUser input
    const userText = e.target.value;

    if(userText !==''){
        github.getUser(userText)//promise returns from async await/fetch.. must use .then
        .then(data =>{ 
            //can traverse through objects data
           if(data.profile.message ==='Not Found'){

            //call UI to show alert
            ui.showAlert('User not found', 'alert alert-danger');
           }else{
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
           }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }

});   

