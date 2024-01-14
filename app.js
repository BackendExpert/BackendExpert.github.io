fetch("https://api.github.com/users/BackendExpert")
.then((result) => result.json())
.then((data) => {

    document.getElementById("gitResult").innerHTML = `
        <div class='row'>
            <div class='bk'>
                <h1>Username: ${data.login}</h1><br>
                <h3>Bio: ${data.bio}</h3>
                <h3>Public Repositories: ${data.public_repos}</h3>
                <h3>Followers: ${data.followers}</h3>
            </div>
            <div class='jk'>
            sss
            </div>
        </div>
    
    `

})