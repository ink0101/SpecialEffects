1.	! ! window.ActiveXObjct;两个！是什么意思呢？

相当于三元运算符，返回boolean值，例如
var ret = !!document.getElementById
等价于：
var ret = document.getElementById ? true : false;
当值是非空字符串和非零数字返回true，当值是空字符串、0或者null返回false。

2.	