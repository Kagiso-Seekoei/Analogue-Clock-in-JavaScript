"use strict"

  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");

  setInterval(() => {
     let day = new Date();
     let hh = day.getHours() * 30;
     let mm = day.getMinutes() * deg;
     let ss = day.getSeconds() * deg;
       var calcHr = hh+(mm/12);
       var calcMn = mm;
       var calcSc = ss;
     hr.style.transform = `rotateZ(${calcHr}deg)`;
     mn.style.transform = `rotateZ(${calcMn}deg)`;
     sc.style.transform = `rotateZ(${calcSc}deg)`;
  })
