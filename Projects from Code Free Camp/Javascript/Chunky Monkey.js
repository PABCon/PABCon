function chunkArrayInGroups(arr, size) {

    var resultArr = [];
    let a= 0;
    let b = size;
    
    for (let i = 0;i<arr.length/size;i++){
    
    resultArr.push(arr.slice(a,b));
    a += size;
    b += size;
    
    }
    
    console.log(resultArr);
    
    
    
    
      return resultArr;
    }
    
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
    