// 面向对象的事件处理程序封装和事件对象封装
var eventUtil={
	//事件对象封装
	event:function(event){
		return event||window.event;
	},
	target:function(e){
		var event=this.event(e);
		return event.target||event.srcElement;
	},
	type:function(e){
		return this.event(e).type;
	},
	stopPropagation:function(e){
		var event=this.event(e);
		if(event.stopPropagation){
			event.stopPropagation();
		}else if(event.cancelBubble){
			event.cancelBubble=true;
		}else{
			console.log('请联系开发人员');
		}
	},
	preventDefault:function(e){
		var event=this.event(e);
		if(event.preventDefault){
			event.preventDefault();
		}else if(event.returnValue){
			event.returnValue=false;
		}else{
			console.log('请联系开发人员');
		}
	},
	//事件处理程序封装
	addHandler:function(ele,type,handler){
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false)
		}else if(ele.attachEvent){
			ele.attachEvent('on'+type,handler);
		}else{
			ele['on'+type]=handler;
		}
	},
	removeHandler:function(ele,type,handler){
		if(ele.removeEventListener){
			ele.removeEventListener(type,handler,false);
		}else if(ele.deatchEvent){
			ele.detachEvent('on'+type,handler);
		}else{
			ele['on'+type]=null;
		}
	}
}