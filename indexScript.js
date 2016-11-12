
$(document).ready(function() {
    /*
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        data:"{}",
        url: "http://analyzereadsserverphp-env.us-west-2.elasticbeanstalk.com/?func=setupOauth&callback=?", // The server URL
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown)
        },
        success: function (msg) {
            console.log(msg["data"]);
            saved = msg["data"];
            //window.location.href = saved;
        }

    });
*/
                  
    //delay text appearance
    var timeDelay = 1000;
    $("#title").hide().fadeIn(timeDelay);
    $("#title_border").hide().fadeIn(timeDelay);
    $("#text").hide().delay(timeDelay/2).fadeIn(timeDelay);

});


//triggered by the button in home.html
function modalButton() {

    //open a popup window
    var saved ='';
    var authWindow = window.open('about:blank', '', 'left=20,top=20,width=400,height=400,toolbar=0,resizable=1');
    
    //make ajax request to php-server file
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        data:"{}",
        url: "http://analyzereadsserverphp-env.us-west-2.elasticbeanstalk.com/?func=setupOauth&callback=?", // The server URL
        error: function (jqXHR, textStatus, errorThrown) {
            //log failure
            console.log(jqXHR, textStatus, errorThrown)
            return saved;
        },
        success: function (msg) {
            //on success, replace the link of the popup window the link returned
            saved = msg["data"];
            authWindow.location.replace(saved);
           
            /*
             add new script to popup to redirect to the window openner's location
             and close window
            */
            $(authWindow.document.body).append("<script>window.addEventListener('hashchange',myFunc); function myFunc(){alert('blah');window.opener.location = '/redirect.html';window.close();}</script>");
        }
    });
};
