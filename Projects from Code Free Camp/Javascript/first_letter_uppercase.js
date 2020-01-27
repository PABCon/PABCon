function titleCase(str) {
  
  let newStr = str.toLowerCase();
  var arr = newStr.split(" ");

  for( let i in arr){

arr[i] = arr[i].replace(arr[i].charAt(0),arr[i].charAt().toUpperCase());



  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

titleCase("I'm a little tea pot");
