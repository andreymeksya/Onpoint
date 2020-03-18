
  let idsArray = ['#page1', '#page2', '#page31']
  let position = 0;
  let time = Date.now();  

  function changeSideButtonColor(id){
    switch(id){
      case '#page1': 
        document.querySelector('#sideButton_1').style.background = "#f78b1f"; 
        document.querySelector('#sideButton_2').style.background = "#ffffff"; 
        document.querySelector('#sideButton_3').style.background = "#ffffff"; 
        break;
      case '#page2':
        document.querySelector('#sideButton_1').style.background = "#ffffff"; 
        document.querySelector('#sideButton_2').style.background = "#f78b1f"; 
        document.querySelector('#sideButton_3').style.background = "#ffffff"; 
        break;
      case '#page31': 
        document.querySelector('#sideButton_1').style.background = "#ffffff"; 
        document.querySelector('#sideButton_2').style.background = "#ffffff"; 
        document.querySelector('#sideButton_3').style.background = "#f78b1f"; 
        break;
    }
  }

  function sideButton(id){
    document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    changeSideButtonColor(id)
  }

  function ready(){
    document.querySelector('#page1').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    document.querySelector('#sideButton_1').style.background = "#f78b1f"; 
  }
  document.addEventListener("DOMContentLoaded", ready);


  window.addEventListener('wheel', function(event){
    if ((time + 1300 - Date.now()) < 0) {
      if (event.deltaY < 0){
      if (position > 0){
        position = position-1
        changeSideButtonColor(idsArray[position])
        document.querySelector(idsArray[position]).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      } else {
        position = 0
        document.querySelector(idsArray[position]).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      }
      
      time = Date.now();
    } else if (event.deltaY > 0) {
      if (position > 2){
        position = 2
        document.querySelector(position).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      }
      if (position < 2){
        position = position+1
        changeSideButtonColor(idsArray[position])
        document.querySelector(idsArray[position]).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        
      }
      time = Date.now();
    } 
          
        }
    });


    function onChangeSlider(value){
      if (value < 33){
        document.querySelector('#page33').scrollIntoView({
            behavior: 'smooth',
            block: 'start'})
      } else if(value > 66) {
        document.querySelector('#page31').scrollIntoView({
            behavior: 'smooth',
            block: 'start'})
      } else {
        document.querySelector('#page32').scrollIntoView({
            behavior: 'smooth',
            block: 'start'})
      }
    }
