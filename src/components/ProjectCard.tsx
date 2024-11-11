import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type projectProps = {
    title: string,
    description: ReactElement,
    image: StaticImageData,
    link: string,
}

const ProjectCard = ({title, description, image, link}: projectProps) => {
    return (
        <div className='relative'>
            <div className="grid grid-cols-2 bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-gray-900 text-lg py-2 font-semibold"><a href={link}>{title}</a></h2> 
            <div className="bg-gray col-span-1 justify-items-end">
                <Image src={image} alt={title} className='rounded-lg h-10 w-10 ' />
            </div>
                <div className="bg-gray col-span-2">
                    {description}    
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;