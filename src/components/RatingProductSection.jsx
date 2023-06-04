import React from 'react'
import RatingProductSectionXl from './Sections/RatingProductSections/RatingProductSectionXl'

const RatingProductSection = () => {
  return (
    <>
    <RatingProductSectionXl stars={5} />
    <RatingProductSectionXl stars={4} />
    <RatingProductSectionXl stars={3} />
    </>
  )
}

export default RatingProductSection