import PFP from '../../public/theo.webp';
import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className='relative'>
            <div className="grid grid-cols-3 gap-5  bg-white shadow-lg rounded-lg px-4 py-6">
                <Image alt="Theo.jpg" src={PFP} width={200} height={200} className='rounded-full'></Image>
                <div className="bg-gray col-span-2">
                    <h2 className="text-gray-900 text-lg py-2 font-semibold">Theo Urban</h2>

                    <p className="text-gray-600"> Learner / Leader / Runner </p>
                    <p className="text-gray-600"> Carnegie Mellon University AI Major</p>
                    <p className="text-gray-600"> Director of ScottyLabs' Labrador Committee</p>
                    <p className="text-gray-600"> 15-281 Teaching Assistant</p>
                    <div className="flex mt-2">
                        <a href="mailto:tsurban@andrew.cmu.edu" className="text-indigo-700">Email</a>
                    </div>
                </div>
                <div className="bg-gray col-span-3">
                    Hello! I'm Theo Urban, a student at Carnegie Mellon University studying Artificial Intelligence. 
                    I'm passionate about the power of the internet to solve problems, and endlessly intrigued by CS theory, math, and society.
                </div>
            </div>
        </div>
    );
}
export default ProfileCard;