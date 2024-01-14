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
            <div class='jk'>
                <h1>Username: ${jkdata.login}</h1><br>
                <h3>Bio: ${jkdata.bio}</h3>
                <h3>Public Repositories: ${jkdata.public_repos}</h3>
                <h3>Followers: ${jkdata.followers}</h3>
                <br><br>
                <h4>For More Info: <a href='${jkdata.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${jkdata.login}</a></h4>
            </div>`
    jkData.innerHTML = allJK;
})

fetch("https://api.github.com/orgs/JKCSS-CSS-Framework")
.then((jkcssresult) => jkcssresult.json())
.then((jkcssdata) => {

    var jkcss = document.getElementById('gitResultOrg');
    let alljkcss = `
        <div class='jkcss'>
            <h1>Organization: ${jkcssdata.name}</h1><br>
            <h3>Bio: ${jkcssdata.description}</h3>
            <h3>Public Repositories: ${jkcssdata.public_repos}</h3>
            <h3>Followers: ${jkcssdata.followers}</h3>
            <h3>Blog: <a href='${jkcssdata.blog}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${jkcssdata.login}</a></h3>
            <br><br>

            <h4>For More Info: <a href='${jkcssdata.html_url}' target='_blank' style='text-decoration: none; color:rgb(49, 58, 184);'>${jkcssdata.login}</a></h4>
        </div>
    `;

    jkcss.innerHTML = alljkcss;

})