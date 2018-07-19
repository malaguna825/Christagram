export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}

export const createLike = (post_id) => {

  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like: { post_id: post_id } }
  })
}
