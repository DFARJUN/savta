console.log("%cוואוו! סבתא מתה על סקרנים. מקווה שתאהבו את מה שתראו כאן... זה לא פחות חשוב :)", "background-color: #3cc1f8; color: #black; font-weight:bold; font-size:25px");


var hwind = window.innerHeight;
var wwind = window.innerWidth;
document.documentElement.style.setProperty('--hwwind', hwind + "px");
document.documentElement.style.setProperty('--wwwind', wwind-17 + "px");

if (window.innerWidth > 1384 && window.innerWidth < 2500) {
    document.documentElement.style.setProperty('--wwwind', 1287 + "px");
    var zoomn = window.innerWidth / 1302;
    document.documentElement.style.setProperty('--zoomi', zoomn );
}




window.onresize = function () {
    var hwind = window.innerHeight;
    var wwind = window.innerWidth;
    document.documentElement.style.setProperty('--hwwind', hwind + "px");
    document.documentElement.style.setProperty('--wwwind', wwind - 17 + "px");
}


function hideload() {
    setTimeout(function () {
        document.getElementById('loadpage').style.display = 'none';
    }, 1300);
}


function stopall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("typewriter")[0].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("typewriter")[1].style.WebkitAnimationPlayState = "paused";
    document.getElementById("banana").style.WebkitAnimationPlayState = "paused";
    document.getElementById("circlespoon").style.WebkitAnimationPlayState = "paused";
    $("#carouselExampleIndicators").carousel('pause');
    document.getElementById("stopallbtn").style.display = "none";
    document.getElementById("playallbtn").style.display = "inline-block";
    document.getElementById("bike").style.WebkitAnimationPlayState = "paused";



}
function playall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("typewriter")[0].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("typewriter")[1].style.WebkitAnimationPlayState = "running";
    document.getElementById("circlespoon").style.WebkitAnimationPlayState = "running";
    document.getElementById("banana").style.WebkitAnimationPlayState = "running";
    $("#carouselExampleIndicators").carousel('cycle');
    document.getElementById("playallbtn").style.display = "none";
    document.getElementById("stopallbtn").style.display = "inline-block";
    document.getElementById("bike").style.WebkitAnimationPlayState = "running";


}

$("#newfooter").load("header.html"); 

//function fadd() {
//    document.getElementById('arak1').style.opacity = "0";
//    document.getElementById('arak2').style.opacity = "0";
//    document.getElementById('arak3').style.opacity = "0";
//    document.getElementById('arak4').style.opacity = "0";
//    document.getElementById('arak5').style.opacity = "0";
//    document.getElementById('arak6').style.opacity = "0";
//    document.getElementById('arak7').style.opacity = "0";
//    document.getElementById('arak8').style.opacity = "0";
//    document.getElementById('arak9').style.opacity = "0";
//    document.getElementById('arak10').style.opacity = "0";
//    document.getElementById('arak11').style.opacity = "0";
//    document.getElementById('arak12').style.opacity = "0";
//    document.getElementById('arak13').style.opacity = "0";


//}

function fundd() {
    var ScrollyTop = window.scrollY
    while (ScrollyTop > 650) {
        ScrollyTop = ScrollyTop-650
    }

            if (ScrollyTop % 600 < 50) {
                fadd();
                document.getElementById('arak1').style.opacity = "1"
            }
            else {
                if (ScrollyTop % 550 < 50) {
                    fadd();
                    document.getElementById('arak2').style.opacity = "1"
                }
                else {
                    if (ScrollyTop % 500 < 50) {
                        fadd();
                        document.getElementById('arak3').style.opacity = "1"
                    }
                    else {
                        if (ScrollyTop % 450 < 50) {
                            fadd();
                            document.getElementById('arak4').style.opacity = "1"
                        }
                        else {
                            if (ScrollyTop % 400 < 50) {
                                fadd();
                                document.getElementById('arak5').style.opacity = "1"
                            }
                            else {
                                if (ScrollyTop % 350 < 50) {
                                    fadd();
                                    document.getElementById('arak6').style.opacity = "1"
                                }
                                else {
                                    if (ScrollyTop % 300 < 50) {
                                        fadd();
                                        document.getElementById('arak7').style.opacity = "1"
                                    }
                                    else {
                                        if (ScrollyTop % 250 < 50) {
                                            fadd();
                                            document.getElementById('arak8').style.opacity = "1"
                                        }
                                        else {
                                            if (ScrollyTop % 200 < 50) {
                                                fadd();
                                                document.getElementById('arak9').style.opacity = "1"
                                            }
                                            else {
                                                if (ScrollyTop % 150 < 50) {
                                                    fadd();
                                                    document.getElementById('arak10').style.opacity = "1"
                                                }
                                                else {
                                                    if (ScrollyTop % 100 < 50) {
                                                        fadd();
                                                        document.getElementById('arak11').style.opacity = "1"
                                                    }
                                                    else {
                                                        if (ScrollyTop % 50 < 50) {
                                                            fadd();
                                                            document.getElementById('arak12').style.opacity = "1"
                                                        }
                                                        else {
                                                            if (ScrollyTop < 50) {
                                                                fadd();
                                                                document.getElementById('arak13').style.opacity = "1"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


