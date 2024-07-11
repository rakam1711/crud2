import React, { useEffect, useState } from 'react'
function Github() {
    
    const [data ,setData] =useState([])
    useEffect(()=>{
      fetch('https://api.github.com/users/rakam1711')
      .then(response =>response.json())
      .then(data =>{
        setData(data)
      })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github: {data.name } , {data.location}</div>
  )
}

export default Github