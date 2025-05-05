const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");
const tab5 = document.getElementById("tab5");

let collection1 = document.getElementById("collection1");
let collection2 = document.getElementById("collection2");
let collection3 = document.getElementById("collection3");
let collection4 = document.getElementById("collection4");
let collection5 = document.getElementById("collection5");

tab1.addEventListener("click", function(){
    collection1.style.display = "block";
    collection2.style.display = "none";
    collection3.style.display = "none";
    collection4.style.display = "none";
    collection5.style.display = "none";
});

tab2.addEventListener("click", function(){
    collection1.style.display = "none";
    collection2.style.display = "block";
    collection3.style.display = "none";
    collection4.style.display = "none";
    collection5.style.display = "none";
});

tab3.addEventListener("click", function(){
    collection1.style.display = "none";
    collection2.style.display = "none";
    collection3.style.display = "block";
    collection4.style.display = "none";
    collection5.style.display = "none";
});

tab4.addEventListener("click", function(){
    collection1.style.display = "none";
    collection2.style.display = "none";
    collection3.style.display = "none";
    collection4.style.display = "block";
    collection5.style.display = "none";
});

tab5.addEventListener("click", function(){
    collection1.style.display = "none";
    collection2.style.display = "none";
    collection3.style.display = "none";
    collection4.style.display = "none";
    collection5.style.display = "block";
});
