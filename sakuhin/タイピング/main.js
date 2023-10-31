console.log("main.js!!");
// ロード時の処理--------------------------------------------------------------------
let timer1;
let time = 0; // プレイ時間
let type = 0; // タイピング文字数
let type_s = 0; //秒間タイプ数
let enabled = 1; // 0...ture  1...false
let num = 1; //最初の一文字かどうかの判断
let text2_index = 0;
let max = 0;
let min = 0;
let rnd = Math.floor(Math.random() * (max - min) + min);
let text;
let text2;
let option = 0; // 0...on 1...off

snd0 = new Howl({
  src:["./sounds/daon.mp3"],
  loop: false,
  volume: 1.0
});

snd1 = new Howl({
  src:["./sounds/miss.mp3"],
  loop: false,
  volume: 1.0
});

//JSONデータの取得---------------------------------------------------------------------------
$(document).ready(function() { // 全体を囲わないとq_arrが使えない
  $.getJSON('data.json', function(data) {
      // JSONデータのquestions配列をq_arr配列に格納
      var q_arr = data.questions;
      max = q_arr.length;

// スタートボタンを押したとき--------------------------------------------------------
$("#start").click(()=>{ 
  enabled = 0;
  $("#start").css("visibility", "hidden"); //ボタンを隠す
  $("#text2").css("visibility", "visible"); // text2の表示
  $("#option").css("visibility", "hidden");
  $("#end").css("visibility", "visible");
  $("#topic").css("visibility", "hidden");
  $("#ok").css("visibility", "hidden");

  rnd = Math.floor(Math.random() * (max - min) + min);
  $("#text1").text(q_arr[rnd].text);
  $("#text2").text(q_arr[rnd].text2);
  text = $("#text1").text();
  text2 = $("#text2").text();

});

// タイマーの処理-------------------------------------------------------------------
timer1 = setInterval(()=>{ 
    //クリアしたかどうかなどを書く
    if(enabled == 0){
        time += 1;
    }
    //$("#start").css("visibility", "visible");
},20);

// タイピング処理-------------------------------------------------------------------
function updateText() { 
  let newText = text2.split('').map(function(char, index) {
    if (index < text2_index) {
      return '<span style="color: red; font-size: 20px;">' + char + '</span>';
    } else {
      return char;
    }
  }).join('');

  $('#text2').html(newText);
}

$('#start').click(function() {
  $(document).off('keydown').on('keydown', function(e) {
    // あってるかの判定-------------------------------------------------------------
    if (text2_index < text2.length && e.key === text2[text2_index]) { 
      text2_index++;
      type += 1;
      if (option == 0){
        snd0.play();
      };
      updateText();
      // クリア判断------------------------------------------------------------------
      if(text2_index == text2.length){ 
        text2_index = 0;
        rnd = Math.floor(Math.random() * (max - min) + min);
        $("#text1").text(q_arr[rnd].text);
        $("#text2").text(q_arr[rnd].text2);
        text = $("#text1").text();
        text2 = $("#text2").text();
      }
    }else{
      if (option == 0){
        snd1.play();
      };
    }
  });
});

//終了ボタンの処理---------------------------------------------------------------------
$("#end").click(()=>{
  enabled = 1;
  $("#option").css("visibility", "visible");
  $("#end").css("visibility", "hidden");
  $("#topic").css("visibility", "visible");
  $("#ok").css("visibility", "visible");
  time = Math.floor(time / 5);
  time /= 10;
  type_s = Math.floor(type / time * 10);
  type_s /= 10;

  $("#text1").text("結果");
  text2 = $("#text2").text("時間:" + time + "秒　" + "タイプ文字数:" + type + "文字　" + "秒間タイプ数:" + type_s + "文字");
});

$("#ok").click(()=>{
  $("#start").css("visibility", "visible");
  $("#text2").css("visibility", "hidden"); 
  $("#ok").css("visibility", "hidden");
  $("#text1").text("ITパスポートタイピング");

  time = 0;
  type = 0;
  text2_index = 0;
});
// 設定ボタン-----------------------------------------------------------------------------
$("#option").click(()=>{
  if(option == 0){
    option = 1;
    $("#option").val("効果音OFF");
  }else{
    option = 0;
    $("#option").val("効果音ON");
  }
});


});
});


/* {
    "no": ,
    "text": "",
    "text2": ""
}, */