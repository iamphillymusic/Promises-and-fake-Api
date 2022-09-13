const posts = [ 
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post two', body: 'This is post tow'}
];

function creatPosts (post) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if(error){
        resolve()
      }else {
        reject('Error: Something went wrong');
      }
      resolve();
    }, 2000);
  }); 

}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    }); 
    document.body.innerHTML = output;
  }, 1000);
}

creatPosts({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch((err) => {
  console.log(err)
})