const html = $('html');
html.css("overflow","hidden");

function loading(){
  let progress = $(".progress"),
      progressText = $(".progress-text"),
      imgLoad = imagesLoaded("body"),
      imgTotal = imgLoad.images.length,	//전체 이미지 수
      imgLoaded = 0,		//로드한 이미지 수
      imgCurrent = 0,	//진행률
      progressTimer = setInterval(updateProgress, 1000 / 30);
      
  //이미지 로드할 때마다 로드한 이미지 수 늘려준다.
  imgLoad.on("progress", function(){
      imgLoaded++;
  });
  
  function updateProgress(){
    let target = (imgLoaded/imgTotal) * 100;
    imgCurrent += (target - imgCurrent)* 0.1;
    progressText.text(Math.floor(imgCurrent) + "%")
    
    if(imgCurrent >= 100){
      clearInterval(progressTimer);
      progress.addClass('active');
      html.css("overflow","auto");
    }
    
    if(imgCurrent > 99){
      imgCurrent = 100;
    }
  }
    
}//document ready

loading();


