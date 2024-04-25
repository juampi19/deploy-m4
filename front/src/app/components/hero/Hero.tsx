'use client'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export const Hero = () => {

  const images = [
    {
      original: "https://res.cloudinary.com/ds9gg46za/image/upload/v1713462373/fy9ztigdlozwlqhcwyfr.jpg",
      size: '2920px'
    },
    {
      original: "https://res.cloudinary.com/ds9gg46za/image/upload/v1713462373/dwejarqwyokusopimfsi.jpg"

    }
  ]

  return (
    <div className='max-w-[85vw] mx-auto'>
      <ImageGallery 
        items={images}
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay
        slideInterval={5000}

      />
    </div>
  )
}
