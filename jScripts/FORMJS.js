var myEmail = "";
var successFeedback = "אין עלייך! חיים של סבתא. ההודעה נשלחה אליה :)";
var failFeedback = "אוקי, לא להילחץ... אבל יש שגיאה. משהו לא עובד. ננסה שוב?";
var serverName = "";
//serverName = "http://webdevelopmentcourse.telem-hit.net/"
serverName = "https://webdevelopmentcourse.github.io/contactUs/WebDevelopmentCourse/";

var ajaxLoaderImageURL = serverName + "images/ajaxLoader.gif";



    $(function () {
            myEmail = $("input#myEmail").val();
            var theEmailString = "";
            $("input[type='submit']").click(function () {
                var eemail = document.getElementById("EMail").value;
                var ttext = document.getElementById("myMS").value;
                var nname = document.getElementById("FirstName").value;
                if (eemail != "" && ttext != "" && nname != "") {
                    document.getElementById("EMail").style.border = "none";
                    document.getElementById("myMS").style.border = "none";
                    document.getElementById("FirstName").style.border = "none";
                    theEmailString = getFormValue();
                    send2Server(theEmailString);
                    return false;
                    addAjaxLoaderToFeedbackDiv();
                } else {
                    document.getElementById("feedback").style.opacity = "1";
                    document.getElementById("EMail").style.border = "none";
                    document.getElementById("myMS").style.border = "none";
                    document.getElementById("FirstName").style.border = "none";

                    if (eemail == "" && ttext == "" && nname == "") {
                        document.getElementById("EMail").style.border = "3px solid red";
                        document.getElementById("myMS").style.border = "3px solid red";
                        document.getElementById("FirstName").style.border = "3px solid red";
                        document.getElementById("feedback").innerHTML = "יש כמה שדות שפספסת (שם,אימייל והודעה).<br/> לסבתא תמיד מספרים הכל!"
                    } else {
                        if (eemail == "" && ttext == "" && nname != "") {
                            document.getElementById("EMail").style.border = "3px solid red";
                            document.getElementById("myMS").style.border = "3px solid red";
                            document.getElementById("feedback").innerHTML = "יש כמה שדות שפספסת (אימייל והודעה).<br/> לסבתא תמיד מספרים הכל!"
                        } else {
                            if (eemail != "" && ttext == "" && nname != "") {
                                document.getElementById("myMS").style.border = "3px solid red";
                                document.getElementById("feedback").innerHTML = "פספסת את כתיבת ההודעה.<br/> לא יפה ככה לא לכתוב לה כלום"
                            } else {
                                if (eemail != "" && ttext != "" && nname == "") {
                                    document.getElementById("FirstName").style.border = "3px solid red";
                                    document.getElementById("feedback").innerHTML = "לא כתבת שם.<br/> עם הגיל זה נהיה חשוב יותר ויותר"
                                } else {
                                    if (eemail == "" && ttext != "" && nname != "") {
                                        document.getElementById("EMail").style.border = "3px solid red";
                                        document.getElementById("feedback").innerHTML = "לא כתבת לסבתא מייל. כן, היא מבטיחה לא לשלוח ספאם."
                                    } else {
                                        if (eemail != "" && ttext == "" && nname == "") {
                                            document.getElementById("FirstName").style.border = "3px solid red";
                                            document.getElementById("myMS").style.border = "3px solid red";
                                            document.getElementById("feedback").innerHTML = "יש כמה שדות שפספסת (שם והודעה).<br/> לסבתא תמיד מספרים הכל!"
                                        } else {
                                            if (eemail == "" && ttext != "" && nname == "") {
                                                document.getElementById("FirstName").style.border = "3px solid red";
                                                document.getElementById("EMail").style.border = "3px solid red";
                                                document.getElementById("feedback").innerHTML = "יש כמה שדות שפספסת (שם ואימייל).<br/> לסבתא תמיד מספרים הכל!"
                                            }
                                        }

                                    }

                                }

                            }
                        }


                    }
                }
            });

        });


function getFormValue() {
    var theString = "";
    $("body form").children().each(function () {

        var theId = "";
        var theTitle = "";
        var theValue = "";

        if ($(this).attr("for") != null) {

            theId = $(this).attr("for");
            theTitle = $(this).text();

            if ($("textarea#" + theId).is(":visible")) {
                theValue = $("textarea#" + theId).text();
                theValue = $.trim(theValue);
                if (theValue == "") {
                    theValue = $("textarea#" + theId).val();
                }
            } else if ($("select#" + theId).is(":visible")) {
                var optionValue = $("#" + theId).val();
                theValue = $("#" + theId).find("option[value='" + optionValue + "']").text();

            } else if ($("input#" + theId).is(":visible") && ($("input#" + theId).attr("type") == "text" || $("input#" + theId).attr("type") == "password")) {
                theValue = $("#" + theId).val();
            }
            else {
                if ($("input#" + theId).is(':checked') && $("input#" + theId).attr("type") == "radio") {
                    theValue += $("label[for='" + $(this).attr("id") + "']").text() + " + ";
                }
                else if ($("input#" + theId).attr("type") == "checkbox") {
                    if ($("input#" + theId).is(':checked')) {
                        theValue = "כן";
                    }
                    else {
                        theValue = "לא";
                    }
                }

            }


        }


        if (theId != "") {
            theString += "<b>" + theTitle + " : " + "</b>";
            theString += theValue + "<br/>";
        }

    });
    return theString;
}


function send2Server(str) {
    showAjaxLoader();
    console.log("str: " + str);
    console.log("myEmail: " + myEmail);
    var theServer = "https://wwws.hit.ac.il/facebook/telemDev/TelemWebDevelopmentCourseContact_me.php";
    $.ajax({
        url: theServer,
        type: "POST",
        data: {
            theMailBody: str,
            sendTo: myEmail,
        },
        cache: false,
        complete: function (data) {
            console.log(data.statusText);
            hideAjaxLoader();
            $("div#feedback").html("");
            addAjaxLoaderToFeedbackDiv();
            if (data.statusText == "OK") {
                $("div#feedback").append(successFeedback);
                $("div#feedback").css("color", "green");
            }
            else {
                $("div#feedback").append(failFeedback);
                $("div#feedback").css("color", "red");
            }
        }

    });
}



function myEncode(str) {
    // return encodeURIComponent(str).replace(/\'/g, "%27");
    // return encodeURIComponent(str).replace(/\'/g, "</br>");
}

function addAjaxLoaderToFeedbackDiv() {
    $("div#feedback").append("<div id='ajaxLoaderDiv' style='display:none;'><img src='" + ajaxLoaderImageURL + "' alt='ajaxLoader' /></div>");
}

function showAjaxLoader() {
    document.getElementById("feedback").style.opacity = "1";
    $("div#ajaxLoaderDiv").fadeIn();
}

function hideAjaxLoader() {
    $("div#ajaxLoaderDiv").fadeOut();
}