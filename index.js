fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const mypost = document.getElementById("content");
    
    const filteredPosts = data.filter(data => {
        return data.id <=10;
    })

    filteredPosts.forEach((element) => {
        mypost.innerHTML += `<h1>${element.title}</h1>${element.body}` ;
    });
});


