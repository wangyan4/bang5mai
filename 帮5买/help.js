document.write("<script language=javascript src='animate.js'></script>");
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
		if(st>170){
			nav.style.position = 'fixed';
		}else{
			nav.style.position = 'static';
		}
	}
}

//轮播图

var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('lbt');
var left = document.getElementById('spanl');
var right = document.getElementById('spanr');
var banner = document.getElementsByClassName('banner')[0];
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
    animate(left,{opacity:50})
    animate(right,{opacity:50})
    clearInterval(timer)
    banner.style.display = 'block';
}
box.onmouseout = function(){
    animate(left,{opacity:0})
    animate(right,{opacity:0})
    timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
    (function(i){
        oNavlist[i].onclick = function(){
            index = i+1;
            navmove();
            animate(slider,{left:-800*index});
        }
    })(i);
}
function next(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider,{left:-800*index},function(){
        if(index==7){
            slider.style.left = '-800px';
            index = 1;
        }
        isMoving = false;
    });
}
function prev(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(slider,{left:-800*index},function(){
        if(index==0){
            slider.style.left = '-4800px';
            index = 6;
        }
        isMoving = false;
    });
}
function navmove(){
    for( var i=0; i<oNavlist.length; i++ ){
        oNavlist[i].className = "";
    }
    if(index >6 ){
        oNavlist[0].className = "on";
    }else if(index<=0){
        oNavlist[5].className = "on";
    }else {
    	
        oNavlist[index-1].className = "on";
    }
}
timer = setInterval(next, 3000);





//公告滚动
var list1 = document.getElementsByClassName('list1')[0];
var rc = document.getElementById('rcenter');
var list0 = document.createElement('div');
list0.setAttribute("class", "list2");
rc.appendChild(list0);
var list2 = document.getElementsByClassName('list2')[0];
list2.innerHTML = list1.innerHTML;
rc.scrollTop = 0;
function move(){
	if(list2.scrollHeight <= rc.scrollTop){
		rc.scrollTop = 0;
	}else{
		rc.scrollTop++;
	}
}
var inner = setInterval(move, 50);
rc.onmouseover = function(){
    clearInterval(inner);
}
rc.onmouseout = function(){
    inner = setInterval(move, 50);
}


//充值
var buy = document.getElementById('buyp');
buy.onfocus = function(){
	buy.value = "";
}
buy.onblur = function(){
	buy.value = "请输入手机号";
}
var selec = document.getElementById('selec');
var selec0 = document.getElementById('selec0');
selec0.innerHTML = "￥" + selec.value;
selec.onchange = function(){
	selec0.innerHTML = "￥" + selec.value;
}