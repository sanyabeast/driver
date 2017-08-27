"use strict";
define(function(){

	var Droid = function(){

	};

	Droid.prototype = {
		check : function(name, args){
			if (window.Android &&window.Android[name]){
				return true;
			} else {
				console.warn("Android: " + name + ": ", args);
			}
		},
		showToast : function(toast){
			if (this.check("showToast", arguments)){
				window.Android.showToast(toast);				
			}
		},
		makeNotification : function(options){
			if (this.check("makeNotification", arguments)){
				options.ticker = options.ticker || options.content;
				options.contentInfo = options.contentInfo || "";
				window.Android.makeNotification(options.title, options.ontent, options.ticker, options.contentInfo);
			}
		}
	};

	return Droid;

});