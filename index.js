var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}
function johnLennonFacts(arr) {
  var result= []; 
  var i = 0; 
  while(i < arr.length) {
   result.push(arr[i] + '!!!')
  i++; 
 }
  return result; 
 }

 johnLennonFacts(facts); 