let allbtn = document.querySelectorAll(".btn");


let windiv = document.querySelector(".winr")
let newgaembtn = document.querySelector(".nwe-game-btn")
let winh3 = document.querySelector(".winh3")

let hidegaem = document.querySelector(".game")

let resetgaem = document.querySelector(".reset")

let newgame = document.querySelector(".nwe-game-btn")

let turn = true;



let winnerchak = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




const reset = () => {
    turn = true;
    allanebale()
    allbtn.innerText = "";
    windiv.classList.add("hide")

}

resetgaem.addEventListener("click", () => {
    for (let btns of allbtn) {
        turn = true;
        btns.innerText = "";
        allanebale()
        windiv.classList.add("hide")

        

    }
})



allbtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        if (turn === true) {
            btns.innerText = "o"
            turn = false
            console.log("clikd");

        }
        else if (turn == false) {
            btns.innerText = "x"
            turn = true
        }
        btns.disabled = true;

        chekwinner()
    })


});


let chekwinner = () => {
    for (let pettern of winnerchak) {
        // console.log(pettern[0], pettern[1], pettern[2]);


        let valu1 = allbtn[pettern[0]].innerText;
        let valu2 = allbtn[pettern[1]].innerText;
        let valu3 = allbtn[pettern[2]].innerText;

        console.log(valu1, valu2, valu3);
        if (valu1 != "" & valu2 != "" && valu3 != "") {
            if (valu1 === valu2 && valu2 === valu3) {
                sowwintex(valu1)
                allbtndeseble()

            }
        }

    }
}

// disbale btn after winner
let allbtndeseble = () => {
    for (let dbtn of allbtn) {
        dbtn.disabled = true;
        hidegaem.classList.add("hide");
        dbtn.innerText = "";
    }
}

let allanebale = () => {
    for (let anbtn of allbtn) {
        anbtn.disabled = false;
        hidegaem.classList.remove("hide");
    }
}

let sowwintex = (winev) => {
    winh3.innerText = `winner is "${winev}"`
    windiv.classList.remove("hide")



}



newgame.addEventListener("click", reset)

