import { getRandomNumber } from './util.js';

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

export { createPosts };
