import React, { useState } from 'react';
import { IconFive, IconFour, IconOne, IconSix, IconThree, IconTwo } from '../../icons';
import Nav from '../Nav/Nav';
import one from '../../images/mobile/1.png'
import two from '../../images/mobile/2.png'
import three from '../../images/mobile/3.png'
import four from '../../images/mobile/4.png'
import five from '../../images/mobile/5.png'
import six from '../../images/mobile/6.png'
const AnimationMobile = ({switchPage, setSwitchPage, setMobileMenu}) => {
    const [showAnimateItem, setAnimateItem] = useState(true)
    return (
        <div id="">
            <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} setMobileMenu={setMobileMenu} setAnimateItem={setAnimateItem}/>
            <div className={`mt-20 ${!showAnimateItem && 'hidden'}`}>
                <div className='px-5'>
                    <div className='flex items-center gap-3'>
                        {/* <IconOne/> */}
                        <img src={one}/>
                        <p onClick={() => {
                            setSwitchPage("home");
                            setMobileMenu(false);   
                        }} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>HOME</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src={two}/>
                        <p onClick={() => setSwitchPage("about")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>ABOUT</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src={three}/>
                        <p onClick={() => setSwitchPage("milestone")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>MILESTONES</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src={four}/>
                        <p onClick={() => setSwitchPage("contribution")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>CONTRIBUTION</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src={five}/>
                        <p onClick={() => setSwitchPage("gellary")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>MORE</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <img src={six}/>
                        <p onClick={() => setSwitchPage("contact me")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>CONTACT US</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AnimationMobile;