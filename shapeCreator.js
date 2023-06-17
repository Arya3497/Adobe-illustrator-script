// Create a new document
var doc = app.documents.add();

// Create a dialog window with increased size
var dialog = new Window("dialog", "Shape Creator");
dialog.orientation = "column";
dialog.preferredSize.width = 300;
dialog.preferredSize.height = 200;

// Show the dialog box
dialog.show();
