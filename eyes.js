const irisLeft = document.querySelector("div.iris-left")

const irisRight = document.querySelector("div.iris-right")

let interval = null

// move the eyes every three seconds function
const startInterval = function () {
  // run every 3 seconds
  clearInterval(interval)
  
  // interval = setInterval(function () {}, 3000)
  // functions the same as the above, just using => instead of function
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight

    moveEye(irisLeft, x, y)
    moveEye(irisRight, x, y)

  }, 3000)
}

// we now need to run this function below (line 73)

const moveEye = function (tag, mouseX, mouseY) {
  // tag.syle.top = mouseX + "px"
  // tag.syle.top = mouseY + "px"

  // center of the eye
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top

  // console.log(eyeMidX, eyeMidY)

  // find the difference between the eye and the mouse
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY - window.pageYOffset

  // pythagorean theorem
  // square root of the two above
  const diff = Math.sqrt(diffX * diffX + diffY * diffY)

  // console.log(diffX, diffY)

  // what is the capped radius
  const radius = Math.min(3, diff)

  // tan in maths
  // stored as an angle that we apply later on
  const angle = Math.atan2(diffY, diffX)


  // lets get the capped version of this, based on the angle
  // const cappedX = 40 * Math.cos(angle)
  // const cappedY = 40 * Math.sin(angle)

  const cappedX = radius * Math.cos(angle)
  const cappedY = radius * Math.sin(angle)


  const eyeTag = tag.querySelector("div")

  eyeTag.style.left = cappedX + "px"
  eyeTag.style.top = cappedY + "px"

}

// run the move eye every 3 seconds function here
startInterval()


// event could be anything e.g. x or tv could be in the brackets
document.addEventListener("mousemove", function (event) {
  // console.log("event")
  startInterval()
  moveEye(irisLeft, event.pageX, event.pageY)
  moveEye(irisRight, event.pageX, event.pageY)

})