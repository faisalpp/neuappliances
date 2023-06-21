import React from 'react'
import FaqAccordion from './FaqAccordion'

const ProductFaqSection = () => {
  return (
    <div className='flex flex-col items-center pb-7 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
      <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-5 text-center" >FREQUENTLY ASKED QUESTIONS</h5>
      <FaqAccordion title="What should I expect from a 3 star appliance?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Great question! 3-star rated appliance get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitlize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance.' />
      <FaqAccordion title="Does the appliance work?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Absolutely! We ensure any scratches or dents do not effect the functionality of the appliance by  thoroughly testing each product. Each appliance must pass our 100 point inspection before we will sell it. We also back all of our appliances with our Neu Shield 1-Year parts and labor warranty.' />
      <FaqAccordion title="Does the 3 star rating refer to the functionality of the product or how it looks?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='We grade our scratch and dent appliances stricly by their cosmetic appearance (how it looks). All appliances are thoroughly tested and guaranteed to function 100% just like new.' />
      <FaqAccordion title="Are the pictures included of the actual appliance I will receive?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Yes! The pictures included aboe are of the actual item you are purchasing.  What you see is exactly what you will receive!' />
      <FaqAccordion title="What kind of Cosmetic Cosmetic Rating are 3 star products in?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='3 Star Cosmetic Rating appliances may have multiple minor or more moderate scuffs, scratches or dents or other  moderate cosmetic blemishes resulting in an average "Scratch and dent" cosmetic appearance.' />
      <FaqAccordion title="Are 3 star appliances new or used?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Appliances are not considered "New" if removed from their box, classifying them as "Open Box". Open box appliances may or may not have been used previously by another user. All open box appliances have been "Used" by our staff to test and ensure proper functionality.' />
      <FaqAccordion title="Will my 3 Star appliance arrive in its original packaging?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Typically no, 3 Star appliances are open box: meaning the original packaging may have been opened or removed.' />
      <FaqAccordion title="Does my product include all accessories?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Great question. Any accessory, originally included on a new item, which is required to operate the appliance normally will be included. Original manufacturer instructions, packaging and accessories that are not required for the operation of the appliance may be missing. A refrigerator water filter will be included (or installed) only if the appliance requires a filter to dispense water or ice. If a refrigerator does not require a filter to dispense water or ice then one may or may not be included. Accessories like hinge adjustment tools, plugs, manuals, instructions or other accessories or items originally included that are not required for normal operation of the appliance may be missing. Installation connections like water lines or hoses, dryer vent tubes or clamps or other accessories to install the appliances are sold separately and not included.' />
      <FaqAccordion title="What happens if my appliance breaks?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='No worries we have your back! All of our products include a 1-year Neu Shield parts and labor warranty.' />
      <FaqAccordion title="What happens if the appliance shows up worse than I thought?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Not a problem! We offer free curbside returns during delivery. When our delivery team arrives, inspect your appliance and if you dont like it for any reason, we will return it for free for a 100% refund.' />
      <FaqAccordion title="Do you buy my old appliances?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='We do not purchase old appliances or offer trade-ins. Try selling it on craigslist or facebook marketplace.' />
      <FaqAccordion title="Will you haul-away appliances if I order appliances for delivery?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='We will haul away an equal number of your old appliances to what we are delivering. Example: if you purchased 2 appliances for delivery we will haul away 2 old appliances for you! Remember to have your old appliances uninstalled to qualify for free haul away.' />
      <FaqAccordion title="Will you take my old appliances if I pick up appliances from your store?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='We do not accept haul-away or old appliances at our store. We can only take your old appliances if we are already onsite for a delivery.' />
      <FaqAccordion title="Can I return my appliance after it is delivered or picked up?" parent='w-full md:w-2/3 mt-2 bg-b8 text-white px-4 py-3 lg:px-7 lg:py-6 rounded-xl border-none text-black h-auto' icon='text-xl w-fit text-black' textStyle='w-full font-bold text-md text-black' child='[&>p]:text-sm text-black font-normal' answer='Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' />
    </div>
  )
}

export default ProductFaqSection