import React from 'react'

const Loggedinpge = (email,faceid) => {
console.log(faceid)
const x=faceid.faceid
  return (
    <div>
        <h1>
        You are logged in {`${email.email}`}
        

        </h1>
    </div>
  )
}

export default Loggedinpge