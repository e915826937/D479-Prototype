(function(window, undefined) {
  var dictionary = {
    "2a9878f9-062a-493b-b594-23a00b85e3aa": "About",
    "71062cf3-e625-4801-924f-300ad67309cb": "Attractions",
    "48410b1e-8769-4844-92a8-997929a46238": "Home",
    "0535a728-fe59-4db3-a365-e6dedf434040": "Booking",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c09fba08-e7bf-45d3-b8ac-049d373ee4ae": "Template 2",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);