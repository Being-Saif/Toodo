// let kal = document.createElement("div");
// let kkal = document.querySelector(".main-app-wrapper")
// let val = document.createElement("div");
// val.setAttribute("class", 'container')
// kal.setAttribute("class", 'items')
// val.appendChild(kal)
// console.log(val)


// //creating the card 
let h3 = document.createElement("h3");
h3.innerHTML = "Hello world by java script";
let div = document.createElement('div');
let button = document.createElement('button')
let button1 = document.createElement('button')
button.setAttribute("type", "submit");
button1.setAttribute("type", "submit");
button.id = "edit";
button1.id = "delete";
button.innerHTML = "Edit";
button1.innerHTML = "Delete";
let div1 = document.createElement('div');
div1.appendChild(button);
div1.appendChild(button1);
div1.className = "items";
div.className = "container";
div.appendChild(h3);
div.appendChild(div1)
let main = document.querySelector('.collection').appendChild(div)




// replace elements 
let oldhead = document.querySelector('#heading')
let newhead = document.createElement('h2')
newhead.id = "heading"
let parent = document.querySelector('.main-app-wrapper')
newhead.appendChild(document.createTextNode("Today's list"))
parent.replaceChild(newhead, oldhead);
console.log(parent)


//remove elements 
// main = document.querySelectorAll('.main-app-wrapper');
// let child = document.querySelectorAll('.container')
// console.log(child)
// child[2].remove();


// event listener
document.querySelector('#clearlist').addEventListener('click', onClick);

function onClick(e) {
    console.log("All of them are cleared ")
        // document.querySelector('.collection').style.display = "none"
    let par = document.querySelector('.collection');
    let chil = document.querySelectorAll('.container')
    chil.forEach((e) => {
        e.remove();
    })


}


//mousemove event 
// document.querySelector('.main-app-wrapper').addEventListener('mousemove', baChg)

// function baChg(e) {
//     let vaal = document.querySelector('#heading');
//     vaal.textContent = `LAYERX:${e.layerX} , LAYERY:${e.layerY}`
//     document.body.style.backgroundColor = `rgb(${e.layerX},${e.layerY},40)`
// }

//add element
document.querySelector(' #buttonn').addEventListener('click', addE)

function addE(e) {
    let text = document.querySelector('#text')
    e.preventDefault();
    console.log("hello world")
    if (text.value == "") {
        console.log("done that ")
        alert("FIELD IS EMPTY")
    } else {
        const arr = text.value.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        };
        const str2 = arr.join(" ");

        let h3 = document.createElement("h3");
        h3.innerHTML = str2;
        let div = document.createElement('div');
        let button = document.createElement('button')
        let button1 = document.createElement('button')
        button.setAttribute("type", "submit");
        button1.setAttribute("type", "submit");
        button.id = 'edit';
        button1.id = "delete";
        button.innerHTML = "Edit";
        button1.innerHTML = "Delete";
        let div1 = document.createElement('div');
        div1.appendChild(button);
        div1.appendChild(button1);
        div1.className = "items";
        div.className = "container";
        div.appendChild(h3);
        div.appendChild(div1)
        let main = document.querySelector('.collection').appendChild(div)


        console.log(text.value);
        text.value = ""
    }

}

// delete an element false
// let sep = document.querySelectorAll('.container button:nth-child(2)')
// console.log(sep)
// sep.forEach(ele => {
//     ele.addEventListener('click', reM)
// })

// function reM(e) {
//     document.querySelector('.container').remove();
// }

//event delegation
document.body.addEventListener('click', deleItem)

function deleItem(e) {
    console.log(e.target);
    if (e.target.id === 'delete') {
        console.log(e.target.parentElement.parentElement.remove());
    }
    if (e.target.id == 'edit') {
        var name = prompt("Write to replace it ");
        const arrr = name.split(" ");

        for (var i = 0; i < arrr.length; i++) {
            arrr[i] = arrr[i].charAt(0).toUpperCase() + arrr[i].slice(1);

        };
        const str2 = arrr.join(" ");
        console.log(e.target.parentElement.parentElement.children[0].innerHTML = str2);
    }
}


// let variable = document.querySelectorAll('h3')
// let vari = new Array()
// text = document.querySelector('#text')
// for (let i = 0; i < variable.length; i++) {
//     vari[i] = variable[i].textContent;
// }
// vari.forEach(e => {
//     if (e.textContent.toUpperCase() == text.value.toUpperCase()) {
//         console.log("same gotcha")
//     }
// });