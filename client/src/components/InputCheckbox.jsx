import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FaqAccordion from './FaqAccordion';


const InputCheckbox = () => {
    return (
        <>

            <div class="inline-flex items-center">
                <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="checkbox"
                    data-ripple-dark="false"
                >
                    <input
                        type="checkbox"
                        class=" before:content[''] hover:before:opacity-0 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black"
                        id="checkbox"
                        checked
                    />
                    <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </label>
            </div>
        </>
    )
}

export default InputCheckbox