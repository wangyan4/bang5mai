// 搜索框
var ipt = document.getElementById('ipt');
ipt.onfocus = function(){
	ipt.value = "";
}
ipt.onblur = function(){
	ipt.value = "输入商品网址或关键词，直通全网，快速帮5购!";
}



//顶部悬浮
window.onload = function(){
	var nav = document.getElementsByClassName('nav')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>140){
			nav.style.position = 'fixed';
		}else{
			nav.style.position = 'static';
		}
	}
}




//放大镜
var cover = document.getElementsByClassName('cover')[0];
var bigPic = document.getElementsByClassName('bigPic')[0];
var big = document.getElementsByClassName('big')[0];
var movePic = document.getElementById('rightPic');
bigPic.onmouseover= function(){
	cover.style.display = 'block';
	big.style.display = 'block';
}

bigPic.onmouseout=function(){
	cover.style.display = 'none';
	big.style.display = 'none';
}
bigPic.onmousemove = function(e){
	//计算透明框的位置
	var x = e.clientX;
	var y = e.clientY;
	var b_top = bigPic.getBoundingClientRect().top;
	var b_left = bigPic.getBoundingClientRect().left;
	var w_top = y - cover.offsetHeight/2 - b_top;
	var w_left = x - cover.offsetWidth/2 - b_left;
	var maxTop = bigPic.offsetHeight-cover.offsetHeight;
	var maxLeft = bigPic.offsetWidth-cover.offsetWidth;
	//边界值判定
	w_top = w_top> maxTop ? maxTop : w_top > 0 ? w_top : 0;
	w_left = w_left> maxLeft ? maxLeft : w_left > 0 ? w_left : 0;

	cover.style.left = w_left + 'px';
	cover.style.top = w_top + 'px';
	//右侧比例放大
	//
	var persentX = w_left/(bigPic.offsetWidth-10) ;
	var persentY = w_top/(bigPic.offsetHeight-10) ;
	movePic.style.left = -persentX*movePic.offsetWidth + 'px';
	movePic.style.top = -persentY*movePic.offsetHeight + 'px';

}








//数量选取
var li1 = document.getElementById('on1');
var li2 = document.getElementById('on2');
var css1 = document.getElementById('css1');
li1.setAttribute("class", "on");
li1.onclick =function(){
	li1.setAttribute("class", "on");
	li2.setAttribute("class", "");
	css1.innerText = '"' +li1.innerHTML + '"';
}
li2.onclick =function(){
	li2.setAttribute("class", "on");
	li1.setAttribute("class", "");
	css1.innerText = '"' +li2.innerHTML + '"';
}
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn5 = document.getElementById('btn5');
var ipt1 = document.getElementById('ipt1');
var ipt1 = document.getElementById('ipt1');
var shopCar = document.getElementById('shopCar');
var surplus = document.getElementById('surplus').innerHTML;
var str = parseInt(surplus);
btn1.onclick = function(){
	if(ipt1.value > 1){
		ipt1.value--;
	}else{
		btn1.style.cursor = "not-allowed";
	}
}
btn2.onclick = function(){
	if(ipt1.value < str){
		ipt1.value++;
	}else{
		btn2.style.cursor = "not-allowed";
	}
}
btn5.onclick = function(){
	var str = parseInt(shopCar.innerText)+parseInt(ipt1.value);
	shopCar.innerText = str;
}





//弹窗遮罩
var bought = document.getElementsByClassName('bought')[0];
var cha = document.getElementsByClassName('cha')[0];
var shop = document.getElementById('shop');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var shopCar = document.getElementById('shopCar');
var ipt1 = document.getElementById('ipt1');
shop.onclick = function(){
	var str = parseInt(shopCar.innerText)+parseInt(ipt1.value);
	shopCar.innerText = str;
	bought.style.display = 'block';
}
btn3.onclick = function(){
	bought.style.display = 'none';
}
btn4.onclick = function(){
	shopCar.innerText = '0';
	bought.style.display = 'none';
}
cha.onclick = function(){
	bought.style.display = 'none';
}






//小图片滑动
var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
var bpic = document.getElementById('bpic');
var movePic = document.getElementById('rightPic');
img1.style.outline = '2px solid #ff9003';
img1.onmouseover = function(){
	img1.style.outline = '2px solid #ff9003';
	img2.style.outline = '0';
	bpic.src = "img/pp0.jpeg";
	movePic.src = "img/pp0.jpeg";
}
img2.onmouseover = function(){
	img2.style.outline = '2px solid #ff9003';
	img1.style.outline = '0';
	bpic.src = "img/pp1.jpeg";
	movePic.src = "img/pp1.jpeg";
}
var span1 = document.getElementsByClassName('spanl')[0];
var span2 = document.getElementsByClassName('spanr')[0];
span1.onclick = function(){
	var str = bpic.src;
	if(str.indexOf('pp0')>=0){
		bpic.src = "img/pp1.jpeg";
		img1.style.outline = '0';
		img2.style.outline = '2px solid #ff9003';
	}else{
		bpic.src = "img/pp0.jpeg";
		img2.style.outline = '0';
		img1.style.outline = '2px solid #ff9003';
	}
}
span1.onmouseout = function(){
	var str1 = document.getElementById('bpic').src;
	var str2 = document.getElementsByClassName('img1')[0]
	var str3 = document.getElementsByClassName('img2')[0]
	bpic.src = str1;
	img1.style.outline = str2.style.outline;
	img2.style.outline = str3.style.outline;
}
span2.onmouseout = function(){
	var str1 = document.getElementById('bpic').src;
	var str2 = document.getElementsByClassName('img1')[0]
	var str3 = document.getElementsByClassName('img2')[0]
	bpic.src = str1;
	img1.style.outline = str2.style.outline;
	img2.style.outline = str3.style.outline;
}
span2.onclick=function(){
	var str = bpic.src;
	if(str.indexOf("pp0")>=0){
		bpic.src = "img/pp1.jpeg";
		img1.style.outline = '0';
		img2.style.outline = '2px solid #ff9003';
	}else{
		bpic.src = "img/pp0.jpeg";
		img2.style.outline = '0';
		img1.style.outline = '2px solid #ff9003';
	}
}