import './global.css';
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
        <h1 className="text-textblack mb-4 md:text-4xl sm:text-3x1">放送大学</h1>
        <div className='flex flex-row text-qgreen'>
          <h2 className="md:text-5xl sm:text-5x1">北海道学習センター 文化祭</h2>
          <h2 className=' ml-2 my-auto md:text-5xl sm:text-5x1'>2025</h2>
        </div>
      </div>
      <div className="mx-30 my-10 font-bold text-5x1 sm:text-3x1">
          <p>文化祭まであと</p>
          <div className='flex flex-row'>
            <p className=''>{Math.floor(diff/86_400_000)}日</p>
            <p>{Math.floor((diff%86_400_000)/3_600_000)}時間</p>
          </div><div className="flex flex-row">
            <p>{Math.floor((diff%86_400_000%3_600_000)/60_000)}分</p>
            <p>{Math.floor((diff%86_400_000%3_600_000%60_000)/1_000)}秒</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
