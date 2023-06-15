import React from 'react'
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const ToolTip = ({ color }) => {
  return (
    <Tooltip placement="top" className="bg-white shadow-xl" content={
      <div className="w-80 px-2 py-3">
        <Typography color="black" className="text-xs font-medium">All 3 star items are tested and confirmed to operate like new. We grade our scratch and dent appliances based on their cosmetic appearance. These scores refer to how the appliance looks not how they function.</Typography>
        <Typography color="black" className="text-xs text-b3 font-medium">Learn More</Typography>
      </div>
    }>
      <InformationCircleIcon
        strokeWidth={2}
        className={`w-5 h-5 cursor-pointer ${color || 'text-b3'}`}
      />
    </Tooltip>

  )
}

export default ToolTip