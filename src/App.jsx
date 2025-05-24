import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wdxl-lubrifont-tc-regular flex flex-col justify-center items-center py-16 px-4">
        <p className="text-4xl sm:text-6xl md:text-8xl text-center">
          Em<span className="bg-yellow-500 px-2">ox.</span>
        </p>
        <p className="text-lg sm:text-xl text-yellow-500 mt-2 text-center">
          Turn Your Text into emoji.
        </p>
      </div>

      <div className="bg-neutral-900 w-full max-w-screen px-4 py-10 rounded wdxl-lubrifont-tc-regular flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-yellow-600 text-neutral-900 text-base sm:text-lg font-medium mt-6 p-6 rounded">
            <p>Python Packages:</p>
            <div className="border-t border-neutral-900 my-3"></div>
            <p>- numpy==1.21.6</p>
            <p>- scipy==1.13.1</p>
            <p>- gensim==4.3.3</p>
          </div>

          <div className="bg-yellow-600 mt-6 p-2 rounded text-center">
            <p className="bg-neutral-900 text-yellow-500 text-xl py-2 px-4 rounded">
              pip install emox
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-300 h-60"></div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-yellow-600 text-neutral-900 text-base sm:text-lg px-6 py-4 rounded">
            <p className="font-bold mb-2">Usecase:</p>
            <div className="bg-yellow-700 p-4 rounded space-y-2">
              <p>1. from emox import pred</p>
              <div className="border-t border-neutral-900 my-1"></div>
              <p>2. emotion = "I am sad"</p>
              <div className="border-t border-neutral-900 my-1"></div>
              <p>3. print(pred(emotion))</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

