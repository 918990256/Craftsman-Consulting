$(function(){
	let nav=document.getElementsByClassName("nav")[0];
	let li=nav.getElementsByTagName("li")[2];
	let xiala=nav.getElementsByClassName("xiala")[0];
	li.onmouseenter=function(){
		xiala.style.height="36px";
	}
	li.onmouseleave=function(){
		xiala.style.height="0";
	}

	// 轮播图
	let lis1=$(".bnImg");
	let btn=$(".btn li");
	currentIndex=0;
	let t=setInterval(move,2000);
	lis1.first().css({"z-index":10});
	btn.first().addClass("btn-hot");
	// 移入移出
	$(".banner").mouseenter(function(){
		clearInterval(t);
	});
	$(".banner").mouseleave(function(){
		t=setInterval(move,2000);
	});
	// 左右按钮
	$(".buttonl").click(function(){
		moveL();
	});
	$(".buttonr").click(function(){
		move();
	});
	// 轮播点
	btn.click(function(){
		let index=$(this).index();
		btn.removeClass("btn-hot").eq(index).addClass("btn-hot");
		lis1.css({"z-index":5}).eq(index).css({"z-index":10});
		currentIndex=index;
	})
	// 正序
	function move(){
		currentIndex++;
		if(currentIndex>lis1.length-1){
			currentIndex=0;
		}
		lis1.css({"z-index":5}).eq(currentIndex).css({"z-index":10});
		btn.removeClass("btn-hot").eq(currentIndex).addClass("btn-hot");
	}
	// 倒序
	function moveL(){
		currentIndex--;
		if(currentIndex<0){
			currentIndex=lis1.length-1;
		}
		lis1.css({"z-index":5}).eq(currentIndex).css({"z-index":10});
		btn.removeClass("btn-hot").eq(currentIndex).addClass("btn-hot");
	}
	
})