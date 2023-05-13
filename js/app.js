const endDate = "27 May 2023 08:20:00 PM"

// document.getElementById("end-date").innerText = endDate;

    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
   var h= Math.floor(diff / 3600) % 24;
  var m= Math.floor(diff / 60) % 60;
   var s = Math.floor(diff) % 60;
   document.getElementById("demo").innerHTML="Ends in "+":  "+h+" : "+m+" : "+s
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)