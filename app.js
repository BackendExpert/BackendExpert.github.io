fetch("https://api.github.com/users/BackendExpert")
.then((result) => result.json())
.then((data) => {
  
    document.getElementById("gitResult").innerHTML = `
            <div class='bk'>
                <h1>Username: ${data.login}</h1><br>
                <h3>Bio: ${data.bio}</h3>
                <h3>Public Repositories: ${data.public_repos}</h3>
                <h3>Followers: ${data.followers}</h3>
                <br><br>
                <h4>For More Info: <a href='${data.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${data.login}</a></h4>
            </div>`
})

fetch("https://api.github.com/users/jehankandy")
.then((result) => result.json())
.then((jkdata) => {
  
    document.getElementById("gitResultJK").innerHTML = `
            <div class='jk'>
                <h1>Username: ${jkdata.login}</h1><br>
                <h3>Bio: ${jkdata.bio}</h3>
                <h3>Public Repositories: ${jkdata.public_repos}</h3>
                <h3>Followers: ${jkdata.followers}</h3>
                <br><br>
                <h4>For More Info: <a href='${jkdata.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${data.login}</a></h4>
            </div>`
})