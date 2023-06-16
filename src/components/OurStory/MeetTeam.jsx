import React from 'react';

const AboutCeo = () => {

    const teams = [
        {
            image: 'Scott.png',
            name: 'Scott',
            about: 'Founder & CEO',
        },
        {
            image: 'Kenneth.png',
            name: 'Kenneth',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Declan.png',
            name: 'Declan',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Josh.png',
            name: 'Josh',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Conley.png',
            name: 'Conley',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Joseph.png',
            name: 'Joseph',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Javi.png',
            name: 'Javi',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Antonio.png',
            name: 'Antonio',
            about: 'Lorem Ipsum',
        },
    ]

    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 2xl:py-120px w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <h2 className='text-xl lg:text-2xl xl:text-[32px] mb-10 lg:mb-16 xl:mb-20 2xl:mb-120px font-bold text-center'>Meet The Team</h2>

                <div className='3xl:px-[60px] flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20'>
                    {teams.map((team, index) => (
                        <figure className="border border-transparent hover:border-b20 rounded-[20px] hover:shadow-s1 duration-300 p-5 w-[200px]">
                            <img className="w-40 h-40 rounded-full mx-auto" src={`team/${team.image}`} alt="" />
                            <div className="pt-[10px]">
                                <figcaption className="font-medium text-center">
                                    <div className='font-bold text-[22px] text-b18 mb-3'>
                                        {team.name}
                                    </div>
                                    <div className='text-b3'>
                                        {team.about}
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutCeo