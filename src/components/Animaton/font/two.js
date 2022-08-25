import React from "react";

const SVGComponent = ({ color }) => (
  <svg width="62" height="87" viewBox="0 0 62 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_937_103)">
<path d="M25 28.8359H5.5C5 -3.16394 39 -2.75021 47.5 6.33598C62 21.836 55.5216 40.5655 30 60.836H56.5V77.336H5V62.336C25.8121 46.2595 33.3657 38.6611 36 28.8359C39.5 17.836 24 11.836 25 28.8359Z" fill={color ? '#787777' : ''}/>
<path d="M25 28.8359H5.5C5 -3.16394 39 -2.75021 47.5 6.33598C62 21.836 55.5216 40.5655 30 60.836H56.5V77.336H5V62.336C25.8121 46.2595 33.3657 38.6611 36 28.8359C39.5 17.836 24 11.836 25 28.8359Z" stroke="#2D3038" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_937_103" x="0" y="0" width="61.5" height="86.336" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_937_103"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_937_103" result="shape"/>
</filter>
</defs>
</svg>
);

export default SVGComponent;
