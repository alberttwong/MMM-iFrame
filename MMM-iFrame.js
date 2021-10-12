/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("MMM-iFrame",{
		// Default module config.
	defaults: {
		frameWidth: "300",
		width:"100%",
		updateInterval: 0.5 * 60 * 1000,
		url: ["http://magicmirror.builders/"],
		scrolling: "no",
		enable : true
	},


	start: function () {
		self = this;
		var count = 0;
		
		console.log("Resuming");
		
		return this.getHtml();
	},
	
	getRandomInt: function (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},
	
	resume: function() {
	   console.log("Resuming");
	   return this.getDom();
	   
	},
	
	getStyles: function() {
		return [
			"MMM-iFrame.css",
		];
	},

	getHtml: function(){
		
		var { width, height } = this.config;
		var wrapper = document.createElement("div");
        var html;
		
		wrapper.className = "mmm-iframe"
		wrapper.style.width = `${this.config.frameWidth}px`;

		if (this.config.enable == true){
			html = `
				<div class="mmm-iframe-wrapper" style="padding-top: ${100 / (width / height)}%;">
					<iframe
						src="${this.config.url[this.getRandomInt(0, this.config.url.length)]}"
						width="${width}"
						height="${height}"
						scrolling="${this.config.scrolling}"
					></iframe>
				</div>
			`;
		} else {
			
			html = `
				<div>

				</div>
			`;			
			
		}

        wrapper.insertAdjacentHTML("afterbegin", html);

		return wrapper;
		
	},
	


    // Override dom generator.
	getDom: function() {

		return this.getHtml();
	},
	
	notificationReceived: function (notification, payload, sender) {
		
		
		if (notification == 'IFRAME_SHOW'){
			this.config.enable = true;
			this.updateDom();
			
		} else if (notification == 'IFRAME_HIDE'){
			this.config.enable = false;
			this.updateDom();
		}
		
		
	},

});
