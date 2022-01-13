CKEDITOR.plugins.add( 'twocols', {

	// Register the icons.
	icons: 'twocols',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define an editor command that opens our dialog window.
		// editor.addCommand( 'twocols', new CKEDITOR.dialogCommand( 'abbrDialog' ) );

		// Create a toolbar button that executes the above command.
		editor.ui.addButton( 'twocols', {

			// The text part of the button (if available) and the tooltip.
			label: 'Insert Columns',

			// The command to execute on click.
			command: 'twocols',

			// The button placement in the toolbar (toolbar group name).
			toolbar: 'insert'
		});

        editor.addCommand( 'twocols', {
            exec: function( editor ) {
                var mySelection = editor.getSelection(); 
                var el = editor.document.createElement('table')
                if (mySelection) {
                    const text = mySelection.getSelectedText();
                    console.log(text);
                    const length = text ? text.trim().length : 0;
                    if (!length) return;

                    const first = text.substr(0, Math.ceil(length/2));
                    const second = text.substr(Math.ceil(length/2) + 1, length - 1);

                    editor.insertHtml(`
                    <table style="width:100%">
                        <tr>
                            <td styles="max-width: 50%;">${first}</td>
                            <td styles="max-width: 50%;">${second}</td>
                        </tr>
                    </table>
                    `);
                    console.log(el)
                    editor.insertElement(el);
                }
            }
        });

		// Register our dialog file -- this.path is the plugin folder path.
		// CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
	}
});


