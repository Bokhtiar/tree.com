import { PrimaryButton, WatchButton } from '../../components/button'
import { Images } from '../../utils/images'

export const Home = () => {
    return <>
        <section className='container my-6 md:my-24'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 my-auto">
                    <h2 className=' font-heading text-5xl text-primary text-center md:text-left'>TREE.COM</h2>
                    <p className='my-3 text-xl font-semibold leading-[20px] font-content text-justify'>This quote emphasizes the importance of taking action and planting trees for the benefit of the environment.</p>
                        <div className='flex items-center gap-4 justify-center md:justify-start'>
                            <PrimaryButton />
                            <WatchButton />
                        </div>
                </div>

                <div className="col-span-1 mt-6 md:mt-0">
                    <img src={Images.Banner} alt="" />
                </div>
            </div>
        </section>
    </>
}