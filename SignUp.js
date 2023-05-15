

  function passWordCheck() {
    var passWord = document.getElementById("password");
    var passWord1 = document.getElementById("password1");
    var passwordCheck = document.getElementById("passwordCheck");
  
    if (passWord.value !== passWord1.value) {
      passwordCheck.innerText = "일치하지 않습니다.";
      passwordCheck.style.color = "red";
    } else {
        passwordCheck.innerText = "일치합니다.";
        passwordCheck.style.color = "black";
    }
  }

  function emailCheck() {
    var email = document.getElementById("email");
    var result = document.getElementById("result");
  
    var pattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    if(email.value !==pattern){
        result.innerText = "유효하지 않은 이메일 입니다."
    }
    if(email.value ==pattern){
    result.innerText = "유효한 이메일 입니다."
    }

    // else{    
    //     return pattern.emailCheck(email);
    // }
  }
