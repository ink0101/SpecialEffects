动画的三种实现方式：

1.JavaScript的setTimeout()实现；
2.jQuery实现--最简单
3.css3效果--对浏览器要求比较高

实现动画的思想!


1.jQuery实现

	事件：mouseover
		  mouseleave

	方法：slideDown
		  slideUp
2.js实现
	
	setTimeout();
		setTimeout("ChangeH('"+id+"',1)",10);
		//单双引号要注意


	代码复用

	AddH,SubH
		ChangeH

	减少了代码量