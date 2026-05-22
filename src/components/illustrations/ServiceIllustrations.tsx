/**
 * ServiceIllustrations
 * Clean flat-design SVG illustration components for each service,
 * plus a hero illustration and city illustration.
 * Brand colors: #16a34a (green), #111827 (dark gray), white, light grays.
 */

import { ReactElement } from "react"

interface IllustrationProps {
  className?: string
  width?: number | string
  height?: number | string
}

export function FurnitureRemovalIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Furniture removal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      <rect x="20" y="145" width="160" height="6" rx="3" fill="#d1fae5" />
      {/* Sofa body */}
      <rect x="40" y="100" width="120" height="45" rx="8" fill="#16a34a" />
      {/* Sofa back cushion */}
      <rect x="44" y="80" width="112" height="28" rx="6" fill="#15803d" />
      {/* Sofa cushions */}
      <rect x="48" y="104" width="48" height="32" rx="4" fill="#22c55e" />
      <rect x="104" y="104" width="48" height="32" rx="4" fill="#22c55e" />
      {/* Sofa legs */}
      <rect x="50" y="141" width="10" height="8" rx="2" fill="#111827" />
      <rect x="140" y="141" width="10" height="8" rx="2" fill="#111827" />
      {/* Sofa armrests */}
      <rect x="34" y="95" width="18" height="38" rx="6" fill="#15803d" />
      <rect x="148" y="95" width="18" height="38" rx="6" fill="#15803d" />
      {/* Removal arrow badge */}
      <circle cx="160" cy="55" r="18" fill="#111827" />
      <path d="M152 55 L166 55 M162 49 L168 55 L162 61" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function ApplianceRemovalIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Appliance removal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Refrigerator body */}
      <rect x="55" y="40" width="90" height="120" rx="8" fill="#111827" />
      <rect x="60" y="45" width="80" height="50" rx="5" fill="#1f2937" />
      <rect x="60" y="100" width="80" height="55" rx="5" fill="#1f2937" />
      <rect x="55" y="96" width="90" height="6" fill="#111827" />
      {/* Handle top */}
      <rect x="120" y="58" width="5" height="24" rx="2.5" fill="#16a34a" />
      {/* Handle bottom */}
      <rect x="120" y="108" width="5" height="24" rx="2.5" fill="#16a34a" />
      {/* Indicator lights */}
      <circle cx="72" cy="58" r="4" fill="#16a34a" />
      <circle cx="84" cy="58" r="4" fill="#4ade80" />
      {/* Feet */}
      <rect x="65" y="158" width="12" height="8" rx="2" fill="#374151" />
      <rect x="123" y="158" width="12" height="8" rx="2" fill="#374151" />
      {/* Removal arrow */}
      <circle cx="158" cy="52" r="17" fill="#16a34a" />
      <path d="M151 52 L165 52 M161 46 L167 52 L161 58" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function MattressDisposalIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mattress disposal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Mattress body */}
      <rect x="25" y="75" width="150" height="70" rx="10" fill="#16a34a" />
      <rect x="30" y="78" width="140" height="60" rx="8" fill="#22c55e" />
      {/* Quilting pattern */}
      <line x1="30" y1="108" x2="170" y2="108" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="70" y1="78" x2="70" y2="138" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="110" y1="78" x2="110" y2="138" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="150" y1="78" x2="150" y2="138" stroke="#16a34a" strokeWidth="1.5" />
      {/* Mattress edge */}
      <rect x="25" y="130" width="150" height="15" rx="0" fill="#15803d" />
      <rect x="25" y="140" width="150" height="5" rx="0" fill="#14532d" />
      {/* Floor */}
      <rect x="20" y="150" width="160" height="5" rx="2.5" fill="#d1fae5" />
      {/* Removal arrow */}
      <circle cx="155" cy="60" r="18" fill="#111827" />
      <path d="M147 60 L161 60 M157 54 L163 60 L157 66" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* X mark (no landfill) */}
      <circle cx="45" cy="60" r="14" fill="#dc2626" />
      <path d="M39 54 L51 66 M51 54 L39 66" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function GarageCleanoutIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Garage cleanout illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Floor */}
      <rect x="20" y="150" width="160" height="8" rx="3" fill="#d1fae5" />
      {/* Boxes bottom row */}
      <rect x="30" y="110" width="45" height="40" rx="4" fill="#111827" />
      <rect x="80" y="120" width="35" height="30" rx="4" fill="#374151" />
      <rect x="120" y="108" width="50" height="42" rx="4" fill="#111827" />
      {/* Boxes middle row */}
      <rect x="38" y="75" width="38" height="38" rx="4" fill="#374151" />
      <rect x="125" y="78" width="38" height="32" rx="4" fill="#374151" />
      {/* Top box */}
      <rect x="43" y="50" width="30" height="28" rx="4" fill="#1f2937" />
      {/* Box tape lines */}
      <line x1="30" y1="130" x2="75" y2="130" stroke="#16a34a" strokeWidth="2" />
      <line x1="52" y1="110" x2="52" y2="150" stroke="#16a34a" strokeWidth="2" />
      <line x1="38" y1="94" x2="76" y2="94" stroke="#16a34a" strokeWidth="2" />
      <line x1="57" y1="75" x2="57" y2="113" stroke="#16a34a" strokeWidth="2" />
      <line x1="43" y1="64" x2="73" y2="64" stroke="#16a34a" strokeWidth="2" />
      <line x1="58" y1="50" x2="58" y2="78" stroke="#16a34a" strokeWidth="2" />
      <line x1="120" y1="129" x2="170" y2="129" stroke="#16a34a" strokeWidth="2" />
      <line x1="145" y1="108" x2="145" y2="150" stroke="#16a34a" strokeWidth="2" />
      <line x1="125" y1="94" x2="163" y2="94" stroke="#16a34a" strokeWidth="2" />
      <line x1="144" y1="78" x2="144" y2="110" stroke="#16a34a" strokeWidth="2" />
      {/* Wrench icon */}
      <rect x="85" y="76" width="12" height="36" rx="4" fill="#6b7280" transform="rotate(30 91 94)" />
      <circle cx="80" cy="78" r="7" fill="none" stroke="#6b7280" strokeWidth="3" />
    </svg>
  )
}

