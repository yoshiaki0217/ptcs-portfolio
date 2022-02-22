import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Index = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:81/api/post')
      .then((res) => {
        const data = res.data;
        setPostData(data);
        console.log(data);
      }).catch(() => {
        console.log('エラー');
    })
  }, [])
  
  return (
    <section className="py-20">
      <div>
        <h2 className="text-center text-2xl">サラリーマン川柳</h2>
        <PostList className='m-auto'>
        {
          postData.map((data,index) => {
            return (
              <li className="flex justify-between">
                <p className="py-10 text-xl">{data.text}</p>
                <div className="text-sm w-60 flex justify-end pb-3 flex-col">
                  <p className="text-sm">
                    {data.user_name}
                  </p>
                  <p>
                    {data.created_at}
                  </p>
                </div>
              </li>
            )
          })
        }
          </PostList>
        <Link to="/post">
          投稿する
        </Link>
      </div>
    </section>
  )
}


const PostList = styled.ul`
  width: 60rem;
  li{
    border-top:solid 1px rgb(203 213 225);
  }
`