import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-gray-300">
        <form className="flex felx-cols bg-white ">
            <label for="user-email">Email Address</label>
            <input type="email" id="user-email" placeholder="example@gamil.com" required></input>
        </form>
    </main>
  )
}

export default page