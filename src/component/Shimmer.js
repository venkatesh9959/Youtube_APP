import React from 'react'

export const Shimmer = () => {
  return (
    <div className='Shimmer_com'>
        {Array(50).fill("").map((element, index)=>(
            <div key={index} className='shimmer_list'>{element}</div>
        ))}
    </div>
  )
}
