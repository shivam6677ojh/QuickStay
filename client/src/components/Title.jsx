import React from 'react'

const Title = ({ title, subTitle, align, font }) => {
    return (
        <div>
            <div
                className={`relative flex flex-col cursor-pointer justify-center items-center text-center p-6 rounded-xl bg-white shadow-lg transition-all duration-500 group hover:scale-105 ${align === "left" ? "md:items-start md:text-left" : ""
                    }`}
            >
                {/* Animated glowing border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white group-hover:animate-dash pointer-events-none"></div>

                <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"} text-black`}>
                    {title}
                </h1>

                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                    {subTitle}
                </p>
            </div>

        </div>
    )
}

export default Title