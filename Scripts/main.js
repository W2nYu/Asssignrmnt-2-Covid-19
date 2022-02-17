const user = localStorage.getItem("user");

$(document).ready(function () {
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
    let username = "";
    if (user !== null) {
        $.ajax(settings).done(function (response) {
            response.map(account => {
                if (user === account._id) {
                    username = account.Username;
                }
            });
        });
        $("#navbar-username").html(username);

        // just to bring over to html later
        // not a real variable to use
        let example = `<p id="navbar-username"></p>`;
    }
    else {
        $("#navbar-username").html("");
    }

    // to logout
    $("#logout").on("click", function () {
        localStorage.removeItem("user");
        window.location.assign("index.html");
    });
});