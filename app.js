


const URL = "data.json";

async function getUrl(url) {

const response = await fetch(url);

let data = await response.json();

show(data);

}

getUrl(URL)

const bars = document.querySelectorAll(".bar-chart .bar"),
      lables = document.querySelectorAll(".lable"),
      spentAmt = document.querySelectorAll(".bar-amount"); 

function show(data) {


    // display the bar accoring amount spent 
    for(let i=0; i < bars.length; i++) {
        bars[i].style.height = data[i].amount * 2 + "px";
        bars[i].addEventListener("mouseover", onHover );
        bars[i].addEventListener("mouseout", onOut);

        function onOut() {
            let indexBar = [i]
            // console.log(indexBar)

            for(let i=0; i < spentAmt.length; i++) {
                spentAmt[indexBar].classList.remove("hide");
                bars[indexBar].style.filter = "contrast(100%)"
            }
        }


        function onHover() {
            let indexBar = [i]
            // console.log(indexBar)

            for(let i=0; i < spentAmt.length; i++) {
                spentAmt[indexBar].classList.add("hide");
                bars[indexBar].style.filter = "contrast(75%)"
            }
        }

        let max = data.reduce((acc, value) => {
            return (acc = acc > value.amount ? acc : value.amount);
        }, 0);
    
         let height = data[i].amount * 2;   
    
        if (height === max * 2) {
            bars[i].style.backgroundColor = "hsl(186, 34%, 60%)";
        }
    }


    // lable
    for(let i=0; i < lables.length; i++) {
        lables[i].innerText = data[i].day;
    }

    // amount spent 
    for(let i=0; i < spentAmt.length; i++) {
        spentAmt[i].innerText = "$" + data[i].amount;
        spentAmt[i].style.top = - data[i].amount * 1.4 + "px";
    }  

}












 
