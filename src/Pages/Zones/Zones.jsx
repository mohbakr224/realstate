import React from 'react'
import Hero from './../../Components/Hero/Hero';

import zone_image from './../../assets/images/zone_image.png';
import frame1 from './../../assets/images/zone_images/Frame 99.png';
import frame2 from './../../assets/images/zone_images/Frame 100.png';
import frame3 from './../../assets/images/zone_images/Frame 101.png';
import frame4 from './../../assets/images/zone_images/Frame 102.png';
import Simpleslider from '../../Components/Simple_slider/Simpleslider';

export default function Zones() {

    const images = [frame1, frame2, frame3, frame4];

    return (
        // <div>
        //     <Hero
        //         title="Destinations Defined by Distinction"
        //         image={zone_image}
        //         have_Button={false}
        //         text={`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center,
        //         explore our guide to the neighborhoods that mirror your ambition and your aesthetic.`}
        //     />

        //     {/* Image Strip Section */}
        //     <div className="mt-[80px] mb-[80px] px-6 md:px-10 lg:px-20">

        //         {/* Row 1 */}
        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        //             {images.map((img, index) => (
        //                 <div
        //                     key={`row1-${index}`}
        //                     className="h-[220px] rounded-xl 
        //                     hover:scale-[1.03] transition duration-300 cursor-pointer"
        //                 >
        //                     <img
        //                         src={img}
        //                         alt={`zone-row1-${index}`}
        //                         className="w-full h-full object-cover block"
        //                     />
        //                 </div>
        //             ))}
        //         </div>

        //         {/* Row 2 */}
        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        //             {images.map((img, index) => (
        //                 <div
        //                     key={`row2-${index}`}
        //                     className="h-[220px] rounded-xl
        //                     hover:scale-[1.03] transition duration-300 cursor-pointer"
        //                 >
        //                     <img
        //                         src={img}
        //                         alt={`zone-row2-${index}`}
        //                         className="w-full h-full object-cover block"
        //                     />
        //                 </div>
        //             ))}
        //         </div>

        //     </div>
        // </div>
        <Simpleslider/>
    )
}