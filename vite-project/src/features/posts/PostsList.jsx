import React, {useState, useEffect} from 'react';
import { API_URL } from "../../constants";


function PostsList() {
  const [posts, setPosts] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)
  // fetch post 
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(`${API_URL}`);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response
        }
      } catch (e) {
        setError("An error occurred...");
        console.log("An error occurred:", e)
      } finally {
        setLoading(false)
      }
    }
    loadPosts();
  }, [])

  return <div>
    {posts.map((post) => (
      <div key={post.id} className="post-container">
        <h2>{post.title}</h2>
        <p>
          {post.body}
        </p>
      </div>
    ))}
  </div>
}
export default PostsList;
