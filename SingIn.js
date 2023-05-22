var emailInput = document.getElementById("email");

emailInput.addEventListener("input", function (event) {
    if (emailInput.validity.valid) {
      emailError.textContent = ""; // 유효한 이메일 주소입니다.
    } else {
      emailError.textContent = "유효한 이메일 주소를 입력해주세요.";
    }
  });   