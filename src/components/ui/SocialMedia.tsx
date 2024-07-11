
import fbIcon from '../../assets/images/icon-facebook.svg'
import ytIcon from '../../assets/images/icon-youtube.svg'
import twIcon from '../../assets/images/icon-twitter.svg'
import pinIcon from '../../assets/images/icon-pinterest.svg'
import instIcon from '../../assets/images/icon-instagram.svg'

const SocialMedia = () => {
    const socialIcons = [
        {
            id: 1,
            icon: fbIcon,
            alt: 'facebook',
            url: "google.com"
        },
        {
            id: 2,
            icon: ytIcon,
            alt: 'youtube',
            url: "google.com"
        },
        {
            id: 3,
            icon: twIcon,
            alt: 'twitter',
            url: "google.com"
        },
        {
            id: 4,
            icon: pinIcon,
            alt: 'pinterest',
            url: "google.com"
        },
        {
            id: 5,
            icon: instIcon,
            alt: 'instagram',
            url: "google.com"
        },
    ]
  return (
    <div className='flex gap-2 justify-evenly mt-8 my-10'>
    {socialIcons.map((icon) => (
      <a key={icon.id} href={icon.url} target="_blank" rel="noreferrer">
        <img src={icon.icon} alt={icon.alt} className='w-7' />
      </a>
    ))}
  </div>
  )
}

export default SocialMedia
