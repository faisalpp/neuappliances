import React from 'react'
import RatingProductSectionXl from './Sections/RatingProductSections/RatingProductSectionXl'
import RatingProductSectionLg from './Sections/RatingProductSections/RatingProductSectionLg'

const RatingProductSection = () => {
  return (
    <>
    <RatingProductSectionXl stars={5} title={true} />
    <RatingProductSectionXl stars={4} title={false} />
    <RatingProductSectionXl stars={3} title={false} />
    <RatingProductSectionLg stars={5} title={true} />
    <RatingProductSectionLg stars={4} title={false} />
    <RatingProductSectionLg stars={3} title={false} />
    </>
  )
}

export default RatingProductSection