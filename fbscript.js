
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '542393063246097', // your app id
          cookie     : true,
          xfbml      : true,
          version    : 'v3.3' // graph api version in this case is v2.12
        });
          
        FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            }); 
          
      };
     
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
     
      function statusChangeCallback(response) {
            if (response.status === "connected") {
                console.log("Logged in and authenticated");
                setElements(true);
                graphAPI();
            } else {
                console.log("Not authenticated");
                setElements(false);
            }
        }
     
        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }
     
        function setElements(isLoggedIn){
          if(isLoggedIn){
            document.getElementById('fb-btn').style.display = 'none';
            document.getElementById('logout').style.display = 'block';
            document.getElementById("log").innerHTML = "You are logged in as:";
          } else {
            document.getElementById('fb-btn').style.display = 'block';
            document.getElementById('logout').style.display = 'none';
            document.getElementById("log").innerHTML = "Please log in" ;
          }
        }
     
        function logout(){
          FB.logout(function(response){
            setElements(false);
          })
        }
     
        function graphAPI(){
          FB.api("me?fields=id,name,email" , function(response){
            if(response && !response.error){
                document.getElementById("logID").innerHTML = response.id ;
                document.getElementById("logName").innerHTML = response.name ;
                document.getElementById("logEmail").innerHTML = response.email ;
              console.log(response);
            }
          })
        }

                // login logout function
        //         function checkLogin() {
        //     var logmessage;
            
        //     if (checkLoginState()=== true) {
        //         logmessage="You are logged in";
        //     } else {
        //         logmessage="Please log in"
        //     }
        //     document.getElementById("log").innerHTML = logmessage;
        // }
     
