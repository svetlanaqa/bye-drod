document.addEventListener("DOMContentLoaded", function () {
  console.log("Bye D-Rod!")
  const idiotVideo = document.getElementById("idiot");
  document.getElementById("prize").addEventListener("click", function() {
    idiotVideo.classList.remove("hidden");
    idiotVideo.play();
  })
});

function byebyeBoat() {
  const boatWrapper = document.querySelector('.partyBoat')
  boatWrapper.innerHTML = ''
}

function summonThePolarCouncil() {
  const thePolarCouncil = document.querySelector('.thePolarCouncil');
  thePolarCouncil.style.display = 'inline-block';
  setTimeout(() => thePolarCouncil.style.display = 'none', 3000)
}

function bombsAway() {
  const ignition = document.querySelector('.polarButton')
  const partyBoat = document.querySelector('.partyBoat')
  ignition.className += ' bombsAway'
  setTimeout(() => {
    ignition.className = ignition.className.slice(0,ignition.className.length - ' bombsAway'.length)
    partyBoat.className += ' vroom'
    setTimeout(() => {
      partyBoat.className = partyBoat.className.slice(0,partyBoat.className.length - ' vroom'.length)
      byebyeBoat()
    }, 3000)
  }, 1000)
}

function appendBoatPiece(top, left) {
  const boatPiece = document.createElement('img')
  boatPiece.className = 'boatPiece rotatoPotato'
  boatPiece.src = 'polarParty.png'
  boatPiece.style.top = top
  boatPiece.style.left = left
  const boatWrapper = document.querySelector('.partyBoat')
  boatWrapper.appendChild(boatPiece)
}

function createSail(topMod, leftMod, topOffset, leftOffset) {
  const iterator = [...Array(10).keys()]
  iterator.map(i => i * 10).map(i => {
    const top = `${i * topMod + topOffset}px`
    const left = `${100 + i * leftMod + leftOffset}px`
    appendBoatPiece(top, left)
  })
}

function createMast() {
  const iterator = [...Array(5).keys()]
  iterator.map(i => i * 10).map(i => {
    const top = `${i + 100}px`
    const left = '100px'
    appendBoatPiece(top, left)
  })
}

function createHullTop() {
  const iterator = [...Array(25).keys()]
  iterator.map(i => i * 10).map(i => {
    const top = `${160}px`
    const left = `${i}px`
    appendBoatPiece(top, left)
  })
}
function createHullBottom() {
  const iterator = [...Array(25).keys()]
  iterator.map(i => i * 10).map(i => {
    let top, left;
    if (i < 40) {
      top = `${i + 160}px`
      left = `${i}px`
    } else if (i > 200) {
      top = `${200 + (200 - i)}px`
      left = `${i}px`
    } else {
      top = `${200}px`
      left = `${i}px`
    }
    appendBoatPiece(top, left)
  })
}

function popTheChampagne() {
  byebyeBoat()
  summonThePolarCouncil()
  setTimeout(() => {
    bombsAway()
    createSail(1, 1, 0, 0)
    createSail(1, 0, 0, 0)
    createSail(0, 1, 100, 0)
    createMast()
    createHullTop()
    createHullBottom()
  }, 3000)
}
