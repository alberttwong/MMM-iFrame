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
                                scrolling: "no"
		},

        start: function () {
                self = this;
                var count = 0;
                if (this.config.url.length > 0 ) {
                      setInterval( function () { 
                         self.updateDom(1000);
                         console.log('update' + count++)
                         }, this.config.updateInterval);
                }
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

        // Override dom generator.
	getDom: function() {
                var { width, height } = this.config;
                var wrapper = document.createElement("div");
                var getTimeStamp = new Date().getTime();
                wrapper.className = "mmm-iframe"
                wrapper.style.width = `${this.config.frameWidth}px`;
               var src = this.config.url[this.getRandomInt(0, this.config.url.length)]+"?"+getTimeStamp; 

                var html = `
                        <div class="mmm-iframe-wrapper" style="padding-top: ${100 / (width / height)}%;">
                                <iframe
                                        src="${src}"
                                        width="${width}"
                                        height="${height}"
                                        scrolling="${this.config.scrolling}"
                                ></iframe>
                        </div>
                `;

                wrapper.insertAdjacentHTML("afterbegin", html);

		return wrapper;
	}

});
