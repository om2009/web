function add_user()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name)
    user_ad = document.getElementById("user_ad").value;
    localStorage.setItem("user_ad", user_ad)
    window.location = "menu.html";
}