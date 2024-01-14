fetch("https://api.github.com/users/BackendExpert")
.then((result) => result.json())
.then((data) => {

    document.getElementById("gitResult").innerHTML = `
        <div class='row'>
            <div class='bk'>
            sss
            </div>
            <div class='jk'>
            sss
            </div>
        </div>
    
    `

})