export function EstateCleanoutIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Estate cleanout illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Ground */}
      <rect x="20" y="155" width="160" height="6" rx="3" fill="#d1fae5" />
      {/* House walls */}
      <rect x="45" y="100" width="110" height="60" rx="3" fill="#111827" />
      {/* Roof */}
      <polygon points="35,103 100,55 165,103" fill="#15803d" />
      <polygon points="38,103 100,58 162,103" fill="#16a34a" />
      {/* Door */}
      <rect x="85" y="120" width="30" height="40" rx="3" fill="#1f2937" />
      <circle cx="108" cy="141" r="3" fill="#16a34a" />
      {/* Windows */}
      <rect x="53" y="108" width="22" height="20" rx="3" fill="#4ade80" opacity="0.5" />
      <rect x="125" y="108" width="22" height="20" rx="3" fill="#4ade80" opacity="0.5" />
      {/* Box coming out */}
      <rect x="145" y="125" width="28" height="25" rx="3" fill="#374151" />
      <line x1="145" y1="137" x2="173" y2="137" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="159" y1="125" x2="159" y2="150" stroke="#16a34a" strokeWidth="1.5" />
      {/* Chair piece */}
      <rect x="148" y="100" width="20" height="26" rx="3" fill="#374151" />
      <rect x="144" y="122" width="28" height="5" rx="2" fill="#4b5563" />
      {/* Arrow out right */}
      <path d="M140 112 L160 112" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M154 106 L162 112 L154 118" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function ConstructionDebrisIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Construction debris removal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Hard hat */}
      <ellipse cx="100" cy="68" rx="48" ry="16" fill="#fbbf24" />
      <path d="M52 68 Q52 42 100 42 Q148 42 148 68 Z" fill="#f59e0b" />
      <rect x="44" y="66" width="112" height="10" rx="5" fill="#fbbf24" />
      {/* Hat stripe */}
      <path d="M60 50 Q100 44 140 50" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
      {/* Rubble pile - bottom row */}
      <rect x="30" y="130" width="35" height="18" rx="3" fill="#6b7280" />
      <rect x="68" y="133" width="30" height="15" rx="3" fill="#9ca3af" />
      <rect x="100" y="128" width="40" height="20" rx="3" fill="#6b7280" />
      <rect x="143" y="131" width="27" height="17" rx="3" fill="#9ca3af" />
      {/* Second row */}
      <rect x="44" y="115" width="32" height="17" rx="3" fill="#9ca3af" />
      <rect x="80" y="112" width="38" height="18" rx="3" fill="#6b7280" />
      <rect x="122" y="114" width="28" height="17" rx="3" fill="#9ca3af" />
      {/* Top bits */}
      <rect x="60" y="100" width="25" height="14" rx="2" fill="#6b7280" />
      <rect x="90" y="97" width="30" height="16" rx="2" fill="#9ca3af" />
      <rect x="124" y="101" width="20" height="13" rx="2" fill="#6b7280" />
      {/* Floor */}
      <rect x="20" y="148" width="160" height="6" rx="3" fill="#d1fae5" />
      {/* Brick texture lines */}
      <line x1="30" y1="139" x2="65" y2="139" stroke="#4b5563" strokeWidth="0.75" />
      <line x1="100" y1="138" x2="140" y2="138" stroke="#4b5563" strokeWidth="0.75" />
    </svg>
  )
}

