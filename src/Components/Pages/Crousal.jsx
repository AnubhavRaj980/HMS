import React, {useState,useRef} from 'react'
import image1 from '../../Images/logo.jpg'
import prev_arrow from '../../Images/pre_arrow.png'
import next_arrow from '../../Images/next_arrow.png'
import './Crousal.css'

const Crousal = () => {

    const crousal_item = [
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
        {
            image: image1,
            title1: 'Feeling lost',
            title2: 'Rescue Session',
            dur: '2-5 min'
        },
    ]

    const [showArrows, setShowArrows] = useState(false);
    const scrollContainer = useRef(null);
    //const scrollAmount = 210; // adjust this to match your card width

    // const scroll = (direction) => {
    //     if (direction === 'left') {
    //         scrollContainer.current.scrollLeft -= scrollAmount;
    //     } else {
    //         scrollContainer.current.scrollLeft += scrollAmount;
    //     }
    // }

    const scroll = (direction) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (direction === 'left') {
                scrollContainer.current.scrollLeft -= 12;
            } else {
                scrollContainer.current.scrollLeft += 12;
            }
            scrollAmount += 10;
            if(scrollAmount >= 180){
                window.clearInterval(slideTimer);
            }
        }, 23);
    }

    return (
        <>
            <div className='relative p-4' onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
                <div className='pt-4 border-gray-500 border-2 rounded-lg'>
                    <div ref={scrollContainer}  className='cardcontainer flex flex-nowrap overflow-x-scroll snap-x p-4'>
                        {crousal_item.map((item, i) => (
                            <div key={i} className='m-4 h-[260px] w-[176px] border-2 relative flex flex-col border-slate-700 rounded-lg shrink-0 bg-white'>
                                <div className=''>
                                    <img src={item.image} alt="" className='h-[170px] w-[180px]' />
                                </div>
                                <div className='font-semibold mx-2 mt-2 text-[15px]'>
                                    {item.title1}
                                </div>
                                <div className='text-[12px] mx-2'>
                                    {item.title2}
                                </div>
                                <div className='mx-2 mt-2 text-[13px]'>
                                    {item.dur}
                                </div>
                            </div>
                        ))}
                    </div>
                    {showArrows && (
                        <>
                            <img onClick={() => scroll('left')} src={prev_arrow} alt="prev_arrow" className='absolute top-[170px] 
                            left-[2rem] justify-center items-center rounded-full w-[40px] cursor-pointer bg-gray-100' />
                            <img onClick={() => scroll('right')} src={next_arrow} alt="next_arrow" className='absolute top-[170px] 
                            left-[90rem] justify-center items-center rounded-full w-[40px] cursor-pointer bg-gray-100'/>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Crousal