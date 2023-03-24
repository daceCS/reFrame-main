const socket = io();
postIndex = 0;
socket.on('post-to-feed', (caption, image)=>{

    let feed = $('#feed');
    let postContainer = `<div id="post-${postIndex}" class="post-container">
                            <p id="post-caption-${postIndex}">${caption}</p>
                            <img src="${image}" id="post-image-${postIndex}" height="auto" width="90%" class="post-image">
                            
                          
                        </div>`
     

      feed.prepend(postContainer);
     
  postIndex++;
})
function populateFeed(){
  let feed = $('#feed');
  $.get('/populate-feed', (data)  =>{
    let allPost = data.allPost;
    for(i = 0; i<allPost.length; i++){
      let image = allPost[i].image;
      let caption = allPost[i].caption;
      let postContainer2 = `<div id="post-${postIndex}" class="post-container">
                            <p id="post-caption-${postIndex}">${caption}</p>
                            <img src="${image}" id="post-image-${postIndex}" height="auto" width="90%"  class="post-image">
                            
                            
                          
                        </div>`
      feed.prepend(postContainer2);
      postIndex++;
    }
  })
}
function createNewPost(){
  window.location.replace('/createPost');
}
$(document).ready(()=>{
  
  populateFeed();
})