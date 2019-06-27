var randomnum = Math.floor(Math.random() * 2)
setTimeout(function () {
    document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
}, 600);
setTimeout(function () {
    document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
}, 900);
setTimeout(function () {
    document.getElementById("theanswer").innerHTML = "סבתא מקלידה...";
}, 1200);
setTimeout(function () {
    document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
}, 1500);
setTimeout(function () {
    if (randomnum == 0) {
        document.getElementById("theanswer").innerHTML = "היי חיים של סבתא, איך אפשר לעזור?";
    } else {
        document.getElementById("theanswer").innerHTML = "נשמה של סבתא! מה כואב לך?";
    }
}, 1800);



function botfunc() {
    var randomnum = Math.floor(Math.random() * 2)
    var btnn = document.getElementById("bottopage");
    btnn.style.display = "";
    var quation = document.getElementById("botquet").value;
    if (quation != "") {
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 0);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 300);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה...";
        }, 600);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 900);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 1200);
        setTimeout(function () {

            if ((quation.includes("ראש")) || (quation.includes("הראש")) || (quation.includes("בראש")) || (quation.includes("מיגרנה"))) {
                if (randomnum == 0) {
                    document.getElementById("theanswer").innerHTML = varhead;

                } else {
                    document.getElementById("theanswer").innerHTML = varhead2;

                }
            } else {
                if ((quation.includes("בטן")) || (quation.includes("הבטן")) || (quation.includes("בבטן")) || (quation.includes("קיבה"))) {
                    btnn.style.display = "block";
                    document.getElementById("bottopage").innerHTML = "לעמוד כאב בטן";
                    btnn.href = "stomach.html";
                    if (randomnum == 0) {
                        document.getElementById("theanswer").innerHTML = varbeten;

                    } else {
                        document.getElementById("theanswer").innerHTML = varbeten2;

                    }
                } else {
                    if ((quation.includes("גב")) || (quation.includes("בגב")) || (quation.includes("הגב"))) {
                        if (randomnum == 0) {
                            document.getElementById("theanswer").innerHTML = varback;

                        } else {
                            document.getElementById("theanswer").innerHTML = varback2;

                        }
                    } else {
                        if ((quation.includes("גרון")) || (quation.includes("הגרון")) || (quation.includes("בגרון"))) {
                            if (randomnum == 0) {
                                document.getElementById("theanswer").innerHTML = vargaron;

                            } else {
                                document.getElementById("theanswer").innerHTML = vargaron2;

                            }
                        } else {
                            if ((quation.includes("מחזור")) || (quation.includes("המחזור")) || (quation.includes("במחזור")) || (quation.includes("וסת")) || (quation.includes("הוסת"))) {
                                if (randomnum == 0) {
                                    document.getElementById("theanswer").innerHTML = varmahzor;

                                } else {
                                    document.getElementById("theanswer").innerHTML = varmahzor2;

                                }
                                btnn.style.display = "block";
                                document.getElementById("bottopage").innerHTML = "לעמוד כאב מחזור";
                                btnn.href = "period.html";
                            } else {
                                if ((quation.includes("אוזן")) || (quation.includes("באוזן")) || (quation.includes("האוזן")) || (quation.includes("אוזניים")) || (quation.includes("האוזניים")) || (quation.includes("באוזניים")) || (quation.includes("אוזנים"))) {
                                    if (randomnum == 0) {
                                        document.getElementById("theanswer").innerHTML = varozen;

                                    } else {
                                        document.getElementById("theanswer").innerHTML = varozen2;

                                    }
                                } else {
                                    if ((quation.includes("עצירות"))) {
                                        if (randomnum == 0) {
                                            document.getElementById("theanswer").innerHTML = varazirut;

                                        } else {
                                            document.getElementById("theanswer").innerHTML = varazirut2;

                                        }
                                    } else {
                                        if ((quation.includes("תודה"))) {
                                            if (randomnum == 0) {
                                                document.getElementById("theanswer").innerHTML = varthank;

                                            } else {
                                                document.getElementById("theanswer").innerHTML = varthank2;              
                                            }
                                        } else {
                                            if ((quation.includes("פשפשים")) || (quation.includes("קרציות")) || (quation.includes("פרעושים"))) {
                                                if (randomnum == 0) {
                                                    document.getElementById("theanswer").innerHTML = varpishphesh;

                                                } else {
                                                    document.getElementById("theanswer").innerHTML = varpishphesh2;
                                                }
                                                btnn.style.display = "block";
                                                document.getElementById("bottopage").innerHTML = "לעמוד פשפשים";
                                                btnn.href = "dogs.html";
                                            }
                                            else {
                                                if ((quation.includes("שיעול"))) {
                                                    if (randomnum == 0) {
                                                        document.getElementById("theanswer").innerHTML = varshiul;

                                                    } else {
                                                        document.getElementById("theanswer").innerHTML = varshiul2;
                                                    }
                                                    btnn.style.display = "block";
                                                    document.getElementById("bottopage").innerHTML = "לעמוד שיעול";
                                                    btnn.href = "shiul.html";

                                                } else {

                                                    if (randomnum == 0) {
                                                        document.getElementById("theanswer").innerHTML = varundifined;

                                                    } else {
                                                        document.getElementById("theanswer").innerHTML = varundifined2;

                                                    }                                                    }
                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }





        }, 1400);



    } else {
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 0);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 300);
        setTimeout(function () {
            if (randomnum == 0) {
                document.getElementById("theanswer").innerHTML = "מבובלים, שכחתם לשאול שאלה";

            } else {
                document.getElementById("theanswer").innerHTML = "אוי ווי! יכול להיות שלא הקלדתם כלום?";

            }
        }, 600);
    }
}




var varundifined = "לא הצלחתי להבין, בואו ננסה שוב";
var varundifined2 = "קצת הסבכתי לקרוא את מה שכתבת,בואו ננסה שוב ";
var varhead = "שתו קפה! לקפאין יש אפקט שיכוך כאבים קל, והוא יכול להיות יעיל במיוחד ";
var varhead2 = "קחו תנומה קטנה. שינה יכולה להיות יעלה מאוד במקרים של כאב ראש";
var varback = "תוסיפו כרכום לאוכל! כורכום עוזר מאוד במקרים של כאבי גב.";
var varback2 = "תעשו קצת מתיחות. לפעמים הכאב גב נובע מאיזו חולילה שזזה קצת. ";
var varbeten = "נסו למרוח ערק על הבטן. זה מאוד עוזר. אני ממליצה להיכנס לעמוד שלי על כאבי בטן לראות. ";
var varbeten2 = " תה עם ג'ינג'ר יכול לעשות פלאים לבטן שלכם.ממליצה להיכנס לעמוד שלי על כאבי בטן לקרוא עוד";
var vargaron = "כפית דבש ישר לגרון. תעשה פלאים!";
var vargaron2 = "נסו לגרגר מלח. המלח הורג את כל החיידקים ועוזר בהחלמה מהירה.";
var varazirut = "שזיפים ידועים בסגולות שלהם להוציא הכל ומהר. 2 שזיפים אחרי האוכל ואתם חזרה בשירותים.";
var varazirut2 = "עגבניה עם שמן זית תסדר לכם את כל מה שקורה בבטן ותחזיר אתכם למוטב!";
var varozen = "חממו כמה טיפות של שמן זית ומרחו על כל אזור האוזן. השמן ירגיע את הדלקת וישכך את הכאב ";
var varozen2 = "חתיכת בצל באוזן יכולה לעשות פלאים. פשוט לחתוך דק ולהכניס לכמה דקות. ";
var varmahzor = "תה חם (אבל לא רותח!) יעזור לך מאוד להרגיע את הכאבים. אני ממליצה להיכנס לעמוד לקרוא עוד...";
var varmahzor2 = "נסי למרוח ערק על הבטן, זה יכול להקל מאוד על הכאבים... כנסי לעמוד שלי תקראי עוד קצת.";
var varthank = "באהבה חיים של סבתא";
var varthank2 = "בשבילך עד חצי המלכות נשמה שלי";
var varshiul = "תרתיחו קצת מים חמים וכשהמים רותחים נושמת הכל חזק, בעמוד על שיעול הסבירו הרבה יותר טוב";
var varshiul2 = "אתם יודעים שאין כמו תה. תוסיפו נענע וקנמון וזה בכלל יהיה וואוו. ממליצה להיכנס לעמוד על שיעול, יש שם מלא מידע.";
var varpishphesh = "נסו למרוח שמן צמחי על הפרווה של הכלב, אני ממליצה להיכנס לעמוד לקרוא עוד...";
var varpishphesh2 = "שימו מעט רוזמרין על הפרווה של הכלב שלכם... ההסבר המלא בעמוד שלי :)";


