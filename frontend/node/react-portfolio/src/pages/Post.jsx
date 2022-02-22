import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';

export const Post = () => {
  const [postContent, setPostContent] = useState("");

  const onChangePostContent = (e) => {
    setPostContent(e.target.value);
  }

  const handleSubmit = () => {
    const data = {
      text: postContent,
    }

    axios.post('http://localhost:81/api/create', data)
      .then(res => {
        console.log(res);
      }).catch(e => {
        console.log("エラー")
        console.log(e)
      })
      
    setPostContent("");
  }

  return (
    <section>
      <div>
        <h2>投稿ページ</h2>
        <textarea onChange={onChangePostContent} className="border-2 border-black" name="text" id="" cols="30" rows="10" value={postContent}></textarea>
        <button onClick={handleSubmit}>送信</button>
        <Link to="/">
          一覧へ
        </Link>
      </div>
    </section>
  )
}