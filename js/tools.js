	// obj执行动画的对象
	// attr执行动画的样式，left，top，width，height
	// target执行动画的目标位置
	// speed速度 正负号控制方向
	// callback 回调函数
	function move(obj,attr,target,speed,callback){
		// 关闭上一个计时器
		clearInterval(obj.timer)
		
		// 获取元素目前位置
		var current = parseInt(getComputedStyle(obj,null)[attr])
		// 判断速度正负值
		if(current > target){
			speed = -speed
		}
		
		// 开启一个定时器执行动画效果
		obj.timer = setInterval(function(){
			// 获取原样式
			var oldvalue = parseInt(getComputedStyle(obj,null)[attr]);
			// 在旧值上增加
			var newvalue = oldvalue +speed;
			
			// 移动完成后调整位置
			if((speed < 0 && newvalue < target) || (speed > 0 && newvalue > target)){
				newvalue = target;
			}
			
			obj.style[attr] = newvalue + "px";
			
			// 当元素移动到0px停止执行动画
			if(newvalue == target){
				// 关闭计时器
				clearInterval(obj.timer);
				// 执行回调函数
				callback();
			}
		},10)
	}
	// 定义一个函数，像元素中添加指定的class属性值
	// obj添加class的元素
	// cn添加的class值
	function addClass(obj,cn){
		obj.className +=" "+cn
	}
	// 判断元素中是否含有指定的class属性值
	function hasClass(obj,cn){
		// 判断obj中有无cn
		// var flag = false;
		// var classlist = obj.className.split(" ");
		// classlist.forEach(function(temp){
		// 	if(temp == cn){
		// 		console.log("yes")
		// 		flag = true
		// 	}
		// })
		// return flag
		// 使用正则表达式
		var reg = new RegExp("\\b"+cn+"\\b") 
		console.log(reg.test(obj.className))
		return reg.test(obj.className)
	}
	
	// 删除元素中的class属性
	function removeClass(obj,cn){
		var reg = new RegExp("\\b"+cn+"\\b")
		// console.log(obj.className.replace(reg , ""))
		console.log(obj.className)
		obj.className = obj.className.replace(reg , "")
		console.log(obj.className)
	}
	
	// toggleClass切换一个类，有则删除，无则添加
	function toggleClass(obj,cn){
		if(hasClass(obj,cn))
			removeClass(obj,cn)
		else
			addClass(obj,cn)
	}
	
	