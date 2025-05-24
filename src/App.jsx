import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" wdxl-lubrifont-tc-regular  flex  flex-col justify-center py-20 items-center">

        <p className=" sm:text-[70px] md:text-[100px]">Em
          <span className="bg-yellow-500">ox.</span> </p>

        <p className="text-[20px] text-yellow-500">Turn Your Text into emoji.</p>
      </div>

      
      <div className="bg-neutral-900 
        px-20 
        py-20
        h-100
        md:overflow-hidden
        sm:overflow-auto
        rounded  
        wdxl-lubrifont-tc-regular 
        flex 
md:flex-row
        sm:flex-col
        justify-center  items-center 
        mx-20">
    

        <div className="mx-20 px-20 my-20 md:overflow-hidden sm:overflow-auto">
        <div className="bg-yellow-600 text-[20px] text-neutral-900  font-medium  mt-10 py-3 px-10">
            <p>Python Packages :</p>
          <div class="border-t border-neutral-900 my-3"></div>

            <p>  - numpy==1.21.6</p>
            <p > - scipy==1.13.1</p>
            <p>  - gensim==4.3.3</p>
</div>
<div
className="bg-yellow-600 px-1  py-1 my-10 "
          >

<p className="bg-neutral-900 px-3  text-[30px] py-3">pip install emox</p>
          </div>

        </div>
        <div className="border-l border-gray-300 h-80 mx-4"></div>
        <div className="bg-yellow-600 text-neutral-900  text-[20px] px-20 py-10 mx-20">
Usecase:
          <div className="bg-yellow-700 px-10 ">
<p>
         1.  from emox import pred
</p>
        <div class="border-t border-neutral-900 my-3"></div>



          <p>2. emotion ="I am sad"</p>

        <div class="border-t border-neutral-900 my-3"></div>


          <p>3. print(pred(emotion))</p>

        </div>
</div>
      </div>


    </>
  )
}

export default App
