import React from 'react'
import { useInView } from 'react-intersection-observer';

const IntersectionObserver = ({children,thresh}) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when it first becomes visible
        threshold:thresh
      });
  return (
    <div ref={ref}>{inView ? children : null}</div>
  )
}

export default IntersectionObserver