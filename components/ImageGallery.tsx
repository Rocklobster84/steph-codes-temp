import React from 'react'
import Image from 'next/image'
import { PhotoGalleryProps } from "@/types"

interface PhotoProps {
  photos: PhotoGalleryProps[];
}

const ImageGallery = ({ photos }: PhotoProps) => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-4 mt-8">
      {photos.map(({ src, alt }) => (
        <div
          key={src}
          className="min-w-[200px] sm:min-w-[200px] md:min-w-[200px] lg:min-w-[200px] rounded-lg shadow-lg dark:shadow-gray-700/50 relative"
          style={{ minHeight: '200px' }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-lg scale-100 hover:scale-125 transform transition-transform hover:z-50"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery