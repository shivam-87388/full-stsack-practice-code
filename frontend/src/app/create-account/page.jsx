import React from 'react'

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-300 ">
        <form className="flex flex-col rounded-2xl bg-white p-4 shadow-2xl w-2xl container">
            <label for="user-email">Email Address</label>
            <input type="email" id="user-email" placeholder="example@gamil.com" required></input>
        </form>
    </main>
  )
}

export default page