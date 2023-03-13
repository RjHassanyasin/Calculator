var inp = document.getElementsByTagName('input')[0]
var btns = document.querySelectorAll('button')
btns.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        console.log(e.target.innerText)
       
        if (e.target.innerText == '=') {

            var z = eval(inp.value)
            console.log(z)
            inp.value = z

        }
    else if (e.target.innerText =="Clear") {

        inp.value = "";

        }
    else if(e.target.innerText =="del"){
        inp.value = inp.value.substr(0,inp.value.length-1);

    }

        else {
            inp.value += e.target.innerText


        }

    })


})