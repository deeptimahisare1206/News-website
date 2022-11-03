import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState([]);
  
  const [heading,setheading]=useState('')

  useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=de0f834bca5b4ea99bad86f8806411d5')
        .then((res) => {
          setData(res.data.articles);
          setheading("General")
        });
    },[])
  const categoryChangeToI = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("India")
      });
  }
  const categoryChangeToU = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("USA")

      });
  }
  const categoryChangeToC = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("Canada")

      });
  }

  const categoryChangeToG = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("General")

      });
  }
  const categoryChangeToSp = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
      setheading("Sports")
        
      });
  }

  const categoryChangeToS = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("Science")

      });
  }
  const categoryChangeToE = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("Entertainment")

      });
  }

  const categoryChangeToT = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("Technology")

      });
  }

  const categoryChangeToB = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=de0f834bca5b4ea99bad86f8806411d5')
      .then((res) => {
        setData(res.data.articles);
        setheading("Business")

      });
  }


  const news = data.map((value, index) => {
    return (
      <div key={index} className="card">
        <img src={value.urlToImage} alt="..." />
        <div className='card-body'>
          <h4 className='title'>{value.title}</h4>
          <h6>{value.author} /// {value.publishedAt}</h6>
          <p className='description'>{value.description}</p>
          <a href={value.url} className="btn">READ MORE</a>
        </div>
      </div>
    )
  })

  return (
    <div>

      <div className='mainbox'>
        <div className='sidebox'>
          <div className='category'>
            <h2>Category</h2>

            <button onClick={categoryChangeToG} >General</button>
            <br />
            <button onClick={categoryChangeToSp}>Sports</button>
            <br />
            <button onClick={categoryChangeToS}>Science</button>
            <br />
            <button onClick={categoryChangeToE}>Entertainment</button>
            <br />
            <button onClick={categoryChangeToT}>Technology</button>
            <br />
            <button onClick={categoryChangeToB}>Business</button>
         
          
            <h2>Country</h2>
            <button onClick={categoryChangeToI}>India</button><br />
            <button onClick={categoryChangeToU}>USA</button><br />
            <button onClick={categoryChangeToC}>Canada</button>
            </div>
        </div>
        <div className='centerbox'>
        {/* <h1>Also Get the Latest News Here.</h1> */}
          <div className='heading'>
          {heading}
          </div>
           <div className='dep'> {news}</div>
        </div>
      </div>

    </div>

  )


}

