/*
---
name: Fx.TextContinu.js
description: Creates a text and follow in other div.
authors: Nicolas de Marqué
requires:
    core/1.2.4:
provides: [TextContinu]
license: CC-by-SA
version: 1.0.0
*/
var t=new Date()
var sav=new Array()
var t1=t.getTime()
function delais(){
		var t=new Date()
		var t2=t.getTime()
		sav.push(t2-t1)
		t1=t2
}
Element.implement({
	fastIsHidden: function(positions){
		var bottom = this.getPosition().y+this.getSize().y;
		for(var i=0; i<positions.length; i++)
			if(bottom>positions[i])
				return true
		return false
	},
	isHidden: function(){
		var parents = this.getParents();
		//var allmarge=0
		for (var i=0; i<parents.length; i++){
			var parent=parents[i]
			if(parent.nodeName.toLowerCase()=="body")break;
			/*var bbw=parent.getStyle('border-bottom-width').toInt()
			var btw=parent.getStyle('border-top-width').toInt()
			var pb=parent.getStyle('padding-bottom').toInt()
			var pt=parent.getStyle('padding-top').toInt()
			var mb=parent.getStyle('margin-bottom').toInt()
			var mt=parent.getStyle('margin-top').toInt()
			*/
			var parentSize = parent.getSize().y//-(bbw+btw);
			//allmarge+=+pt+pb
			var bottom =  this.getPosition(parent).y+this.getSize().y;
		
			if(bottom>parentSize)
				return true;
		}
		return false;
		
	},
	isVisible: function(){
		return !this.isHidden();
	}
});

Fx.TextContinu = new Class({
	
	Implements: [Options],

	options: {
		debug : 'cutTag',
		spanClass : 'spanClass',
		incSpan : 0
	},
	initialize: function(element, followers, options, t1){
		this.subject = this.subject || this;
		this.element = element;
		this.followers = followers;
		this.followersNumber = 0
		this.follower = followers[0];
		this.setOptions(options);

		delais()
		
		this.parseText();
		delais()
		this.placeText(element.firstChild, this.follower);
		delais()
		this.mergeText(element)
		followers.each(function(ele){this.mergeText(ele)}, this);
	},
	parseText: function(){
		this.tmpDiv = new Element("div");
		this.cutTag(this.element, true);
		while(this.element.hasChildNodes()){
			this.element.removeChild(this.element.firstChild);
		}
		while(this.tmpDiv.hasChildNodes()){
			this.element.appendChild(this.tmpDiv.removeChild(this.tmpDiv.firstChild))
			if(this.tmpDiv.firstChild && this.element.lastChild.nodeName==this.tmpDiv.firstChild.nodeName)this.element.appendText(" ");
		}
	},
	cutTxt: function(element, tag){
		element.textContent.split(" ").each(function(txt, inc){
			//if(this.inc<3) alert(tag+" "+txt)
			//if(inc!=this.inc)s=" "; else s="";
			if(tag){
				var el = tag.clone()
				var tel=el
				while(tel.hasChildNodes()) tel=tel.firstChild
				tel.set('text', txt);
			}
			else
				var el = new Element("span").addClass(this.options.spanClass).addClass(this.incSpan()).set('text', txt);
			this.tmpDiv.appendChild(el)
		}, this)
	},
	cutTag: function(element, simple){
		var sibling=element.firstChild;
		if(simple==true)
			var tag=null;
		else
			if(simple==null)
				var tag = element.clone().set("text", "");
			else{
				simple.appendChild(element.clone().set("text", ""));
				var tag = simple
			}
		if(!sibling)
			this.tmpDiv.appendChild(tag)
		while(sibling){
			var child = sibling;
			sibling=sibling.nextSibling;
			if(child.nodeType==1)var newChilds=this.cutTag(child, tag);
			if(child.nodeType==3)var newChilds=this.cutTxt(child, tag);
		}
	},
	replaceOneByMore: function(one, more){
		var td = new Element("div").replaces(one)
		for(var i=0; i<more.childNodes.length; i++){
			more.childNodes.item(i).inject(td, 'before');	
		}
		td.parentNode.removeChild(td)
	},
	placeText: function(element, follower){
		if(!follower) return false;
		bottoms = this.findParentsBottoms(element.parentNode)	
		var inc=0;
		//delais()
		do{
			//var el=$(element)
			if(element.nodeType==1 && element.fastIsHidden(bottoms)){
				do{
					sibling=element.nextSibling
					//var rel=element.parentNode.removeChild(element)
					//if(rel.nodeType==1 && $(rel).hasClass(this.options.spanClass))rel=rel.firstChild;
					follower.appendChild(element.parentNode.removeChild(element))
					
				}while(element=sibling);
				//this.nextFollower();
				this.placeText(follower.firstChild, this.nextFollower());
				break;
			}
			inc++
		}while(element=element.nextSibling);
	},
	nextFollower: function(){
		this.followersNumber++
		//this.follower = this.followers[this.followersNumber]
		return this.followers[this.followersNumber]
	},
	incSpan: function(){
		this.options.incSpan++;
		return this.options.incSpan;
	},
	mergeText: function(element){
		
	},
	findParentsBottoms: function(element){
		var bottoms =  new Array();
		var parents = element.getParents();
		//var allmarge=0
		for (var i=0; i<parents.length; i++){
			var parent=parents[i]
			if(parent.nodeName.toLowerCase()=="body")break;
			/*var bbw=parent.getStyle('border-bottom-width').toInt()
			var btw=parent.getStyle('border-top-width').toInt()
			var pb=parent.getStyle('padding-bottom').toInt()
			var pt=parent.getStyle('padding-top').toInt()
			var mb=parent.getStyle('margin-bottom').toInt()
			var mt=parent.getStyle('margin-top').toInt()
			*/
			var parentBottom = parent.getCoordinates().bottom//-(bbw+btw);
			//allmarge+=+pt+pb
			bottoms.push(parentBottom)		
		}
		return bottoms

	}
})

window.addEvent('domready', function() {
		delais()
		var origins = new Hash();
		$$('[class*=follow-]').each(function(ele){
			ele.getProperty('class').split(' ').each(function(class){
				if(class.contains('follow-')){
					var elementCible=class.substring(class.indexOf('-')+1)
					if(!eval("origins."+elementCible)){
						eval("origins."+elementCible+" = new Hash()");
						eval("origins."+elementCible+".name = '"+elementCible+"'");
						eval("origins."+elementCible+".followers = new Array()");
					}
					eval("origins."+elementCible+".followers.push(ele)");
				}
			}, origins, ele)
		}, origins);
		delais()
		origins.each(function(obj){new Fx.TextContinu($(obj.name), obj.followers)});
		delais()
		alert(sav)
})
