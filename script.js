let textArea =document.getElementById("textArea");
let asus =textArea.value.trim();
let btn=document.getElementById("btntik")
// btn.addEventListener("click",function(){
//     console.log(textArea.value);
    
// })
// asdasd


// SENTENCE
let sentence=document.getElementById("sentenceH4")
textArea.addEventListener("input",function(){
    sentence.innerHTML=textArea.value.split(".").length-1
    if (textArea.value.split(".").length-1<10) {
        sentence.innerHTML="0"+sentence.innerHTML
    }
    
})


// WORD
let word=document.getElementById("wordH4")
textArea.addEventListener("input",function(){
    word.innerHTML=textArea.value.split(" ").length-1
    if (textArea.value.split(" ").length-1<10) {
        word.innerHTML="0"+word.innerHTML
    }
})



// CHARACTER
let total=document.getElementById("totalH4")
textArea.addEventListener("input",function(){
    total.innerHTML=textArea.value.length;
    if (textArea.value.length<10) {
        total.innerHTML="0"+total.innerHTML
    }
})



// textArea.addEventListener("input",function(){
//     console.log(textArea.value);

// })
