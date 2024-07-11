import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import pic1 from '../assets/images/avatar-ali.png'
import pic2 from '../assets/images/avatar-richard.png'
import pic3 from '../assets/images/avatar-shanai.png'
import pic4 from '../assets/images/avatar-anisha.png'
import 'swiper/css';
import 'swiper/css/pagination';
import Button from './ui/Button';
import useIsMobile from '../hooks/useIsMobile';

const Testimony = () => {
    const {isMobile} = useIsMobile()
    const testimonyData = [
        {
            id: 1,
            name: 'Anisha Li',
            testimony : '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
            image: pic4
        },
        {
            id: 2,
            name: 'Ali Bravo',
            testimony : '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
            image: pic1
        },
        {
            id: 3,
            name: 'Richard Watts',
            testimony : '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
            image: pic2
        },
        {
            id: 4,
            name: 'Shanai Gough',
            testimony : '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
            image: pic3
        },
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index : number,className: string) {
        return `<span key=${index} class="${className}"></span>`;
        },
      };
  return (
    <section className="mt-10 mb-2">
        <h2 className="text-dark-blue font-bold text-3xl text-center">What they've said</h2>
        <div className='h-80 mt-16'>
            <Swiper
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 3}
                loop={true}
                pagination={isMobile? pagination : false}
                modules={[Pagination]}
                className='h-full w-full'
            >
                {testimonyData.map(testimony => (
                    <SwiperSlide key={testimony.id}>
                        <div className={`flex flex-col items-center gap-4 bg-very-pale-red rounded-lg mt-[50px] ${isMobile ? undefined : 'p-5'}`}>
                            <img src={testimony.image} alt={testimony.name} className="rounded-full w-16 h-16 relative -top-8 z-10" />
                            <h3 className="text-dark-blue font-bold">{testimony.name}</h3>
                            <p className="text-center text-dark-grayish-blue pb-4">{testimony.testimony}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <Button className='bg-bright-red text-white flex mx-auto my-6'>Get Started</Button>
    </section>
  )
}

export default Testimony
