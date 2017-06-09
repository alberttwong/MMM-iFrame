# Module: iFrame
The `iFrame` module is for MagicMirror. It is a simple way to add an iFrame of any web content to your [MagicMirror](https://github.com/MichMich/MagicMirror).
## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'iFrame',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "ENTER IN URL"
				width: "100%" // Optional. Default: 100%
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
			<td>the URL in the iFrame<br>
				<br><b>Example:</b><code>"http:http://example.com/" </code>
				<br><b>Default value:</b> <code>''</code>
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
