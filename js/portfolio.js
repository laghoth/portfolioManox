const btnTogle = document.querySelector("#toglebutton");
const linkList = document.querySelector(".portfolio .nav");
const open = document.querySelector("#toglebutton .fa-bars");
const close = document.querySelector("#toglebutton .fa-xmark");

open.addEventListener("click", function () {
  linkList.style.display = "flex";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  linkList.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
});

//Fixed Navbar with smooth scroll
function scroll1() {
  const scroll = new SmoothScroll('.menu .nav a[href*="#"]', {
    speed: 800,
  });
}
function scroll2() {
  const scroll2 = new SmoothScroll('.slider .layout a[href*="#"]', {
    speed: 800,
  });
}

scroll1();
scroll2();

//******************************************************** */
// email script
// function sendEmail() {
//     Email.send({
//         // Host: "smtp.elasticemail.com",
//         // Port: 2525,
//         // Username: "ahmed.fatimm@gmail.com",
//         // Password: "59B3D4AC1ED296F5C8266D3F4ADFF001623F",
//         SecureToken: '39c89ed7-2a19-4fc7-834b-08890c7989c2',
//         To: 'laghlim.othmane@gmail.com',
//         From: 'laghlimioth19@gmail.com',
//         Subject: "othmane subject",
//         Body: "othmane the body"
//     }).then(
//         document.getElementById('readmessage').innerHTML = 'message bien envoyer'
//     );
// }

//********************************************************** */

// Slide Down a Bar on Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var element = document.getElementById("slide-down");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.classList.add("slide-down-scrol");
  } else {
    element.classList.remove("slide-down-scrol");
  }
}

// Slide Down all items on Scroll

$(window).scroll(function () {
  $(".slide-down-left").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-left");
    }
  });
  $(".slide-down-right").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-right");
    }
  });
  $(".slide-down-top").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-top");
    }
  });
  $(".slide-down-bottom").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-bottom");
    }
  });
  $(".slide-down-center").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    console.log("window top" + winTop);
    console.log("element" + pos);
    if (pos < winTop + 700) {
      $(this).addClass("slide-center");
    }
  });
});
