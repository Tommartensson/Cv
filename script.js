fetch("https://api.github.com/users/tommartensson/repos")
.then(Response => Response.json())
.then(data => {
    let Git = document.getElementById("git");

    for (i=0; i<data.length; i++)
    {
        Git.insertAdjacentHTML("beforeend", "<a href='"+ data[i].html_url + "' target='_blank'>"+ data[i].name +"</a>" + "<br>");
        console.log(data[i].name)
    }
})
.catch(error => console.log(error))