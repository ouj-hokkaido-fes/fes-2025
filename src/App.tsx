import './global.css';
import './index.css';
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
        <h1 className="text-textblack text-xl lg:text-4xl mb-2  md:text-4xl sm:text-4xl">放送大学</h1>
        <div className='flex flex-row '>
          <h2 className="lg:6xl text-2xl md:text-5xl sm:text-4xl">北海道学習センター 
            <span className="text-qgreen">文化祭</span></h2>
          <h2 className=' ml-2 my-auto lg:6xl text-xl md:text-5xl sm:text-4xl'>2025</h2>
        </div>
      </div>
      <div className="mx-30 my-10 lg:6xl md:text-4xl sm:text-3xl">
          <p>文化祭まであと</p>
          <div className='flex flex-row ml-10 mt-5 md:ml-15'>
            <p className=''>
              <span>{Math.floor(diff/86_400_000)}</span>日</p>
            <p><span>{Math.floor((diff%86_400_000)/3_600_000)}</span>時間</p>
          </div><div className="flex flex-row ml-10 md:ml-15">
            <p><span>{Math.floor((diff%86_400_000%3_600_000)/60_000)}</span>分</p>
            <p><span>{Math.floor((diff%86_400_000%3_600_000%60_000)/1_000)}</span>秒</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
