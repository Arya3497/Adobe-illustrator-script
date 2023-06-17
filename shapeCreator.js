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

createButton.onClick = function () {
  var selectedShape = shapeDropdown.selection.text;
  var fillColor;

  // Get the center point of the document
  var centerX = doc.width / 2;
  var centerY = doc.height / 2;

  // Create the selected shape at the center of the page with a specific fill color
  if (selectedShape === "Rectangle") {
    fillColor = new RGBColor();
    fillColor.red = 255; // Red color for rectangle
    fillColor.green = 0;
    fillColor.blue = 0;
    var rectangle = doc.pathItems.rectangle(
      centerY - 50,
      centerX - 50,
      100,
      100
    );
    rectangle.fillColor = fillColor;

    // Add text within the rectangle
    var textFrame = doc.textFrames.add();
    textFrame.contents = "Rectangle";
    textFrame.top = rectangle.top + (rectangle.height - textFrame.height) / 2;
    textFrame.left = rectangle.left + (rectangle.width - textFrame.width) / 2;
  } else if (selectedShape === "Circle") {
    fillColor = new RGBColor();
    fillColor.red = 0; // Green color for circle
    fillColor.green = 255;
    fillColor.blue = 0;
    var circle = doc.pathItems.ellipse(centerY - 50, centerX - 50, 100, 100);
    circle.fillColor = fillColor;

    // Add text within the circle
    var textFrame = doc.textFrames.add();
    textFrame.contents = "Circle";
    textFrame.top = circle.top + (circle.height - textFrame.height) / 2;
    textFrame.left = circle.left + (circle.width - textFrame.width) / 2;
  } else if (selectedShape === "Ellipse") {
    fillColor = new RGBColor();
    fillColor.red = 0; // Blue color for ellipse
    fillColor.green = 0;
    fillColor.blue = 255;
    var ellipse = doc.pathItems.ellipse(centerY - 50, centerX - 100, 200, 100);
    ellipse.fillColor = fillColor;

    // Add text within the ellipse
    var textFrame = doc.textFrames.add();
    textFrame.contents = "Ellipse";
    textFrame.top = ellipse.top + (ellipse.height - textFrame.height) / 2;
    textFrame.left = ellipse.left + (ellipse.width - textFrame.width) / 2;
  }

  // Close the dialog box
  dialog.close();
};

// Show the dialog box
dialog.show();
