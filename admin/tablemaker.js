function txtfile(content) {
  var title = document.getElementById("title").value;
  var blob = new Blob([content], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = title + ".txt";
  link.click();
}

function main() {
  var seizousho = document.getElementById("seizousho").value;
  var siyousho = document.getElementById("siyousho").value;
  var seigyoki = document.getElementById("seigyoki").value;
  var meiban = document.getElementById("meiban").value;
  var meishou = document.getElementById("meishou").value;
  var keisiki = document.getElementById("keisiki").value;
  var seizounengetu = document.getElementById("seizounengetu").value;
  var kousatenmei = document.getElementById("kousatenmei").value;
  var kousatenbangou = document.getElementById("kousatenbangou").value;
  var komento = document.getElementById("komento").value;

  console.log(seizousho);

  var html =
    '<div name="parent" style="position: relative;"><div style="width: 278px; height: 80%; position: absolute; left: 0px;"><table style="width: 278px;"><tbody><tr><td style="width: 278px; height: 30px;"><p class="small">製造所</p><p style="width: 278px;">' +
    seizousho +
    '</p></td><td style="width: 275px;"><p class="small">仕様書番号</p><p style="width: 248px;">' +
    siyousho +
    '</p></td></tr></tbody></table><table style="width: 100%;"><tr><td style="width: 15%; writing-mode: vertical-rl;">制御機</td><td style="width: 85%;"><img class="seigyoki" src="' +
    seigyoki +
    '"></td></tr><tr><td style="writing-mode: vertical-rl;">銘板</td><td><img class="meiban" src="' +
    meiban +
    '"></td></tr></table></div><div style="width: 50%; position: absolute; left: 532px;"><table style="width: 100%; height: 100%;"><tbody style="height: 100%;"><tr style="height: 33px;"><td colspan="2"><center>' +
    meishou +
    '</center></td></tr><tr style="height: 30px;"><td><p class="small">形式</p><p style="width: 300px;">' +
    keisiki +
    '</p></td><td><p class="small">製造年月</p><p style="width: 300px;">' +
    seizounengetu +
    '</p></td></tr><tr style="height: 30px;"><td><p class="small">交差点名</p><p style="margin: 0px;">' +
    kousatenmei +
    '</p></td><td><p class="small">交差点番号</p><p style="margin: 0px;">' +
    kousatenbangou +
    '</p></td></tr><tr style="height: 355px;"><td colspan="2" style="height: 355px;"><p class="small">コメント</p>' +
    komento +
    '</td></tr></tbody></table></div></div><div id="result"></div>';
  document.getElementById("result").innerHTML = html;
  console.log(html);
  txtfile(html);
}
