import React from 'react'

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex h-12 w-12 items-center font-bold justify-center rounded-full border-4 border-red-500 border-t-transparent shadow-lg shadow-red-200/40 animate-spin">
      </div>
      <span className='font-[cursive] mx-2 text-xl font-bold text-gray-600'>
        Loading...
      </span>
    </div>
  )
}
