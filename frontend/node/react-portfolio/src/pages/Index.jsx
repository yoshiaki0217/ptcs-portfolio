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
        <div className="mb-12">
          <h2 className="text-center text-4xl">川柳一覧</h2>
        </div>
        <PostList className='m-auto'>
          <Link to="/post" className="py-2 mb-4 bg-amber-200 w-20 text-center block">
            投稿する
          </Link>
        {
          postData.map((data,index) => {
            return (
              <li className="flex justify-between">
                <p className="py-10 text-xl">{data.text}</p>
                <div className="text-sm w-40 flex justify-end pb-3 flex-col">
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
      </div>
    </section>
  )
}


const PostList = styled.ul`
  width: 60rem;
  a{
    margin: 0 0 1rem auto;
  }
  li{
    border-top:solid 1px rgb(203 213 225);
  }
`