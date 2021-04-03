$(document).ready(function () {
    $(".icon").hover(function () {
        $(this).toggleClass("icon-large");
    });
});

function loadRepos() {
    let gitReposRequest = new XMLHttpRequest();
    gitReposRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitObject = JSON.parse(this.responseText);
            document.getElementById("repos").innerHTML = "";

            for (let i = 0; i < gitObject.length; i++) {
                let ul = document.getElementById("repos");
                let li = document.createElement("LI");
                li.className = "list-group-items";
                let a = document.createElement("a");

                li.appendChild(document.createTextNode(gitObject[i].name));
                a.appendChild(li);
                a.setAttribute("href", gitObject[i].html_url);
                ul.appendChild(a);
            }
        }
    }
    gitReposRequest.open("GET", "https://api.github.com/users/BVA1000/repos", true);
    gitReposRequest.send();
}
