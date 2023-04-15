// let ampm = document.getElementById("laxm");
// setInterval(function () {
//   let time = document.getElementById("timer");
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if (hours > 12) {
//     hours = hours - 12;
//     ampm.innerText = "PM";
//   } else {
//     ampm.innerText = "AM";
//   }
//   let msg = document.getElementsByClassName("para");

//   if (hours > 7 && hours < 12) {
//     msg[0].innerText = "Wake up good morning";
//   } else if (hours > 1 && hours < 4) {
//     msg[0].innerText = "Have lunch, goog afternoon";
//   } else if (hours > 4 && hours < 8) {
//     msg[0].innerText = "Go to gym, good evening";
//   } else {
//     msg[0].innerText = "Have dinner, good night";
//   }
//   console.log(hours, minutes, seconds);
//   let currentTime = hours + ":" + minutes + ":" + seconds;
//   time.innerHTML = currentTime;
// }, 1000);

function callme() {
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ampm = document.getElementById("am_pm");
  if (hours > 12) {
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }
  let settime = document.getElementsByClassName("d4");
  if (hours >= 6 && hours < 12) {
    settime[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hours >= 12 && hours < 15) {
    settime[0].innerText = "LET'S HAVE SOME LUNCH !!";
  } else if (hours >= 15 && hours < 19) {
    settime[0].innerText = " GET SOME TEA.. ITS JUST EVENING!";
  } else {
    settime[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    // console.log(time99)
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  let h = document.querySelector(".hr");
  h.innerHTML = hours;
  let m = document.querySelector(".minutes");
  m.innerHTML = min;
  let s = document.querySelector(".seconds");
  s.innerHTML = sec;

  // function om(){

  // }

  // console.log(hours,min,sec);
}
setInterval(() => {
  callme();
}, 1000);

let btn = document.querySelector(".alarm_set");

btn.addEventListener("click", () => {
  let d = new Date();
  let hrs = d.getHours();
  console.log(hrs);
  let img = document.getElementById("PIC");
  let mess = document.getElementById("WORDS");
  // let img = document.querySelector("img");

  let mrn = document.getElementById("morning");
  let lun = document.getElementById("lunch");
  let d10 = document.getElementById("naptime");
  console.log(d10.value);
  console.log(parseInt(d10.value) - 1);
  let d11 = document.getElementById("nighttime");

  if (hrs === parseInt(mrn.value) - 1) {
    // img.style.backgroundImage = "url(./morning.svg)";
    img.src = "./morning.svg";
    mess.innerText = "GOOD MORNING!! WAKE UP !!";
  }
  if (hrs == parseInt(d11.value) - 1) {
    // img.style.backgroundImage = "url(./night.svg)";
    img.src = "./night.svg";
    mess.innerText = "GOOD NIGHT !!";
  }
  if (hrs == parseInt(lun.value) - 1) {
    // img.style.backgroundImage = "url(./lunch.svg)";
    img.src = "./lunch.svg";
    mess.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
  }
  if (hrs == parseInt(d10.value) - 1) {
    // img.style.backgroundImage = "url(./lunch_image.png)";
    img.src = "./lunch_image.png";
    mess.innerText = "GOOD EVENING !!";
  }

  let mornigtext = mrn.options[mrn.selectedIndex].textContent;
  let mornig1 = document.getElementById("wake_up");
  mornig1.textContent = mornigtext;

  let lunchtext = lun.options[lun.selectedIndex].textContent;
  let lunch1 = document.getElementById("lunch_time");
  lunch1.textContent = lunchtext;

  let naptext = d10.options[d10.selectedIndex].textContent;
  let nap1 = document.getElementById("nap_time");
  nap1.textContent = naptext;

  let nighttext = d11.options[d11.selectedIndex].textContent;
  let night1 = document.getElementById("night_time");
  night1.innerText = nighttext;
});
