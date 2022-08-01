import React from "react";

const SVGComponent = ({ color }) => (
    <svg width="46" height="88" viewBox="0 0 46 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_921_107)">
<path d="M7.80005 22.3V3.90002H38.6V77H18.1V22.3H7.80005Z" fill={`${color}`} fill-opacity="0.4" shape-rendering="crispEdges"/>
<path d="M6.30005 22.3V23.8H7.80005H16.6V77V78.5H18.1H38.6H40.1001V77V3.90002V2.40002H38.6H7.80005H6.30005V3.90002V22.3Z" stroke={`${color ? '#2E2793' : '#2D3038'}`} stroke-width="3" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_921_107" x="0.800049" y="0.900024" width="44.8" height="87.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
