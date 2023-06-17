// Create a new document
var doc = app.documents.add();

// Create a dialog window with increased size
var dialog = new Window("dialog", "Shape Creator");
dialog.orientation = "column";
dialog.preferredSize.width = 300;
dialog.preferredSize.height = 200;

// Add a panel for shape selection with increased size
var shapePanel = dialog.add("panel", undefined, "Select Shape");
shapePanel.alignChildren = "left";
shapePanel.preferredSize.width = 280;
shapePanel.preferredSize.height = 80;

// Show the dialog box
dialog.show();
