import React from 'react'
import { ExperienceProps } from "@/types"

interface ExperienceCardProps {
  events: ExperienceProps;
}

const ExperienceCard = ({events}: ExperienceCardProps) => {
  const {heading, subHeading, direction} = events;

  return (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex-1 pb-4 rounded-xl bg-zinc-800">
      <div className="px-16 py-4 text-2xl font-bold whitespace-nowrap bg-accent rounded-xl max-md:px-5">{heading}</div>
      <div className="text-sm text-gray-200 font-extralight mt-4 text-center">{subHeading}</div>
    </div>
  )
}

export default ExperienceCard