import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"

const RelatedProducts = ({ title, buttonlink }) => {
    return (
        <div className='flex justify-between items-center gap-1'>
            <h3 className='font-semibold text-b18'>{title}</h3>
            <Link to={buttonlink} className='whitespace-nowrap flex items-center gap-1 hover:gap-2 duration-300 px-3 py-2 rounded-lg text-b3 font-medium text-sm 3xl:text-base border border-b3'>
                <span>View More</span>
                <AiOutlineArrowRight className="text-base" />
            </Link>
        </div>
    )
}

export default RelatedProducts