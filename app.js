fetch("https://api.github.com/users/BackendExpert")
.then((result) => result.json())
.then((data) => {
    var bkData = document.getElementById('gitResult');
    let allBK = `
            <div class='bk'>
                <h1>Username: ${data.login}</h1><br>
                <h3>Bio: ${data.bio}</h3>
                <h3>Public Repositories: ${data.public_repos}</h3>
                <h3>Followers: ${data.followers}</h3>
                <br><br>
                <h4>For More Info: <a href='${data.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${data.login}</a></h4>
            </div>`
    bkData.innerHTML = allBK;
})

fetch("https://api.github.com/users/jehankandy")
.then((jkresult) => jkresult.json())
.then((jkdata) => {
  
    var jkData = document.getElementById('gitResultJK');
    let allJK = `
            <div class='bk'>
                <h1>Username: ${data.login}</h1><br>
                <h3>Bio: ${data.bio}</h3>
                <h3>Public Repositories: ${data.public_repos}</h3>
                <h3>Followers: ${data.followers}</h3>
                <br><br>
                <h4>For More Info: <a href='${data.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${data.login}</a></h4>
            </div>`
    jkData.innerHTML = allJK;
})