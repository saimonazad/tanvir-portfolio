import React from 'react';
import { IconFive, IconFour, IconOne, IconSix, IconThree, IconTwo } from '../../icons';
import Nav from '../Nav/Nav';

const AnimationMobile = ({switchPage, setSwitchPage, setMobileMenu}) => {
    return (
        <div id="">
            <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} setMobileMenu={setMobileMenu}/>
            <div className='mt-20'>
                <div className='px-5'>
                    <div className='flex items-center gap-3'>
                        <IconOne/>
                        <p onClick={() => {
                            setSwitchPage("home");
                            setMobileMenu(false);   
                        }} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>HOME</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconTwo/>
                        <p onClick={() => setSwitchPage("about")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>ABOUT</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconThree/>
                        <p onClick={() => setSwitchPage("milestone")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>PROFESSIONAL HISTORY</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconFour/>
                        <p onClick={() => setSwitchPage("contribution")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>CONTRIBUTION</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconFive/>
                        <p onClick={() => setSwitchPage("gellary")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>MORE</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconSix/>
                        <p onClick={() => setSwitchPage("contact me")} className='text-aboutSubtitle font-Poppins text-sm font-semibold cursor-pointer'>CONTACT US</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AnimationMobile;