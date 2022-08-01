import React from "react";

const SVGComponent = ({ color }) => (
  <svg width="74" height="86" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_921_110)">
<path d="M7.1001 63V46.8L37.8001 3H59.3001V46H67.0001V63H59.3001V75H39.5001V63H7.1001ZM41.0001 25.1L27.2001 46H41.0001V25.1Z" fill={`${color}`} fill-opacity="0.4" shape-rendering="crispEdges"/>
<path d="M5.6001 63V64.5H7.1001H38.0001V75V76.5H39.5001H59.3001H60.8001V75V64.5H67.0001H68.5001V63V46V44.5H67.0001H60.8001V3V1.5H59.3001H37.8001H37.0197L36.5718 2.13905L5.87178 45.9391L5.6001 46.3267V46.8V63ZM39.5001 44.5H29.988L39.5001 30.094V44.5Z" stroke='#2D3038' stroke-width="3" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_921_110" x="0.100098" y="0" width="73.8999" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_921_110"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_921_110" result="shape"/>
</filter>
</defs>
</svg>

);

export default SVGComponent;
