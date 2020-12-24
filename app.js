//Elementler
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("github-name");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const github = new Github(); 
eventListeners(); 
function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let username = nameInput.value.trim();

    if(username === ""){
        alert("LÜtfen geçerli bir kullanıcı adı girin");
    }
    else{
        github.getGithubData(username)
        .then(response =>{
            if(response.user.message === "Not Found"){
                console.log("Hata");
            }
            else{
            console.log(response)
            }
        })
        .catch(err => console.log(err));
            
    }

    e.preventDefault();
}

function clearAllSearched() {

}

function getAllSearched() {

}
