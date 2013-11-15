/*******************************************************
 *
 *  Font Viewer for Google Web Fonts
 *  Test Google Web Fonts in the browser
 *
 *  Author: Tyler Tretsven, 2013
 *
 *******************************************************/

window.FontViewer = {
  Model:  {},
  Views:  {},
  Router: {},
  CSS:    {},
  Env:    {}
};


/*
 *  Font Viewer Environment
 */

FontViewer.Env = {
    // Display window ids
    displayWindow: "#display-box",
    displayContainer: "#display",
    selected: ""
  };

/*
 * Font Viewer API
 */

FontViewer.API = {};

(function(API) {

// Sets the selected value to the parameter
FontViewer.API.setSelected = function(elem) {
  FontViewer.selected = elem;
}

FontViewer.API.changeStyle = function(style, value) {
  // If there is an element selected, it will change that element's
  // CSS to reflect the changes
  if (!FontViewer.data.selected === "None") {
    $(FontViewer.data.selected).css(style, value);
  } else {
    console.log("No Element Selected");
  }
};

FontViewer.API.getStyles = function(elem) {

  var output = {};
  
  var styles = [
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

)(FontViewer.API);



/*
 * Font Viewer Model
 */


(function(){

/*
  How does it have to work?

  Initializes by querying the db using the design identification in the url:

    Archetype.io/:id    
  ex.,
    Archetype.io/u5gHY8

  if found in db:
    set css properties to those found in db
  else if not found in database:
    redirect to /
    report that the saved design was not found
  end

  if URL is /:
    use default styling

*/

  var 

})();












var defaultData = {
  // Is there a selected element type
  selected: "None",

  // CSS storage.  Initializes with defaults.
  cssStore: {
    backgroundColor: rgb(255, 255, 255),
    width: 650,
    properties: {
      h1: {
        'font-size': 32,
        'line-height': 1.25,
        'letter-spacing': 0,
        'color': "rgb(30,30,30)"
      },
      h2: {
        'font-size': 24,
        'line-height': 1.25,
        'letter-spacing': 0,
        'color': "rgb(30,30,30)"
      },
      h3: {
        'font-size': 20,
        'line-height': 1.25,
        'letter-spacing': 0,
        'color': "rgb(30,30,30)"
      },
      p: {
        'font-size': 16,
        'line-height': 1.25,
        'letter-spacing': 0,
        'color': "rgb(30,30,30)"
      }
    }
  }
});




// Backbone model
var DesignModel = Backbone.Model.extend({
  
  intialize: function() {
    
  },

  defaults: defaultData,

  

});






