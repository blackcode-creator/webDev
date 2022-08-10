//LOGIN AUTH FUNCTION
function check(form) { 

  var username = form.userid.value;
  var password = form.pswrd.value;
  var email = form.email.value; 
    if( username == "admin" && password == "test123" && email == "admin@group58.com") {
        window.open('homepage.html')/*opens the target page while Id & password matches*/
      }
      else{
        alert("please check your credentials")/*displays error message*/
        }
      }

function check1(form) { 

  var username = form.userid.value;
  var password = form.pswrd.value;
  var ConfirmPassword = form.pswrd1.value;
  var email = form.email.value; 

    if( password != "test123" && password != ConfirmPassword) {
      alert("input values does not match");/*displays error message*/
      }else if(username == "admin" && password == "test123" && email == "admin@group58.com")
      {
        window.open('homepage.html');/*opens the target page while Id & password matches*/
      }else{
        alert("please check your credentials")/*displays error message*/
        }
 
  }