import React from 'react'

const DownloadCSMobile = ({
    title,
    handleClick,
  }: {
    title: string;
    handleClick?: () => void;
  }) => {
    return (
    <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest 
                       uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 
                       transition duration-200"
            onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default DownloadCSMobile