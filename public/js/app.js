/**
 * Viewer for Google Web Fonts
 * Test Google Web Fonts in the browser
 *
 * Author: Tyler Tretsven, 2013
 */

window.FontViewer = {
  Env:      {},
  Model:    {},
  Toolbox:  {},
  Views:    {},
  Router:   {},
  Controls: {}
};


/**
 * Font Viewer Environment
 */

FontViewer.Env = {
  
  // Display window ids
  displayWindow: '#display-box',
  displayContainer: '#display'
};


/**
 * Font Viewer internal API
 */

FontViewer.Toolbox = (function() {

  // An array of the css attributes that the application cares about
  var styles = [
    'font-family',  'font-size',       'font-style',
    'line-height',  'color',           'letter-spacing',
    'word-spacing', 'text-decoration', 'text-align',
    'font-weight',  'margin-bottom'
  ],

  // Contains the CSS selector for the selected element
  selected = '';

  function isSelected() {
    return !selected === '';
  };

  // Public API
  return {
    
    // Sets the selected value to the parameter
    setSelected: function(elem) {
      selected = elem;
    },

    // Returns the value of selected
    getSelected: function() {
      return selected; 
    },

    deselect: function() {
      selected = '';
    },

    // Sets the value of a css attribute for the selected element
    changeStyleValue: function(style, value) {

      /** 
       * If there is an element selected, it will change
       * that element's CSS to reflect the changes
       */
      if ( isSelected() ) {
        
        // Changes the value
        $(selected).css(style, value);
      
      } else {

        // If no element selected, writes error to console
        console.log('Err: No Element Selected');
      }

      // Enables chained methods. I think?
      return this;
    },

    // Returns an object containing all of the relevant CSS attributes
    getStyles: function(elem) {
      
      var output = {};

      /**
       * Loops through the array of attributes and returns an object
       * Containing all of their values
       */
      for (var i = 0; i < styles.length; i++) {
        output[styles[i]] = $(elem).css(styles[i])
      }

      return output;
    }
  }
})();


/**
 * Font Viewer Model
 */

FontViewer.Model = (function(){

/**
 * How does it have to work?
 *
 * Initializes by querying the db using the design identification in the url:
 *
 *  Archetype.io/:id    
 * ex.,
 *  Archetype.io/u5gHY8
 *
 * if found in db:
 *   set css properties to those found in db
 * else if not found in database:
 *   redirect to /
 *   report that the saved design was not found
 * end
 *
 * if URL is /:
 *  use default styling
*/

})();




/*
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

*/