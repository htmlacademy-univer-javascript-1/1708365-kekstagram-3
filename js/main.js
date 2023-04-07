const getRandomNumber = function(a, b) {
  if (a < 0 || b < 0 ) {
    return;
  }
  const randomNumber = Math.floor(Math.random() * (b - a) ) + a;
  return randomNumber;
}

const isStringInSize = function(string, size) {
  if (string.length <= size) {
    return true;
  }
  return false;
}

function createPost(id){
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15,200),
    comments: getRandomNumber(0,200)
  };
}

function createPosts(quantity){
  const posts = [];
  for (let i = 1; i <= quantity; i++) {
    posts[i-1] = createPost(i);
  }
  return posts;
}


createPosts(25);
