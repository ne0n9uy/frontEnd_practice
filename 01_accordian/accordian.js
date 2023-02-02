const panelFaqContainer=document.querySelectorAll('.panel-faq-container');
console.log(panelFaqContainer); //nodeList 객체로 가져옴

//반복문 순회하며 해당 FAQ 제목 클릭 시 콜백 처리
for(let i=0; i<panelFaqContainer.length; i++){
    panelFaqContainer[i].addEventListener('click',function(){//클릭 시 이벤트
        console.log('clicked',i);
    });
}