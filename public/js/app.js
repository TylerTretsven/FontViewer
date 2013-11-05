/*******************************************************
 *
 *	Google Font Viewer
 *  Test Google Web Fonts in the browser
 *
 *	Author: Tyler Tretsven, 2013
 *
 *******************************************************/


var FontViewer = {};

FontViewer.env = {

  // Display window ids
  displayWindow: "#display-box",
  displayContainer: "#display"

};

FontViewer.data = {

  // Is there a selected element type
  selected: "None",

  // CSS storage.  Initializes with defaults.
  cssStore: {
    H1: {
      'font-size': 32,
      'line-height': 1.25,
      'letter-spacing': 0,
      'color': "rgb(30,30,30)"
    },
    H2: {
      'font-size': 24,
      'line-height': 1.25,
      'letter-spacing': 0,
      'color': "rgb(30,30,30)"
    },
    H3: {
      'font-size': 19,
      'line-height': 1.25,
      'letter-spacing': 0,
      'color': "rgb(30,30,30)"
    },
    P: {
      'font-size': 16,
      'line-height': 1.25,
      'letter-spacing': 0,
      'color': "rgb(30,30,30)"
    }
  }
};

// Sets the selected value to the parameter
FontViewer.setSelected = function(elem) {
  FontViewer.selected = elem;
}

FontViewer.changeStyle = function(style, value) {
  // If there is an element selected, it will change that element's
  // CSS to reflect the changes
  if (!FontViewer.data.selected === "None") {
    $(FontViewer.data.selected).css(style, value);
  } else {
    console.log("No Element Selected");
  }
};

FontViewer.getStyles = function(elem) {

  var output = {},
    styles = [
      "font-family", "font-size", "font-style",
      "line-height", "color", "letter-spacing",
      "word-spacing", "text-decoration", "text-align",
      "font-weight", "margin-bottom"
    ];

  for (var i = 0; i < styles.length; i++) {
    output[styles[i]] = $(elem).css(styles[i])
  }

  return output;
};