# Module: iFrame
The `MMM-iFrame` module is for MagicMirror. It is a simple way to add an iFrame of any web content to your [MagicMirror](https://github.com/MichMich/MagicMirror).
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
				updateInterval: 0.5 * 60 * 1000 // rotate URLs every 30 seconds
				width: "100%", // Optional. Default: 100%
				height: "100px" //Optional. Default: 100px
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
				<br><b>Default value:</b> <code>"http://magicmirror.builders/"</code>
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>the update internal for the iFrame<br>
				<br><b>Example:</b><code>0.5 * 60 * 1000</code>
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
