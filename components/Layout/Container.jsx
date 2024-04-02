import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container 2xl:px-28 px-5 mx-auto w-full'>{children}</div>
  )
}

export default Container