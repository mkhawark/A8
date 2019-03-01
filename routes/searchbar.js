// var data = require('../data.json');
// exports.viewSearchbar=function(req,res){
// 	var SearchName = req.query.name;

// 	console.log(SearchName);
// 	res.render('searchbar', data);
// }
exports.viewSearchbar= function (req, res) {
  
  res.render('searchbar');
};

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

