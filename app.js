fetch("https://api.github.com/users/BackendExpert")
.then((result) => result.json())
.then((data) => {

    document.getElementById("gitResult").innerHTML = `
        <div class='row'>
            <div class='col-lg-6'>
            sss
            </div>
            <div class='col-lg-6'>
            sss
            </div>
        </div>
    
    `

})