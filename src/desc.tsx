import './global.css';
import './index.css';

import EventDesc from './eventdesc';


function Desc(){
    return(
        <>
        <div className='m-3'>
            <div className='my-5 lg:my-17'>
                <h3 className='text-xl font-bold font-mplus text-glay lg:text-4xl mb-1  md:text-4xl sm:text-5xl'>
                    開催期間 
                </h3>
                <div className=' lg:my-5'>
                <span className='lg:text-3xl'>
                    <p className='text-textblack ml-2 mb-5 lg:ml-15'>北海道学習センター: 9月19日(金) ~ 9月21日(日)</p>
                    <p className='text-textblack ml-2 lg:ml-15'>メタバースキャンパス: 9月19日(金) ~ 10月中旬</p>
                </span>
                </div>
            </div>

            <h3 className='text-xl font-bold font-mplus text-glay lg:text-4xl mb-2  md:text-4xl sm:text-5xl'>
                テーマ
            </h3>
            <div className='font-bold ml-2 lg:ml-15'>
                <span className='text-textblack text-lg lg:text-4xl/14 md: text-3xl'>
                    <p>キャンパスへ出かけよう！</p>
                    <p>新しい仲間、まだ知らない自分に会いに。</p>
                    <p className='text-lg m-0 lg: ml-15 md: text-4xl sm:text-lg'>Explore OUJ campus! Your new journey begins here.</p>
                </span>
            </div>
                <div className='mt-15'>
                    <h3 className='text-xl font-bold font-mplus text-glay lg:text-4xl mb-2 
                    md:text-4xl sm:text-5xl'>イベント</h3>
                    <hr className='mt-2 mb-8 border-gray-300'></hr>
                    <div className='mt-5 ml-0 lg:mt-5 bg-bggreen p-3 obj-shadow rounded-md'>
                            <h4 className='text-xl font-bold font-mplus text-glay lg:text-3xl mb-2 
                            md:text-4xl sm:text-4xl'>実会場でのイベント</h4>
                        <div className='ml-0 lg:ml-10'>
                            <span className='text-xl lg:text-2xl'>
                            <p>映画会</p>
                                <p>『型破りな教室』</p>
                            <p>講演会</p>
                                <p></p>
                            <p>作品展示</p>
                                <p></p>
                            <p>ステージ発表</p>
                            <p>バザー</p>
                            </span>
                        </div>
                    </div>
                    <div className='mt-5 ml-0 lg:mt-5 bg-bgblue p-3 obj-shadow rounded-md'>
                            <h4 className='text-xl font-bold font-mplus text-glay lg:text-3xl mb-2 
                            md:text-4xl sm:text-4xl'>メタバースキャンパスでのイベント</h4>
                        <div className='ml-0 lg:ml-10'>
                            <span className='text-xl lg:text-2xl'>
                            <p>講演会</p>
                            <p>読書会</p>
                            <p>自学発表 -自学発表サークル</p>
                            <p>作品展示</p>
                            </span>
                        </div>
                    </div>
                </div>
            <div>

            </div>
        </div>
        </>
    )
}

export default Desc;