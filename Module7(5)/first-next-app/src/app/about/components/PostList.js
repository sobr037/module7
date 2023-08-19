import React from 'react';
import posts from '../../data';

function PostList() {
  return (
    <div class="posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;