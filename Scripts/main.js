const user = localStorage.getItem("user");

/*$(document).ready(function () {
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covidcurious-a7f1.restdb.io/rest/accounts",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "620e5be234fd621565858738",
            "cache-control": "no-cache"
        }
    }
    */

    // AJAX TO ACCESS DATABASE
function ajaxFuncGET() {
    return $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://covidcurious-a7f1.restdb.io/rest/accounts",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "620e5be234fd621565858738",
            "cache-control": "no-cache"
        }
    });
}
let username = "";
ajaxFuncGET().done(function (response) {
    response.map(account => {
        if ( account.Username=== $("#username")) {
            username = account.Username;
            $("#navbar-username").html(`Welcome, ${username}!`)
        }
    });
});

    /*let username = "";
    if (user !== null) {
        $.ajax(settings).done(function (response) {
            response.map(account => {
                if (user === account.Username) {
                    username = account.Username;
                    username = account.Username;
                    $("#navbar-username").html(`Welcome, ${username}!`)
                }
            });
        });
        
        // just to bring over to html later
        // not a real variable to use
        let example = `<p id="navbar-username"></p>`;
    }
    else {
        $("#navbar-username").html("");
    }
    */
/*
    // to logout
    $("#logout").on("click", function () {
        localStorage.removeItem("user");
        window.location.assign("index.html");
    });
});
*/