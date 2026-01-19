let btn = document.getElementById("themeBtn");

btn.onclick = function () {
    if (document.body.className === "light") {
        document.body.className = "dark";
    } else {
        document.body.className = "light";
    }
};
