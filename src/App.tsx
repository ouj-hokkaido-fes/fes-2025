import './global.css';
import './index.css';
import './title.css';
import {useState, useEffect} from "react";

type titleProps = {
  basetime: Date;
}


//let counter = [0,0,0,0];

function App({basetime}:titleProps) {

  const [diff, calcdiff] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      calcdiff(diff => diff = basetime.getTime() - new Date().getTime())
    }, 1000);
    return () => clearInterval(interval);
  }, );



   
  return (
    <>
    <div>
      <div className="m-3 font-bold">
        <h1 className="text-glay text-xl lg:text-4xl mb-2  md:text-4xl sm:text-5xl">放送大学</h1>
        <div className='flex flex-row title-text'>
          <h2 className="lg:6xl ml-5 text-xl md:text-5xl sm:text-4xl">北海道学習センター 
            <span className="text-qgreen">文化祭</span></h2>
          <h2 className=' ml-2 my-auto lg:6xl text-xl md:text-5xl sm:text-4xl'>2025</h2>
        </div>
      </div>
      <div className="mx-30 mt-5 ml-10 text-center justify-center lg:6xl md:text-4xl sm:text-4xl text-nowrap">
          <p className='text-xl  lg:text-4xl sd:text-xl'>まであと</p>
          <div className='flex flex-row justify-center text-2xl font-bold
              mt-5 lg:text-3xl md:ml-15 text-3xl sd:text-2xl'>
                
            <p className=''>
              <span className='font-ubuntu text-3xl
              lg:text-5xl mx-1 md:text-3xl sd:text-3xl'
              >0</span>日</p>
            <p><span className='font-ubuntu text-3xl
            lg:text-5xl mx-1 md:text-3xl sd:text-3xl'
            >0</span>時間</p>

          </div><div className="flex flex-row justify-center text-2xl font-bold
              mt-2 lg:text-3xl mb-2  md:ml-15 text-3xl sd:text-2xl">

            <p><span className='font-ubuntu text-3xl
            lg:text-5xl mx-1 md:text-3xl sd:text-3xl'
            >0</span>分</p>
            <p><span className='font-ubuntu text-3xl
            lg:text-5xl mx-1 md:text-3xl sd:text-3xl'
            >0</span>秒</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
