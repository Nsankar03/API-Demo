fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json()) //convert into json file
.then(res=>Object.values(res)) //convert each object as array of key values
.then(res=>{ // print the key / value array by for loop
  for(let i=0;i<res.length;i++)
  {
    let li=document.createElement("li");    
    li.innerHTML=res[i];
    document.getElementById("list").append(li);
  }  

})
