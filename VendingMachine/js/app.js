let count = 0;
addEventListener('click', MoneyBtn);


function MoneyBtn(e){
    // console.log(e.target)
    const target = e.target.parentNode;
    const targetS = e.target;
    // const B1 = document.querySelector('.B1').children;
    // console.log(target)
    // console.log(B1)
    //돈 올라가는 버튼
    if (target.classList.contains('MB')) {
      count++;
      document.querySelector('.CM').innerHTML = '$' + ' ' + Math.round(count)/10;
    }
    // console.log(count);

    //돈 올라가면 선택 가능으로 바뀜 
    if ( count == 3 ){
      document.querySelector('.B1 > img').setAttribute("src", "./img/VMimg/0.3_on.png");
      document.querySelector('.B1 > img').setAttribute("class", "B1on");
    }
    else if ( count == 5 ){
      document.querySelector('.B2 > img').setAttribute("src", "./img/VMimg/0.5_on.png")
      document.querySelector('.B2 > img').setAttribute("class", "B2on");
    }
    else if ( count == 7 ){
      document.querySelector('.B3 > img').setAttribute("src", "./img/VMimg/0.7_on.png")
      document.querySelector('.B3 > img').setAttribute("class", "B3on");
    }

    // 버튼 선택하면 음료 이미지 변경 
    if ( targetS.classList.contains('B1on')){
      // console.log(target);
      document.querySelector('.D1').setAttribute("class", "D1on");
      document.querySelector('.D1on > img').setAttribute("src", "./img/VMimg/D1_on.png");
    } 
    else if ( targetS.classList.contains('B2on')){
      // console.log(target);
      document.querySelector('.D2').setAttribute("class", "D2on");
      document.querySelector('.D2on > img').setAttribute("src", "./img/VMimg/D2_on.png");
    } 
    else if ( targetS.classList.contains('B3on')){
      // console.log(target);
      document.querySelector('.D3').setAttribute("class", "D3on");
      document.querySelector('.D3on > img').setAttribute("src", "./img/VMimg/D3_on.png");
    } 
    
  };


//심심해서 만든 버튼 누르면 돈 소리
const MS = document.querySelector('#MS');
const playBtn = document.querySelector('.MB');

  function playAudio(){
    MS.volume = 0.1;
    MS.loop = false;
    MS.play();
  }
  function stopAudio(){
    MS.pause();
  }
  function loadAudio(){
    const source = document.querySelector('#MSS');
    source.src = './audio/money.mp3';
    MS.load();
    playAudio();
  }

playBtn.addEventListener('click', loadAudio);
