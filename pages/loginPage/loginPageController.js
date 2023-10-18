// login 

//login Function
function userLogin() {
    const userName = document.getElementById("userName").value; 
    const password = document.getElementById("password").value;  
     
     for (let user of model.data.users){
        
        if(user.userName === userName && user.password === password){
            model.app.loggedInUser = user;
                model.app.currentPage = 'mainPage';
                mainPageView();
                return true;
        }
    alert("You shall not pass");
     }
    }
    
    //espen