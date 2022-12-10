//テキストの読込
function main() {
  const head =
    '<!DOCTYPE html><html><head><link rel="stylesheet" href="style.css" /><script src="script.js"></script></head><body><div id="result">';
  const foot = "</body></html>";
  console.log("run");
  var query = window.location.search.slice(1);
  var url = "";
  console.log("run2");
  console.log(query);
  if (query.slice(0, 5) === "page=") {
    query = query.slice(5);
    console.log(query);
  } else if (query === "") {
    location.href("https://ss1.xrea.com/cidertrafficlight.s223.xrea.com/dictionary/?page=welcome"); //use URL in xrea server
  } else {
    console.log("error");
    error();
  }

  var fileName = query + ".txt";
  console.log(fileName);
  var obj = createRequest(); //非同期通信オブジェクトの生成
  if (obj) {
    //通信実行
    obj.open("get", fileName);
    console.log("ok1");
    obj.onreadystatechange = function () {
      //通信完了
      if (obj.readyState === 4 && obj.status === 200) {
        console.log("ok1.5");
        //読込後の処理
        document.write(head + obj.responseText + foot);
        console.log("ok2");
        console.log(obj.responseText);
      }
    };
    obj.send(null);
  }
}

//非同期通信オブジェクトの生成
function createRequest() {
  try {
    return new XMLHttpRequest();
  } catch (e) {
    console.log("error");
    error();
    return null;
  }
}

function error() {
  document.write("<h1>Error was happend!</h1><h3>please check the url</h3>");
}

const name = document.getElementsByName('parent')
console.log(name)
if(name.length === 0){
main()
}