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
                <br><br>
                <h4>for More Info: <a href='${data.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${data.login}</a></h4>
            </div>
            <div class='jk'>
            sss
            </div>
        </div>
    
    `

})