import React from 'react'
import { getStore } from '../utiles'

const Home = () => {
  const currentUser = getStore('currentUser')
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Welcome to {currentUser.email}
      </h1>
    </div>
  )
}

export default Home
