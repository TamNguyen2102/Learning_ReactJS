import React from "react";

function Posts({ loading, posts }) {
  return (
    <>
      {loading ? (
        <h3 className="m-4">Loading...</h3>
      ) : (
        <ul className="list-group m-4">
          {posts.map((post) => {
            return (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Posts;
