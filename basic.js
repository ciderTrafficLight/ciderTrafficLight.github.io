function gotop(){
  window.addEventListener('scroll',function(){
  var zahyou = window.pageYOffset
  console.log(zahyou)
  var content = '<div id="gototop" style="position: fixed; buttom: 20px; left: 20px;"><a href="#"><div class="main" style="background-color: #00ddff; border-radius: 100%; width: 50px; height: 50px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" style="width: 100%; height: 100%;" class="svg"><line x1="50" y1="100" x2="100" y2="50" fill="none" stroke="black" stroke-width="3" /><line x1="150" y1="100" x2="100" y2="50" fill="none" stroke="black" stroke-width="3" /><line x1="50" y1="150" x2="100" y2="100" fill="none" stroke="black" stroke-width="3" /><line x1="150" y1="150" x2="100" y2="100" fill="none" stroke="black" stroke-width="3" /></svg></div></a></div><style>.main {background-color: #00ddff;border-radius: 100%;width: 100%;height: 100%;position: relative;}.svg {position: absolute;top: -8px;}html{scroll-behavior: smooth;}</style>'
  if(zahyou > 600){
    document.write(content)
  }else{
    try{
    document.getElementById('gototop').remove()
    }catch(e){
      console.log('no element named gototop was found')
    }
  }
