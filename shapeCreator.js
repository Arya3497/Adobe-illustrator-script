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

// Add a dropdown for selecting shape with increased width
var shapeDropdown = shapePanel.add(
  "dropdownlist",
  [10, 10, 240, 30],
  ["Rectangle", "Circle", "Ellipse"]
);
shapeDropdown.selection = 0;
shapeDropdown.maximumSize.width = 220;

// Add space below the shape panel
dialog.add("panel", undefined, "").preferredSize.height = 20;

// Add a create button
var createButton = dialog.add("button", undefined, "Create");
createButton.alignment = "center";

// Show the dialog box
dialog.show();
