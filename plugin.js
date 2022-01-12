CKEDITOR.plugins.add( 'columns', {
    requires: 'widget',

    icons: 'columns',

    init: function( editor ) {
        editor.widgets.add('columns', {
            button: 'Create a simple box',
    
            template:
            '<div class="columns">' +
                '<div class="column1"><p>Column 1 Content here...</p></div>' +
                '<div class="column2"><p>Column 2 Content here</p></div>' +
            '</div>',
            editables: {
                content1: {
                    selector: '.column1',
                    allowedContent: 'p br ul ol li strong em u s'
                },
                content2: {
                    selector: '.column2',
                    allowedContent: 'p br ul ol li strong em i u s'
                }
            },

            allowedContent:
                'div(!columns); div(!column1); div(!column2)',

            requiredContent: 'div(columns)',

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'columns' );
            }
        })
        console.log(editor);
    }
});
