import React from 'react'

const BlueButton = ({ content }) => {
  return (
    <div
      className={`animate-btn cursor-pointer rounded-sm bg-turbo-light-blue-500/80 p-2 text-sm font-semibold shadow-turbo-light-blue-500 ring-blue-300 ring-offset-blue-300 hover:bg-turbo-light-blue-500 hover:shadow-sm hover:ring-1 hover:ring-turbo-light-blue-500  hover:ring-offset-2 md:text-lg`}
    >
      {content}
    </div>
  )
}

export default BlueButton
