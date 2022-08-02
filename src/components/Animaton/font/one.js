import React from "react";

const SVGComponent = ({ color }) => (
    <svg width="45" height="89" viewBox="0 0 45 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_921_107)">
<path d="M7 21.8782V3H37.8V78H17.3V21.8782H7Z" fill={color} fill-opacity="0.4" shape-rendering="crispEdges"/>
<path d="M5.5 21.8782V23.3782H7H15.8V78V79.5H17.3H37.8H39.3V78V3V1.5H37.8H7H5.5V3V21.8782Z" stroke="#2D3038" stroke-width="3" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_921_107" x="0" y="0" width="44.8" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_921_107"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_921_107" result="shape"/>
</filter>
</defs>
</svg>

);

export default SVGComponent;
