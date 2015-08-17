 function intro(){
// watch your indentation here. rule #1, perfectly indent your code, ALWAYS!
// else will lead to bugs and much confusion over nothing
        var hi =  document.getElementById('introduction');
        hi.style.display = 'initial';
        var img = document.getElementById('pic');
        img.style.display = 'none';

      }

function uName (){ // << where does this function end? ALWAYS format
// function fx () {
    // funtction stuff here 
// }   << close on new line


        var numb = prompt(" How many atoms are there in the universe?");
        alert ("Sorry, there are not " + numb + " atoms. How could we ever know how many atoms there are in the universe?");}
function shake(){
    var hi =  document.getElementById('introduction');
        hi.style.display = 'none';
    var img = document.getElementById('pic');
        img.style.display = 'initial';
  // left = document.getElementById("middle");
  // left.style.backgroundColor = "#bfbfbf";
  // left = document.getElementById("header");
  // left.style.backgroundColor = "#000000";
  //  left = document.getElementById("nav");
  // left.style.backgroundColor = "#ffffff";
  // left = document.getElementById("right");
  // left.style.backgroundColor = "#494949";
  // left = document.getElementById("left");
  // left.style.backgroundColor = "#494949";
  //   left = document.getElementById("h1");
  // left.style.color = "white";
  //   left = document.getElementById("button");
  // left.style.backgroundColor = "#ffffff";
  //   left = document.getElementById("button1");
  // left.style.backgroundColor = "#ffffff";
  // left = document.getElementById("button2");
  // left.style.backgroundColor = "#ffffff√";

  // you're right, this wants drying out.

  // repeating unit:

  // left = document.getElementById(data1);
  // left.style.backgroundColor = data2;

  // data1 & data2 go together, looks like good case for a 2D collection, array or object(hash in ruby)
  
  // array is quicker, object easier to understand

  // buttonStyles = [
  //   ['middle', '#bfbfbf'],
  //   ['header', '#000000'],  
  //   ...
  // ]

  // OR (better)

  buttonStyles = [
    {id: 'middle', color: '#bfbfbf'},
    {id: 'header', color: '#000000'},
    ...
  ]

  for (var i = buttonStyles.length - 1; i >= 0; i--) {
    left = document.getElementById(buttonStyles[i].id);
    left.style.backgroundColor = buttonStyles[i].color;
  };


}

// if you want best best practice, read through https://github.com/airbnb/javascript/tree/master/es5 - it's great!