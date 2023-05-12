// 가격 스크롤 ----------------------------------------
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// 평가 확인 모달 --------------------------------------
// 평가하기 버튼 클릭 시 모달 창 열기
window.onload = function(){
    rateBtn.onclick = openModal;

    // 모달 열기 함수
    function openModal() {
        document.querySelector('.modal').style.display = 'block';
      }
      
    // 모달 닫기 함수
    function closeModal() {
      document.querySelector('.modal').style.display = 'none';
    }
    
    // 닫기 버튼 클릭 시 모달 닫기
    document.querySelector('.no').addEventListener('click', closeModal);
    
    // 모달 창 외부 클릭 시 모달 닫기
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        closeModal();
      }
    });
}
