import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';

export const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [nickName, setnNckName] = useState("");

  const onChangeNickName = (e) => {
    setnNckName(e.target.value);
  }

  const onChangePostContent = (e) => {
    setPostContent(e.target.value);
  }

  const handleSubmit = () => {
    const data = {
      text: postContent,
      name: nickName,
    }

    axios.post('http://localhost:81/api/create', data)
      .then(res => {
        console.log(res);
      }).catch(e => {
        console.log("エラー")
        console.log(e)
      })
      
    setPostContent("");
    setnNckName("");
  }

  return (
    <section className="py-20">
      <div>
        <h2 className="text-center text-4xl mb-12">投稿ページ</h2>
        <div className="w-72 m-auto justify-center">
          <input onChange={onChangeNickName} type="text" value={nickName} placeholder="ニックネーム" className="w-full mb-8 border-2 border-gray-400 p-1" />
          <textarea placeholder="5・7・5で入力して下さい" onChange={onChangePostContent} className="p-1 w-full mb-10 border-2 border-gray-400" name="text" id="" cols="30" rows="3" value={postContent}></textarea>
          <div className="flex justify-center">
            <button onClick={handleSubmit}  className="py-2 mb-4 bg-amber-200 w-24 text-center block mr-4">送信</button>
            <Link to="/" className="py-2 mb-4 bg-amber-200 w-24 text-center block">
              一覧へ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}