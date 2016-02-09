// ==UserScript==
// @name         Fullscreen YouTube
// @namespace    Fullscreen YouTube
// @include      *
// @author       Philipp Hufnagl
// @description  Adds an button right from the Video title to fullscreen the YouTube video
// @match https://www.youtube.com/*
// ==/UserScript==

var expression = /www.youtube.com\/watch/;

setInterval ( function () { 

var regex = new RegExp(expression);
var str = window.location.href ;
  if (str.match(regex) )
  {
	  if (document.getElementById("full") == null)
	  {
	  
		var str = window.location.href ;
		var index = str.indexOf("?v=");
		var newUrl = str.substring(0,index) + "_popup" + str.substring(index);
		var headline =  document.getElementById("watch-headline-title");
		var a = document.createElement('a');
		var linkText = document.createTextNode("full");
		a.appendChild(linkText);
		a.title = "my title text";
		a.id = "full";
		a.href = newUrl;
		//a.class = "yt-uix-button";
		headline.appendChild(a);
	}
}
}, 222);

