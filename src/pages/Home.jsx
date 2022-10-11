import React from 'react'
import UserSearch from '../components/users/UserSearch'
import UserResults from '../components/users/UserResults'

//Home page displays user search field and search results
function Home() {
  return (
    <div>
        <UserSearch />
        <UserResults />
    </div>
  )
}

export default Home