console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

$("#kuta0").html(`<img id="kuta" src="images/kuta.png">`)

	//変数-----------------------------------------------
	let kuta = 0;
	let click_kuta = 0;
	let kps = 0;

	//アップグレード-------------------------------------
	let apgrade_money1 = 0;
	let apgrade1 = 0;
	let apgrade_money2 = 0;
	let apgrade2 = 0;
	let apgrade_money3 = 0;
	let apgrade3 = 0;

	//サウンド--------------------------------------------
	let snd = 0 //0...ON  1...OFF
	let snd0 = null // くたの叫び声

	//アニメーションの変数---------------------------------
	function doAnimation(id, type){
		const elem = $(id);
		elem.addClass("animate__animated");
		elem.addClass(type);
		elem.on("animationend", ()=>{
			elem.off("animationend");
			elem.removeAttr("class");
		});
	};

	//前提処理-------------------------------------------------
	snd0 = new Howl({
		src: ["./mp3/kuta.mp3"],
		loop: false,
		volume: 1.0
	});
	$("#tk").text(click_kuta + 1 + " tk");

	setInterval(()=>{
		click_kuta = Math.round(kps / 20);
		$("#tk").text(click_kuta + 1 + " tk");
		if(click_kuta <= 0){
			click_kuta = 1
		}
		kuta += kps;
		$("#knum").text(kuta + " くた");
		$("#kps").text(kps + " kps");
	},1000);

	//クリック処理-----------------------------------------
	$("#kuta").click(()=>{
		if(snd <= 0){
		snd0.play();
		};
		kuta += click_kuta;
		$("#knum").text(kuta + " くた")
		doAnimation("#kuta", "animate__headShake");
		console.log("くたぁ！");
	});

	$("#kps").click(()=>{
		alert("kpsは k=くた ps=Per Second 1秒間で増えるくたの量だよ！");
	})

	$("#tk").click(()=>{
		alert(`tkは t=tap k=くた 1タップで増殖するくたの量だよ！
		これはkps20につき1増えるよ！`);
	});


	//アップグレード----------------------------------------
	$("#apgrade1").click(()=>{
		if(apgrade1 <= 0){
			apgrade_money1 = 10
		}
		if(kuta >= apgrade_money1){
			kuta -= apgrade_money1;
			kps += 1;
			apgrade1 += 1;
			$("#knum").text(kuta + " くた");		
			$("#kps").text(kps + " kps");		
			$("#apgrade1_num").text(apgrade1 + " 個");
			apgrade_money1 = Math.round(apgrade_money1 + ((apgrade1 + (apgrade_money1 / 10) + 1) * 1.2456));
			$("#apgrade1_knum").text(apgrade_money1 + " くた");

		}
	});

	$("#apgrade2").click(()=>{
		if(apgrade2 <= 0){
			apgrade_money2 = 50
		}
		if(kuta >= apgrade_money2){
			kuta -= apgrade_money2;
			kps += 10;
			apgrade2 += 1;
			$("#knum").text(kuta + " くた");	
			$("#kps").text(kps + " kps");	
			$("#apgrade2_num").text(apgrade2 + " 個");
			apgrade_money2 = Math.round(apgrade_money2 + ((apgrade2 + (apgrade_money2 / 10) + 1) * 1.2456));
			$("#apgrade2_knum").text(apgrade_money2 + " くた");

		}
	});

	$("#apgrade3").click(()=>{
		if(apgrade3 <= 0){
			apgrade_money3 = 500
		}
		if(kuta >= apgrade_money3){
			kuta -= apgrade_money3;
			kps += 200;
			apgrade3 += 1;
			$("#knum").text(kuta + " くた");		
			$("#kps").text(kps + " kps");		
			$("#apgrade3_num").text(apgrade3 + " 個");
			apgrade_money3 = Math.round(apgrade_money3 + ((apgrade3 + (apgrade_money3 / 10) + 1) * 1.2456));
			$("#apgrade3_knum").text(apgrade_money3 + " くた");

		}
	});

	//サウンドを切る----------------------------------------------------------------
	$("#snd").click(()=>{
		snd += 1;
		if(snd >= 2){
			$("#snd").text("サウンド ON");
			snd = 0;
		}else{
			$("#snd").text("サウンド OFF");
		};
	});
});