console.log("main.js!!");

//ロード画面
var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	strokeWidth: 0.2,
	duration: 1000,
	color: '#555',
	trailWidth: 0,
	trailColor: '#bbb',
	text: {
		style: {
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'2.0rem',
			color:'#eee'
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
		
	}
});

bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);

	setTimeout(()=>{	
		// タブをvisibleに
		$("#my_tab_1").css("visibility", "visible");
		$("#my_tab_2").css("visibility", "visible");
		$("#my_tab_3").css("visibility", "visible");
		$("#my_tab_4").css("visibility", "visible");
		$("#my_tab_5").css("visibility", "visible");
		$("#my_tab_6").css("visibility", "visible");
		$("#my_tab_7").css("visibility", "visible");
		$("#my_tab_8").css("visibility", "visible");
	}, 800)
});



setOffcanvas("textcount");
setOffcanvas("dentaku");
setOffcanvas("clock");
setOffcanvas("timer");
setOffcanvas("counter");
setOffcanvas("cpscounter");
setOffcanvas("memo");
setOffcanvas("keycode");

function setOffcanvas(id){
	const elem = document.getElementById(id);
	elem.addEventListener("show.bs.offcanvas", (e)=>{
		console.log("show:", e.target);
		$(e.target).css("z-index", 10001);
	});
	elem.addEventListener("hidden.bs.offcanvas", (e)=>{
		console.log("hidden:", e.target);
		$(e.target).css("z-index", 10000);
	});
}


//無駄機能-------------------------------------------------
//テキストカウント------------------------------------------
$("#countarea").on('input', function(){
    var charCount = $(this).val().length;
    $("#textcountNum").text(charCount + "　文字");
});


//電卓----------------------------------------------------
	let siki1 = 0; //足す式
	let keisan = 1; // 1 or 2  2だとsiki2に格納
	let siki2 = 0;
	let enzan = 0; // 1..+  2..-  3..*  4../ 


	 $("#ac").click(()=>{
		$("#kekka").text("");
	});
	 $("#1").click(()=>{
		$("#kekka").text($("#kekka").text() +"1");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#2").click(()=>{
		$("#kekka").text($("#kekka").text() +"2");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#3").click(()=>{
		$("#kekka").text($("#kekka").text() +"3");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#4").click(()=>{
		$("#kekka").text($("#kekka").text() +"4");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#5").click(()=>{
		$("#kekka").text($("#kekka").text() +"5");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#6").click(()=>{
		$("#kekka").text($("#kekka").text() +"6");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#7").click(()=>{
		$("#kekka").text($("#kekka").text() +"7");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#8").click(()=>{
		$("#kekka").text($("#kekka").text() +"8");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#9").click(()=>{
		$("#kekka").text($("#kekka").text() +"9");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan>=2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#zero").click(()=>{
		$("#kekka").text($("#kekka").text() +"0");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	})
	$("#ten").click(()=>{
		$("#kekka").text($("#kekka").text() +".");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	})
	$("#puramai").click(()=>{
		if(keisan <= 1){
			siki1 *= Number(-1);
			$("#kekka").text(siki1);
		}else if(keisan >= 2){
			siki2 *= Number(-1);
			$("#kekka").text(siki2);
		}
	})


	$("#purasu").click(()=>{
		$("#kekka").text("");
		enzan = 1;
		keisan = 2;
		console.log(keisan);	
	});
	$("#mainasu").click(()=>{
		$("#kekka").text("");
		enzan = 2;
		keisan = 2;
		
	});
	$("#kakeru").click(()=>{
		$("#kekka").text("");
		naibu = (siki1 * siki2);
		enzan = 3;
		keisan = 2;
		console.log(enzan);
		
	});
	$("#waru").click(()=>{
		$("#kekka").text("");
		naibu = (siki1 / siki2);
		enzan = 4
		keisan = 2
		
	});
	$("#ikoru").click(()=>{
		if(enzan<=1){
			siki1+=siki2
		}else if(enzan>=4){
			siki1/=siki2
		}else if(enzan>=3){
			siki1*=siki2
		}else if(enzan>=2){
			siki1-=siki2
		}
		$("#kekka").text(siki1);
		keisan = 1;
		console.log(keisan);
	});

	$("#percent").click(()=>{
		siki2 = $("#kekka").text();
		siki2/=100;
		$("#kekka").text(siki2);
	});

//時計--------------------------------------------------------
	function updateClock() {
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();

		// 2桁表示に調整
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		var timeString = hours + ":" + minutes + ":" + seconds;

		$('#clock_content').text(timeString);
	}

	// 初回表示
	updateClock();

	// 1秒ごとに更新
	setInterval(updateClock, 1000);

// タイマー------------------------------------------------------
	var timer;
        var seconds = 0;

        function updateTimer() {
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;

            // 2桁表示に調整
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;

            var timerString = minutes + ":" + remainingSeconds;

            $('#timerDisplay').text(timerString);
        }

        $('#startTimer').on('click', function() {
            // タイマーが既に動いていれば一旦停止
            clearInterval(timer);

            // 初期化
            seconds = 0;
            updateTimer();

            // 1秒ごとに更新
            timer = setInterval(function() {
                seconds++;
                updateTimer();
            }, 1000);
        });

        $('#stopTimer').on('click', function() {
            // タイマー停止
            clearInterval(timer);
        });

        $('#resetTimer').on('click', function() {
            // タイマーリセット
            clearInterval(timer);
            seconds = 0;
            updateTimer();
        });

//カウンター-------------------------------------------------------
var counterValue = 0;

        $('#increaseCounter').on('click', function() {
            counterValue++;
            $('#counterValue').text(counterValue);
        });

        $('#resetCounter').on('click', function() {
            counterValue = 0;
            $('#counterValue').text(counterValue);
        });


//cpsカウンター-------------------------------------------------------
var clickcpsCount = 0;
    var countingStarted = false;

	// 1秒ごとにクリック数を表示し、クリック数をリセット
	setInterval(function() {
		if (countingStarted) {
			console.log('Clicks: ' + clickcpsCount);
			$('#cpscounterValue').text("秒間 " + clickcpsCount + " クリック");
			clickcpsCount = 0;
		}
	}, 1000);

    $('#startCpsCounter').on('click', function() {
        countingStarted = true;
        clickcpsCount = 0;
        $('#cpscounterValue').text("秒間 " + clickcpsCount + " クリック");
    });

    $('#resetCpsCounter').on('click', function() {
        countingStarted = false;
        clickcpsCount = 0;
        $('#cpscounterValue').text("秒間 " + clickcpsCount + " クリック");
    });

    $('#increaseCpsCounter').on('click', function() {
        if (countingStarted) {
            clickcpsCount++;
        }
    });

//メモ------------------------------------------------------------------


//キー番号--------------------------------------------------------------
document.getElementById("text1").addEventListener("keydown", function(event) {
    // キーコードを取得
    var keyCode = event.keyCode || event.which;

    // 各キーコードを表示
    document.getElementById("sp1").innerText = event.key;
    document.getElementById("sp2").innerText = event.which;
    document.getElementById("sp3").innerText = keyCode;
    document.getElementById("sp4").innerText = event.code;

    // テキストボックスに入力を制限
    if ((keyCode >= 48 && keyCode <= 57) || // 数字
        (keyCode >= 65 && keyCode <= 90) || // 大文字アルファベット
        (keyCode >= 97 && keyCode <= 122)) { // 小文字アルファベット
        this.value = event.key;
    } else {
        // 数字とアルファベット以外の入力は無視
        event.preventDefault();
    }
});