export function YardWasteRemovalIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yard waste removal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Ground */}
      <rect x="20" y="152" width="160" height="6" rx="3" fill="#d1fae5" />
      {/* Pile of leaves/brush */}
      <ellipse cx="100" cy="148" rx="70" ry="14" fill="#15803d" />
      <ellipse cx="100" cy="140" rx="62" ry="18" fill="#16a34a" />
      <ellipse cx="95" cy="128" rx="50" ry="18" fill="#22c55e" />
      <ellipse cx="105" cy="118" rx="40" ry="16" fill="#4ade80" />
      {/* Branch */}
      <line x1="60" y1="148" x2="90" y2="100" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
      <line x1="90" y1="100" x2="75" y2="75" stroke="#374151" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="100" x2="108" y2="80" stroke="#374151" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="75" y1="75" x2="65" y2="58" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="75" y1="75" x2="82" y2="60" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaves on pile */}
      <ellipse cx="75" cy="130" rx="12" ry="8" fill="#15803d" transform="rotate(-20 75 130)" />
      <ellipse cx="115" cy="125" rx="10" ry="7" fill="#15803d" transform="rotate(15 115 125)" />
      <ellipse cx="135" cy="135" rx="11" ry="7" fill="#14532d" transform="rotate(-10 135 135)" />
      <ellipse cx="55" cy="138" rx="10" ry="6" fill="#14532d" transform="rotate(25 55 138)" />
      {/* Removal arrow */}
      <circle cx="158" cy="60" r="18" fill="#111827" />
      <path d="M150 60 L164 60 M160 54 L166 60 L160 66" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function CommercialJunkRemovalIllustration({
  className,
  width = 200,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Commercial junk removal illustration"
    >
      <circle cx="100" cy="100" r="90" fill="#f0fdf4" />
      {/* Ground */}
      <rect x="20" y="155" width="160" height="6" rx="3" fill="#d1fae5" />
      {/* Office building */}
      <rect x="30" y="65" width="75" height="95" rx="4" fill="#111827" />
      {/* Windows row 0 */}
      <rect x="38" y="73" width="14" height="14" rx="2" fill="#374151" />
      <rect x="60" y="73" width="14" height="14" rx="2" fill="#374151" />
      <rect x="82" y="73" width="14" height="14" rx="2" fill="#374151" />
      {/* Windows row 1 */}
      <rect x="38" y="93" width="14" height="14" rx="2" fill="#4ade80" />
      <rect x="60" y="93" width="14" height="14" rx="2" fill="#374151" />
      <rect x="82" y="93" width="14" height="14" rx="2" fill="#374151" />
      {/* Windows row 2 */}
      <rect x="38" y="113" width="14" height="14" rx="2" fill="#374151" />
      <rect x="60" y="113" width="14" height="14" rx="2" fill="#374151" />
      <rect x="82" y="113" width="14" height="14" rx="2" fill="#4ade80" />
      {/* Windows row 3 */}
      <rect x="38" y="133" width="14" height="14" rx="2" fill="#374151" />
      <rect x="60" y="133" width="14" height="14" rx="2" fill="#374151" />
      <rect x="82" y="133" width="14" height="14" rx="2" fill="#374151" />
      {/* Building entrance */}
      <rect x="55" y="130" width="25" height="30" rx="2" fill="#1f2937" />
      {/* Truck cargo box */}
      <rect x="108" y="95" width="62" height="55" rx="3" fill="#15803d" />
      <rect x="113" y="100" width="52" height="45" rx="2" fill="#166534" />
      {/* Truck cab */}
      <rect x="108" y="108" width="50" height="42" rx="5" fill="#16a34a" />
      {/* Windshield */}
      <rect x="110" y="111" width="22" height="16" rx="3" fill="#bfdbfe" opacity="0.8" />
      {/* Truck bottom bar */}
      <rect x="108" y="147" width="62" height="5" rx="2" fill="#14532d" />
      {/* Truck wheels */}
      <circle cx="125" cy="155" r="10" fill="#1f2937" />
      <circle cx="125" cy="155" r="5" fill="#6b7280" />
      <circle cx="155" cy="155" r="10" fill="#1f2937" />
      <circle cx="155" cy="155" r="5" fill="#6b7280" />
      {/* Arrow from building to truck */}
      <path d="M105 130 L112 130" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3,2" strokeLinecap="round" />
      <path d="M108 125 L114 130 L108 135" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function HeroIllustration({
  className,
  width = 400,
  height = 300,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Junk removal truck and crew illustration"
    >
      {/* Ground */}
      <rect x="0" y="240" width="400" height="60" fill="#14532d" opacity="0.4" />
      <rect x="0" y="243" width="400" height="4" fill="#16a34a" opacity="0.6" />
      {/* Road markings */}
      <rect x="30" y="249" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      <rect x="100" y="249" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      <rect x="170" y="249" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      <rect x="240" y="249" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      <rect x="310" y="249" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      {/* Truck cargo body */}
      <rect x="100" y="130" width="220" height="115" rx="6" fill="#15803d" />
      <rect x="106" y="136" width="208" height="103" rx="4" fill="#166534" />
      {/* Truck cab */}
      <rect x="280" y="155" width="90" height="90" rx="8" fill="#16a34a" />
      {/* Windshield */}
      <rect x="290" y="163" width="55" height="38" rx="5" fill="#bfdbfe" opacity="0.8" />
      {/* Side window */}
      <rect x="340" y="163" width="25" height="30" rx="3" fill="#86efac" opacity="0.6" />
      {/* Cab bottom trim */}
      <rect x="280" y="205" width="90" height="8" rx="2" fill="#14532d" />
      {/* Truck wheels */}
      <circle cx="155" cy="248" r="22" fill="#111827" />
      <circle cx="155" cy="248" r="12" fill="#374151" />
      <circle cx="155" cy="248" r="5" fill="#6b7280" />
      <circle cx="215" cy="248" r="22" fill="#111827" />
      <circle cx="215" cy="248" r="12" fill="#374151" />
      <circle cx="215" cy="248" r="5" fill="#6b7280" />
      <circle cx="305" cy="248" r="22" fill="#111827" />
      <circle cx="305" cy="248" r="12" fill="#374151" />
      <circle cx="305" cy="248" r="5" fill="#6b7280" />
      <circle cx="355" cy="248" r="22" fill="#111827" />
      <circle cx="355" cy="248" r="12" fill="#374151" />
      <circle cx="355" cy="248" r="5" fill="#6b7280" />
      {/* Truck logo banner */}
      <rect x="115" y="150" width="150" height="30" rx="4" fill="#16a34a" opacity="0.7" />
      <rect x="125" y="157" width="130" height="16" rx="3" fill="#4ade80" opacity="0.4" />
      {/* Items on truck bed */}
      <rect x="120" y="110" width="50" height="30" rx="4" fill="#374151" />
      <line x1="120" y1="125" x2="170" y2="125" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="145" y1="110" x2="145" y2="140" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="180" y="105" width="40" height="35" rx="4" fill="#4b5563" />
      <rect x="230" y="112" width="50" height="28" rx="4" fill="#374151" />
      {/* Person 1 */}
      <rect x="60" y="178" width="22" height="45" rx="8" fill="#16a34a" />
      <circle cx="71" cy="168" r="13" fill="#fde68a" />
      <ellipse cx="71" cy="161" rx="15" ry="6" fill="#fbbf24" />
      <path d="M56 161 Q71 152 86 161 Z" fill="#f59e0b" />
      <rect x="48" y="180" width="14" height="8" rx="4" fill="#16a34a" transform="rotate(-30 48 184)" />
      <rect x="80" y="178" width="14" height="8" rx="4" fill="#16a34a" transform="rotate(20 80 182)" />
      <rect x="60" y="218" width="10" height="28" rx="5" fill="#1f2937" />
      <rect x="72" y="218" width="10" height="28" rx="5" fill="#1f2937" />
      <rect x="57" y="243" width="14" height="7" rx="3" fill="#111827" />
      <rect x="69" y="243" width="14" height="7" rx="3" fill="#111827" />
      {/* Person 2 */}
      <rect x="20" y="175" width="22" height="45" rx="8" fill="#166534" />
      <circle cx="31" cy="165" r="13" fill="#fde68a" />
      <ellipse cx="31" cy="158" rx="15" ry="6" fill="#fbbf24" />
      <path d="M16 158 Q31 149 46 158 Z" fill="#f59e0b" />
      <rect x="8" y="177" width="14" height="8" rx="4" fill="#166534" transform="rotate(-20 8 181)" />
      <rect x="40" y="175" width="14" height="8" rx="4" fill="#166534" transform="rotate(30 40 179)" />
      <rect x="20" y="215" width="10" height="30" rx="5" fill="#1f2937" />
      <rect x="32" y="215" width="10" height="30" rx="5" fill="#1f2937" />
      <rect x="17" y="241" width="14" height="7" rx="3" fill="#111827" />
      <rect x="29" y="241" width="14" height="7" rx="3" fill="#111827" />
      {/* Box being carried */}
      <rect x="5" y="155" width="28" height="22" rx="4" fill="#374151" />
      <line x1="5" y1="166" x2="33" y2="166" stroke="#16a34a" strokeWidth="1.5" />
      {/* Company name on truck */}
      <text x="145" y="170" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white" opacity="0.9">JUNK REMOVAL USA</text>
    </svg>
  )
}

export function CityIllustration({
  className,
  width = 400,
  height = 200,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="City skyline illustration"
    >
      {/* Ground */}
      <rect x="0" y="170" width="400" height="30" fill="#14532d" opacity="0.5" />
      {/* Building 1 - tallest center */}
      <rect x="155" y="40" width="50" height="135" rx="3" fill="#111827" />
      <rect x="163" y="50" width="12" height="14" rx="2" fill="#374151" />
      <rect x="181" y="50" width="12" height="14" rx="2" fill="#4ade80" />
      <rect x="163" y="70" width="12" height="14" rx="2" fill="#374151" />
      <rect x="181" y="70" width="12" height="14" rx="2" fill="#374151" />
      <rect x="163" y="90" width="12" height="14" rx="2" fill="#4ade80" />
      <rect x="181" y="90" width="12" height="14" rx="2" fill="#374151" />
      <rect x="163" y="110" width="12" height="14" rx="2" fill="#374151" />
      <rect x="181" y="110" width="12" height="14" rx="2" fill="#374151" />
      <rect x="163" y="130" width="12" height="14" rx="2" fill="#374151" />
      <rect x="181" y="130" width="12" height="14" rx="2" fill="#4ade80" />
      {/* Antenna */}
      <rect x="178" y="25" width="4" height="18" rx="2" fill="#374151" />
      <circle cx="180" cy="23" r="4" fill="#16a34a" />
      {/* Building 2 - left tall */}
      <rect x="80" y="70" width="40" height="105" rx="3" fill="#1f2937" />
      <rect x="87" y="80" width="10" height="14" rx="2" fill="#374151" />
      <rect x="103" y="80" width="10" height="14" rx="2" fill="#374151" />
      <rect x="87" y="102" width="10" height="14" rx="2" fill="#374151" />
      <rect x="103" y="102" width="10" height="14" rx="2" fill="#16a34a" />
      <rect x="87" y="124" width="10" height="14" rx="2" fill="#374151" />
      <rect x="103" y="124" width="10" height="14" rx="2" fill="#374151" />
      <rect x="87" y="146" width="10" height="14" rx="2" fill="#374151" />
      <rect x="103" y="146" width="10" height="14" rx="2" fill="#374151" />
      {/* Building 3 - right tall */}
      <rect x="245" y="75" width="45" height="100" rx="3" fill="#1f2937" />
      <rect x="252" y="85" width="11" height="14" rx="2" fill="#374151" />
      <rect x="269" y="85" width="11" height="14" rx="2" fill="#4ade80" />
      <rect x="252" y="106" width="11" height="14" rx="2" fill="#374151" />
      <rect x="269" y="106" width="11" height="14" rx="2" fill="#374151" />
      <rect x="252" y="127" width="11" height="14" rx="2" fill="#374151" />
      <rect x="269" y="127" width="11" height="14" rx="2" fill="#374151" />
      <rect x="252" y="148" width="11" height="14" rx="2" fill="#374151" />
      <rect x="269" y="148" width="11" height="14" rx="2" fill="#374151" />
      {/* Building 4 - far left short */}
      <rect x="25" y="100" width="35" height="75" rx="3" fill="#374151" />
      <rect x="33" y="108" width="20" height="12" rx="2" fill="#4b5563" />
      <rect x="33" y="128" width="20" height="12" rx="2" fill="#4b5563" />
      <rect x="33" y="148" width="20" height="12" rx="2" fill="#4b5563" />
      {/* Building 5 - far right short */}
      <rect x="315" y="95" width="38" height="80" rx="3" fill="#374151" />
      <rect x="322" y="103" width="22" height="12" rx="2" fill="#4b5563" />
      <rect x="322" y="123" width="22" height="12" rx="2" fill="#4b5563" />
      <rect x="322" y="143" width="22" height="12" rx="2" fill="#16a34a" />
      {/* Building 6 - left medium */}
      <rect x="35" y="120" width="48" height="55" rx="3" fill="#111827" />
      <rect x="42" y="128" width="10" height="13" rx="2" fill="#16a34a" />
      <rect x="56" y="128" width="10" height="13" rx="2" fill="#374151" />
      <rect x="70" y="128" width="10" height="13" rx="2" fill="#374151" />
      <rect x="42" y="148" width="10" height="13" rx="2" fill="#374151" />
      <rect x="56" y="148" width="10" height="13" rx="2" fill="#374151" />
      <rect x="70" y="148" width="10" height="13" rx="2" fill="#374151" />
      {/* Building 7 - right medium */}
      <rect x="310" y="115" width="48" height="60" rx="3" fill="#111827" />
      <rect x="317" y="123" width="10" height="13" rx="2" fill="#374151" />
      <rect x="331" y="123" width="10" height="13" rx="2" fill="#374151" />
      <rect x="345" y="123" width="10" height="13" rx="2" fill="#374151" />
      <rect x="317" y="143" width="10" height="13" rx="2" fill="#374151" />
      <rect x="331" y="143" width="10" height="13" rx="2" fill="#374151" />
      <rect x="345" y="143" width="10" height="13" rx="2" fill="#374151" />
      {/* Left palm tree */}
      <rect x="135" y="130" width="5" height="45" rx="2.5" fill="#374151" />
      <ellipse cx="120" cy="128" rx="18" ry="8" fill="#16a34a" transform="rotate(-20 120 128)" />
      <ellipse cx="140" cy="122" rx="18" ry="7" fill="#15803d" transform="rotate(10 140 122)" />
      <ellipse cx="152" cy="130" rx="16" ry="7" fill="#16a34a" transform="rotate(30 152 130)" />
      {/* Right palm tree */}
      <rect x="255" y="128" width="5" height="47" rx="2.5" fill="#374151" />
      <ellipse cx="243" cy="126" rx="16" ry="7" fill="#15803d" transform="rotate(-15 243 126)" />
      <ellipse cx="258" cy="120" rx="18" ry="8" fill="#16a34a" transform="rotate(5 258 120)" />
      <ellipse cx="272" cy="128" rx="17" ry="7" fill="#14532d" transform="rotate(25 272 128)" />
      {/* Green accent stripe */}
      <rect x="0" y="168" width="400" height="4" rx="0" fill="#16a34a" opacity="0.6" />
    </svg>
  )
}

/**
 * Map from service slug to illustration component.
 */
export const serviceIllustrationMap: Record<
  string,
  (props: IllustrationProps) => ReactElement
> = {
  "furniture-removal": FurnitureRemovalIllustration,
  "appliance-removal": ApplianceRemovalIllustration,
  "mattress-disposal": MattressDisposalIllustration,
  "garage-cleanout": GarageCleanoutIllustration,
  "estate-cleanout": EstateCleanoutIllustration,
  "construction-debris-removal": ConstructionDebrisIllustration,
  "yard-waste-removal": YardWasteRemovalIllustration,
  "commercial-junk-removal": CommercialJunkRemovalIllustration,
}
