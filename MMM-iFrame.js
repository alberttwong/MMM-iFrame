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
				height:"300px",
				width:"100%",
                                updateInterval: 0.5 * 60 * 1000,
                                url: ["http://magicmirror.builders/"]
		},

        start: function () {
                self = this;
                setInterval( function () { 
                         self.updateDom(1000);
                         console.log('update')
                         }, this.config.updateInterval);
	},
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
        // Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
                var url_index = this.getRandomInt(0,this.config.url.length);
                console.log("URL length:" + this.config.url.length + " " + "URL index:" + url_index);
                iframe.src = this.config.url[url_index];
                console.log("url:" + iframe.src);
		return iframe;
	}

});
