import React, { useEffect, useState } from 'react';
import { GetTeamMember } from '../../api/frontEnd'

const AboutCeo = () => {

    const teams = [
        {
            image: 'Scott.webp',
            name: 'Scott',
            about: 'Founder & CEO',
        },
        {
            image: 'Kenneth.webp',
            name: 'Kenneth',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Declan.webp',
            name: 'Declan',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Josh.webp',
            name: 'Josh',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Conley.webp',
            name: 'Conley',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Joseph.webp',
            name: 'Joseph',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Javi.webp',
            name: 'Javi',
            about: 'Lorem Ipsum',
        },
        {
            image: 'Antonio.webp',
            name: 'Antonio',
            about: 'Lorem Ipsum',
        },
    ]

    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)

    const GetMembers = async () => {
        setLoading(true)
        const res = await GetTeamMember();
        console.log(res)
        if (res.status === 200) {
            setLoading(false)
            setMembers(res.data.members)
        } else {
            setLoading(false)
            setMembers([])
        }
    }

    useEffect(() => {
        GetMembers()
    }, [])

    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 2xl:py-120px w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <h2 className='text-2xl xl:text-[32px] mb-10 lg:mb-16 xl:mb-20 2xl:mb-120px font-bold text-center'>Meet The Team</h2>

                <div className='3xl:px-[60px] grid grid-cols-2 meetteam md:flex flex-wrap justify-center 3xl:justify-start gap-x-2 gap-y-10 md:gap-10 3xl:gap-20'>
                    {members.map((team, index) => (
                        <figure key={index} className="border border-transparent hover:border-b20 rounded-[20px] hover:shadow-s1 duration-300 p-5 w-[150px] md:w-[200px]">
                            <img className="w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto" src={team.image} alt="" />
                            <div className="pt-[10px]">
                                <figcaption className="font-medium text-center">
                                    <h3 className='font-bold md:text-[22px] text-b18 mb-3'>
                                        {team.name}
                                    </h3>
                                    <span className='block text-b3 maxmd:text-xs'>
                                        {team.designation}
                                    </span>
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