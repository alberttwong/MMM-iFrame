# Module: MMM-iFrame
The `MMM-iFrame` module is for MagicMirror. It is a simple way to add an iFrame of any web content to your [MagicMirror](https://github.com/MichMich/MagicMirror).  Please note that not all websites support being in a iFrame.

## Use case examples

### Nest Camera streaming
As of right now, Nest Camera only support streaming to iFrame when the camera feed is set to public.   When you set it to public, you'll get a live URL and a iFrame embedded URL (should look like https://video.nest.com/embedded/live/wSbs3mRsOF?autoplay=1). Put that url into the config.url[].  For more info, check out this thread https://nestdevelopers.io/t/is-there-a-way-to-get-nest-camera-streams-in-an-iframe/813. 

### D-Link Camera streaming
D-Link cameras streams can be easily embedded into an iFrame.  Some cameras require a username and password.  You can construct a URL that looks like this http://admin:password@10.0.1.7/mjpeg.cgi and put it in the config.url[]. For mroe info, check out http://forums.dlink.com/index.php?PHPSESSID=ag1ne0jgnnl7uft3s1ssts14p4&topic=59173.0.

### Twitch.tv streaming
Just go to the channel you want and click on share and cut and paste the embed src URL (eg. https://player.twitch.tv/?channel=feedbias_int). For more info, check out https://dev.twitch.tv/docs/v5/guides/embed-video/

### Youtube streaming
Just got to the video you want. Click share and embed and pull out the url and add the autoplay parameter (eg.   https://www.youtube.com/embed/yw_nqzVfxFQ?autoplay=1).  

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-iFrame',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["ENTER IN URL", "ENTER IN URL2"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "1280", // width of iframe
				height: "720", // height of iframe
				frameWidth: "400" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
		<tr>
			<td><code>url</code></td>
			<td>the URL(s) in the iFrame<br>
				<br><b>Example:</b><code>["http://example.com/", "http://example2.com", "http://example3.com"]</code>
				<br><b>Default value:</b> <code>["http://magicmirror.builders/"]</code>
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>the update internal for the iFrame.<br>
				<br><b>Example for 30 seconds:</b><code>0.5 * 60 * 1000</code>
				<br><b>Default value:</b> <code>"0.5 * 60 * 1000"</code>
			</td>
		</tr>		
		<tr>
			<td><code>width</code></td>
			<td>the width of the iFrame<br>
				<br><b>Example:</b><code>"100%"</code>
				<br><b>Example:</b><code>"200px"</code>
				<br><b>Default value:</b> <code>"100%"</code>
			</td>
		</tr>
		<tr>
			<td><code>height</code></td>
			<td>the width of the iFrame<br>
				<br><b>Example:</b><code>"100%"</code>
				<br><b>Example:</b><code>"300px"</code>
				<br><b>Default value:</b> <code>"100px"</code>
			</td>
		</tr>
</table>

## This is an open source project
That means you have the code to fix issues and that the code, this module, is unsupported.    If you'd like issues to be fixed, please sponsor fixes using https://issuehunt.io/repos/93804431
