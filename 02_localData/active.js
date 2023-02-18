// 주요 메소드 2개
// - 값 저장: localStorage.setItem('key', value)
// - 값 가져오기: localStorage. getItem(value);
// key 그대로 놓고 새 값 저장 시 덮어쓰기 되면서 기존 로컬 데이터 정보 수정 됨

window.onload=()=>{
    const btnSLD=document.querySelector('.btnSetLocalData');
    console.log(btnSLD);

    //Input 텍스트 값
    const input=document.querySelector('input');
    
    //set Data 버튼 클릭 시
    btnSLD.addEventListener('click',()=>{
        //할 일 처리 --> 입력 텍스트 값 가져오기
        const inputValue=input.value;
        console.log(inputValue);

        //localStorage에 저장하기
        localStorage.setItem('userId',inputValue); //key,value
        input.value="";
    });

    //get Data 버튼 클릭 시
    const btnGLD=document.querySelector('.btnGetLocalData');
    btnGLD.addEventListener('click',()=>{
        //할 일 --> 해당 키의 로컬 데이터 있으면 가져오기
        const getData=localStorage.getItem('userId');//key

        if(!getData) alert("해당 키로 로컬에 저장된 데이터가 없네요");
        else input.value=getData; //input 텍스트 박스에 삽입. 
    })

}