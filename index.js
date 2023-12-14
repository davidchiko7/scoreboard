let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let countA = 0
let countB = 0

function add1() {
    countA += 1
    countEl1.textContent = countA
}

function add2() {
    countA += 2
    countEl1.textContent = countA
}

function add3() {
    countA += 3
    countEl1.textContent = countA
}

function add1b() {
    countB += 1
    countEl2.textContent = countB
}

function add2b() {
    countB += 2
    countEl2.textContent = countB
}

function add3b() {
    countB += 3
    countEl2.textContent = countB
}