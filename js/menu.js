
// 一级菜单触发事件
// 更新一级菜单的状态
function updateMainMenuStatu(menuItem) {
	$(menuItem).addClass("action").siblings("li").removeClass("action");
}

// 更新二级菜单的状态
function updateSecondMenuStatu(menuItem) {
	if ($(menuItem).is(':hidden')) {
		$(".menu_second").hide();
		$(menuItem).show();
	} else {
		$(".menu_second").hide();
	}
}

function cleanSecondMenu() {
	$(".menu_second").hide();
}

// 切换krpano场景
function krpanoLoadScene(seceneName) {
	document.getElementById("krpanoSWFObject").call("loadscene('" + seceneName + "')");
}

// 跳转到新链接
function gotoNewPage(pageUrl) {
	window.location.href = pageUrl;
}

// 播放音乐
//function playMusic( musicPath ) {
//	var audio = document.createElement('audio'),
//		play = function () {
//			audio.play();
//			document.removeEventListener("touchstart", play, false);
//		};
//	audio.src = musicPath;
//	audio.loop = 'loop';
//	document.body.appendChild(audio)
//	audio.play();
//	document.addEventListener("WeixinJSBridgeReady", function () {
//		play();
//	}, false);
//	document.addEventListener('YixinJSBridgeReady', function () {
//		play();
//	}, false);
//	document.addEventListener("touchstart", play, false);
//}

// SAAS
function imsaas_init() {
	$('.sandbox-btngroup').addClass('show')
	if ($('.saas-header')) {
		$('.saas-header').addClass('show')
	}
}

function littleplanetintroEnd() {
	$('.sandbox-btngroup').addClass('show')
	if ($('.saas-header')) {
		$('.saas-header').addClass('show')
	}
}

// ========== 兼容ios8及一下系统 的菜单 ==========
$(function(){
	$( ".menu_main>li" ).width( parseInt( 100 / $( ".menu_main>li" ).length ) + '%' );	
});
