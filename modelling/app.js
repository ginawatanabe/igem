window.onload = function() {

  // function jsonCallback() {
  // }

  // $.ajax({
  //   type: 'GET',
  //   url: 'http://quickstats.nass.usda.gov/api/get_counts/?key=35085F91-287F-3F1E-818A-E8D655EA323D&param=sector_desc&format=json&callback=jsonpcallback',
  //   jsonp: 'jsonpcallback',
  //   dataType: 'jsonp', //change the datatype to 'jsonp' works in most cases
  //   // contentType: 'application/javascript',
  //   // callback: 'callback',
  //   success: (res) => {
  //    console.log(res);
  //   }
  // })

  $.ajax({
    type: 'GET',
    url: 'http://viperdb.scripps.edu/API2/api_access_code.php?format=html',
    jsonp: 'jsonpcallback',
    dataType: 'jsonp', //change the datatype to 'jsonp' works in most cases
    contentType: 'application/html',
    // callback: 'callback',
    success: (res) => {
     console.log(res);
    }
  })




}
