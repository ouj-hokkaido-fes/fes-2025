import './global.css';
import './index.css';

function Contact(){
    return(
        <>
        <div className='m-3'>
            <h3 className='text-xl font-bold font-mplus lg:text-4xl
                    md:text-4xl sm:text-5xl'>お問い合わせ</h3>
            
            <hr className='mt-2 mb-8 border-gray-300'></hr>
            <div className='ml-0 p-5 lg: text-bold bg-darkgreen text-glay obj-shadow rounded-md '>
                <span className='mb-23'>
                    <p className='font-bold text-xl text-center lg:text-left'>メール</p>
                    <p>oujhokkaido.bunkasai@gmail.com</p>
                </span><span>
                    <p className='font-bold text-xl text-center lg:text-left'>郵便</p>
                    <p><span>北海道札幌市北区 北17条西8丁目</span>
                        <span>北海道大学情報教育館 5F</span>
                        <span>放送大学北海道学習センター</span>
                        <span>文化祭実行委員会</span></p>
                </span>
            </div>
        </div>
        </>
    )
}

export default Contact;