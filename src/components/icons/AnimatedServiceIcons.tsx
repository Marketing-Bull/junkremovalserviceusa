import React from "react"

interface IconProps {
  size?: number
  className?: string
}

/* ─────────────────────────────────────────────
   1. FurnitureRemovalIcon  (prefix: fri-)
───────────────────────────────────────────── */
export function FurnitureRemovalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Whole-icon float */}
        <animateTransform
          xlinkHref="#fri-group"
          attributeName="transform"
          type="translate"
          values="0,0;0,-6;0,0"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
        />
        <style>{`
          @keyframes fri-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes fri-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes fri-cushion-a { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
          @keyframes fri-cushion-b { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
          @keyframes fri-arrow { 0%,100%{opacity:0.5;transform:translateY(0)} 50%{opacity:1;transform:translateY(-3px)} }
          .fri-root { animation: fri-float 3s ease-in-out infinite; }
          .fri-shadow-el { animation: fri-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .fri-cushion-a { animation: fri-cushion-a 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .fri-cushion-b { animation: fri-cushion-b 2s ease-in-out 0.35s infinite; transform-box: fill-box; transform-origin: center; }
          .fri-arrow { animation: fri-arrow 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      {/* Drop shadow ellipse */}
      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="fri-shadow-el" />

      <g className="fri-root">
        {/* Green circle background */}
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Sofa backrest */}
        <rect x="20" y="46" width="60" height="18" rx="4" fill="white" />
        {/* Sofa seat */}
        <rect x="22" y="62" width="56" height="10" rx="3" fill="#d1fae5" />
        {/* Left arm */}
        <rect x="18" y="54" width="8" height="16" rx="3" fill="white" />
        {/* Right arm */}
        <rect x="74" y="54" width="8" height="16" rx="3" fill="white" />
        {/* Legs */}
        <rect x="28" y="72" width="4" height="5" rx="1" fill="white" />
        <rect x="68" y="72" width="4" height="5" rx="1" fill="white" />

        {/* Seat cushion A */}
        <rect x="24" y="54" width="24" height="10" rx="3" fill="#bbf7d0" className="fri-cushion-a" />
        {/* Seat cushion B */}
        <rect x="52" y="54" width="24" height="10" rx="3" fill="#bbf7d0" className="fri-cushion-b" />

        {/* Up arrow above sofa */}
        <g className="fri-arrow">
          {/* Arrow stem */}
          <line x1="50" y1="44" x2="50" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Arrowhead chevron */}
          <polyline points="44,41 50,35 56,41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   2. ApplianceRemovalIcon  (prefix: ari-)
───────────────────────────────────────────── */
export function ApplianceRemovalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes ari-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes ari-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes ari-door { 0%,100%{transform:scaleX(1)} 45%,55%{transform:scaleX(0.05)} }
          @keyframes ari-flake-a { 0%{opacity:0;transform:translateY(0)} 30%{opacity:1} 100%{opacity:0;transform:translateY(-14px)} }
          @keyframes ari-flake-b { 0%{opacity:0;transform:translateY(0)} 30%{opacity:1} 100%{opacity:0;transform:translateY(-14px)} }
          @keyframes ari-flake-c { 0%{opacity:0;transform:translateY(0)} 30%{opacity:1} 100%{opacity:0;transform:translateY(-14px)} }
          .ari-root { animation: ari-float 3s ease-in-out infinite; }
          .ari-shadow-el { animation: ari-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .ari-door { animation: ari-door 4s ease-in-out infinite; transform-box: fill-box; transform-origin: left center; }
          .ari-flake-a { animation: ari-flake-a 4s ease-in-out 0.8s infinite; transform-box: fill-box; transform-origin: center; }
          .ari-flake-b { animation: ari-flake-b 4s ease-in-out 1.2s infinite; transform-box: fill-box; transform-origin: center; }
          .ari-flake-c { animation: ari-flake-c 4s ease-in-out 1.6s infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="ari-shadow-el" />

      <g className="ari-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Fridge body */}
        <rect x="28" y="22" width="44" height="58" rx="4" fill="white" />
        {/* Divider line (freezer/fridge) */}
        <line x1="28" y1="44" x2="72" y2="44" stroke="#16a34a" strokeWidth="2" />
        {/* Handle top */}
        <rect x="67" y="26" width="4" height="12" rx="2" fill="#d1fae5" />
        {/* Handle bottom */}
        <rect x="67" y="48" width="4" height="16" rx="2" fill="#d1fae5" />

        {/* Freezer door overlay (animates scaleX) */}
        <rect x="29" y="23" width="42" height="20" rx="3" fill="#bbf7d0" className="ari-door" />

        {/* Snowflakes inside fridge area (below divider) */}
        {/* Flake A */}
        <g className="ari-flake-a">
          <line x1="38" y1="65" x2="38" y2="73" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="69" x2="42" y2="69" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="35.2" y1="66.2" x2="40.8" y2="71.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40.8" y1="66.2" x2="35.2" y2="71.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* Flake B */}
        <g className="ari-flake-b">
          <line x1="50" y1="60" x2="50" y2="68" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="46" y1="64" x2="54" y2="64" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="47.2" y1="61.2" x2="52.8" y2="66.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="52.8" y1="61.2" x2="47.2" y2="66.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* Flake C */}
        <g className="ari-flake-c">
          <line x1="62" y1="65" x2="62" y2="73" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="58" y1="69" x2="66" y2="69" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="59.2" y1="66.2" x2="64.8" y2="71.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="64.8" y1="66.2" x2="59.2" y2="71.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   3. MattressDisposalIcon  (prefix: mdi-)
───────────────────────────────────────────── */
export function MattressDisposalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes mdi-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes mdi-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes mdi-z-a { 0%{opacity:0;transform:translateY(0)} 20%{opacity:1} 100%{opacity:0;transform:translateY(-16px)} }
          @keyframes mdi-z-b { 0%{opacity:0;transform:translateY(0)} 20%{opacity:1} 100%{opacity:0;transform:translateY(-16px)} }
          @keyframes mdi-z-c { 0%{opacity:0;transform:translateY(0)} 20%{opacity:1} 100%{opacity:0;transform:translateY(-16px)} }
          .mdi-root { animation: mdi-float 3s ease-in-out infinite; }
          .mdi-shadow-el { animation: mdi-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .mdi-z-a { animation: mdi-z-a 3s ease-in 0s infinite; transform-box: fill-box; transform-origin: center; }
          .mdi-z-b { animation: mdi-z-b 3s ease-in 0.5s infinite; transform-box: fill-box; transform-origin: center; }
          .mdi-z-c { animation: mdi-z-c 3s ease-in 1s infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="mdi-shadow-el" />

      <g className="mdi-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Mattress base */}
        <rect x="18" y="66" width="64" height="8" rx="2" fill="#bbf7d0" />
        {/* Mattress core */}
        <rect x="18" y="54" width="64" height="14" rx="3" fill="white" />
        {/* Pillow top */}
        <rect x="20" y="48" width="60" height="8" rx="3" fill="#d1fae5" />

        {/* Ticking stripes */}
        <line x1="31" y1="48" x2="25" y2="74" stroke="#16a34a" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="42" y1="48" x2="36" y2="74" stroke="#16a34a" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="53" y1="48" x2="47" y2="74" stroke="#16a34a" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="64" y1="48" x2="58" y2="74" stroke="#16a34a" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

        {/* Z shapes floating up */}
        <g className="mdi-z-a">
          {/* Z: M x1,y1 L x2,y1 L x1,y2 L x2,y2 */}
          <path d="M34,42 L40,42 L34,36 L40,36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        <g className="mdi-z-b">
          <path d="M46,40 L53,40 L46,33 L53,33" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        <g className="mdi-z-c">
          <path d="M58,43 L64,43 L58,37 L64,37" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   4. GarageCleanoutIcon  (prefix: gci-)
───────────────────────────────────────────── */
export function GarageCleanoutIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes gci-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes gci-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes gci-stripe-a { 0%,15%{transform:scaleY(1)} 45%,75%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
          @keyframes gci-stripe-b { 0%,15%{transform:scaleY(1)} 45%,75%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
          @keyframes gci-stripe-c { 0%,15%{transform:scaleY(1)} 45%,75%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
          @keyframes gci-sparkle { 0%,40%{opacity:0} 55%,70%{opacity:1} 85%,100%{opacity:0} }
          .gci-root { animation: gci-float 3s ease-in-out infinite; }
          .gci-shadow-el { animation: gci-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .gci-stripe-a { animation: gci-stripe-a 3.5s ease-in-out 0s infinite; transform-box: fill-box; transform-origin: top center; }
          .gci-stripe-b { animation: gci-stripe-b 3.5s ease-in-out 0.1s infinite; transform-box: fill-box; transform-origin: top center; }
          .gci-stripe-c { animation: gci-stripe-c 3.5s ease-in-out 0.2s infinite; transform-box: fill-box; transform-origin: top center; }
          .gci-sparkle { animation: gci-sparkle 3.5s ease-in-out infinite; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="gci-shadow-el" />

      <g className="gci-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* House walls */}
        <rect x="22" y="52" width="56" height="30" rx="2" fill="white" />
        {/* Roof triangle */}
        <polygon points="50,24 18,54 82,54" fill="white" />

        {/* Garage door area (clipped region) */}
        <rect x="30" y="56" width="40" height="26" rx="1" fill="#d1fae5" />

        {/* Garage door stripes (animate upward) */}
        <rect x="30" y="65" width="40" height="6" rx="1" fill="#16a34a" className="gci-stripe-c" />
        <rect x="30" y="57" width="40" height="6" rx="1" fill="#16a34a" className="gci-stripe-b" />
        <rect x="30" y="57" width="40" height="6" rx="1" fill="#16a34a" className="gci-stripe-a" />

        {/* Sparkle (4-pointed star: 2 crossing rects) */}
        <g className="gci-sparkle">
          <rect x="59" y="58" width="10" height="3" rx="1.5" fill="white" transform="rotate(0,64,59.5)" />
          <rect x="62" y="55" width="3" height="10" rx="1.5" fill="white" transform="rotate(0,63.5,60)" />
          <rect x="59" y="58" width="10" height="2" rx="1" fill="white" transform="rotate(45,64,59)" />
          <rect x="63" y="55" width="2" height="10" rx="1" fill="white" transform="rotate(45,64,60)" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   5. EstateCleanoutIcon  (prefix: eci-)
───────────────────────────────────────────── */
export function EstateCleanoutIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes eci-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes eci-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes eci-box-a {
            0%{transform:translate(0,0);opacity:1}
            30%{transform:translate(8px,0);opacity:1}
            60%{transform:translate(8px,-18px);opacity:0}
            61%{transform:translate(0,0);opacity:0}
            70%{opacity:1}
            100%{transform:translate(0,0);opacity:1}
          }
          @keyframes eci-box-b {
            0%{transform:translate(0,0);opacity:1}
            30%{transform:translate(8px,0);opacity:1}
            60%{transform:translate(8px,-18px);opacity:0}
            61%{transform:translate(0,0);opacity:0}
            70%{opacity:1}
            100%{transform:translate(0,0);opacity:1}
          }
          .eci-root { animation: eci-float 3s ease-in-out infinite; }
          .eci-shadow-el { animation: eci-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .eci-box-a { animation: eci-box-a 4s ease-in-out 0s infinite; transform-box: fill-box; transform-origin: center; }
          .eci-box-b { animation: eci-box-b 4s ease-in-out 1s infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="eci-shadow-el" />

      <g className="eci-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* House silhouette */}
        {/* Walls */}
        <rect x="24" y="50" width="52" height="32" rx="2" fill="white" />
        {/* Roof */}
        <polygon points="50,22 20,52 80,52" fill="white" />
        {/* Chimney */}
        <rect x="62" y="28" width="6" height="14" rx="1" fill="#d1fae5" />
        {/* Door */}
        <rect x="44" y="64" width="12" height="18" rx="2" fill="#16a34a" />
        {/* Windows */}
        <rect x="28" y="58" width="10" height="10" rx="2" fill="#d1fae5" />
        <rect x="62" y="58" width="10" height="10" rx="2" fill="#d1fae5" />

        {/* Box A */}
        <g className="eci-box-a">
          <rect x="28" y="68" width="12" height="10" rx="1" fill="#bbf7d0" stroke="white" strokeWidth="1" />
          {/* Lid lines */}
          <line x1="28" y1="72" x2="40" y2="68" stroke="white" strokeWidth="1" />
          <line x1="34" y1="68" x2="34" y2="72" stroke="white" strokeWidth="1" />
        </g>

        {/* Box B */}
        <g className="eci-box-b">
          <rect x="30" y="70" width="10" height="8" rx="1" fill="#86efac" stroke="white" strokeWidth="1" />
          <line x1="30" y1="73" x2="40" y2="70" stroke="white" strokeWidth="1" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   6. ConstructionDebrisRemovalIcon  (prefix: cdi-)
───────────────────────────────────────────── */
export function ConstructionDebrisRemovalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes cdi-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes cdi-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes cdi-brick { 0%,20%{transform:translateY(0);opacity:1} 70%{transform:translateY(20px);opacity:0} 71%{transform:translateY(0);opacity:0} 80%{opacity:1} 100%{transform:translateY(0);opacity:1} }
          @keyframes cdi-dust-a { 0%,60%{transform:scale(1);opacity:0} 75%{transform:scale(1.8);opacity:0.7} 100%{transform:scale(2.4);opacity:0} }
          @keyframes cdi-dust-b { 0%,65%{transform:scale(1);opacity:0} 80%{transform:scale(1.6);opacity:0.5} 100%{transform:scale(2.2);opacity:0} }
          .cdi-root { animation: cdi-float 3s ease-in-out infinite; }
          .cdi-shadow-el { animation: cdi-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .cdi-brick { animation: cdi-brick 2.5s ease-in 0s infinite; transform-box: fill-box; transform-origin: center; }
          .cdi-dust-a { animation: cdi-dust-a 2.5s ease-out 0s infinite; transform-box: fill-box; transform-origin: center; }
          .cdi-dust-b { animation: cdi-dust-b 2.5s ease-out 0.1s infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="cdi-shadow-el" />

      <g className="cdi-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Hard hat dome (half-ellipse arc) */}
        <path d="M24,50 A26,22 0 0,1 76,50 Z" fill="white" />
        {/* Hard hat brim */}
        <ellipse cx="50" cy="50" rx="30" ry="5" fill="#d1fae5" />
        {/* Hat interior shadow */}
        <path d="M28,50 A22,18 0 0,1 72,50 Z" fill="#bbf7d0" />

        {/* Bricks at bottom */}
        {/* Brick row 1 */}
        <rect x="24" y="70" width="22" height="8" rx="2" fill="white" />
        <rect x="49" y="70" width="22" height="8" rx="2" fill="white" />
        {/* Brick row 2 (staggered) */}
        <rect x="32" y="63" width="22" height="7" rx="2" fill="#d1fae5" />
        <rect x="57" y="63" width="14" height="7" rx="2" fill="#d1fae5" />

        {/* Animated falling brick */}
        <g className="cdi-brick">
          <rect x="24" y="63" width="6" height="7" rx="2" fill="#bbf7d0" />
        </g>

        {/* Dust puffs */}
        <ellipse cx="27" cy="78" rx="4" ry="2" fill="white" opacity="0" className="cdi-dust-a" />
        <ellipse cx="32" cy="80" rx="3" ry="1.5" fill="white" opacity="0" className="cdi-dust-b" />
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   7. YardWasteRemovalIcon  (prefix: ywi-)
───────────────────────────────────────────── */
export function YardWasteRemovalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes ywi-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes ywi-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes ywi-leaf-main { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }
          @keyframes ywi-leaf-a { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(8deg)} }
          @keyframes ywi-leaf-b { 0%,100%{transform:rotate(10deg)} 50%{transform:rotate(-8deg)} }
          .ywi-root { animation: ywi-float 3s ease-in-out infinite; }
          .ywi-shadow-el { animation: ywi-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .ywi-leaf-main { animation: ywi-leaf-main 2.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
          .ywi-leaf-a { animation: ywi-leaf-a 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
          .ywi-leaf-b { animation: ywi-leaf-b 3.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="ywi-shadow-el" />

      <g className="ywi-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Background small leaf A */}
        <g className="ywi-leaf-a">
          <path
            d="M34,60 C28,48 30,34 34,28 C38,34 40,48 34,60 Z"
            fill="#bbf7d0"
          />
          <line x1="34" y1="60" x2="34" y2="28" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Background small leaf B */}
        <g className="ywi-leaf-b">
          <path
            d="M66,60 C72,48 70,34 66,28 C62,34 60,48 66,60 Z"
            fill="#bbf7d0"
          />
          <line x1="66" y1="60" x2="66" y2="28" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Main large leaf */}
        <g className="ywi-leaf-main">
          <path
            d="M50,68 C36,54 34,34 50,22 C66,34 64,54 50,68 Z"
            fill="white"
          />
          {/* Central vein */}
          <line x1="50" y1="68" x2="50" y2="22" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
          {/* Side veins */}
          <line x1="50" y1="38" x2="43" y2="32" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="50" y1="44" x2="40" y2="40" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="41" y2="48" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="50" y1="38" x2="57" y2="32" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="50" y1="44" x2="60" y2="40" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="59" y2="48" stroke="#d1fae5" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Grass spikes */}
        <polygon points="38,78 41,68 44,78" fill="white" />
        <polygon points="48,78 51,65 54,78" fill="white" />
        <polygon points="58,78 61,69 64,78" fill="white" />
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   8. CommercialJunkRemovalIcon  (prefix: cji-)
───────────────────────────────────────────── */
export function CommercialJunkRemovalIcon({ size = 80, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>{`
          @keyframes cji-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes cji-shadow { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.75)} }
          @keyframes cji-truck { 0%{transform:translateX(50px)} 100%{transform:translateX(-80px)} }
          @keyframes cji-arrow { 0%,100%{opacity:0.3} 50%{opacity:1} }
          .cji-root { animation: cji-float 3s ease-in-out infinite; }
          .cji-shadow-el { animation: cji-shadow 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .cji-truck { animation: cji-truck 4s linear infinite; transform-box: fill-box; transform-origin: center; }
          .cji-arrow { animation: cji-arrow 2s ease-in-out infinite; }
        `}</style>
      </defs>

      <ellipse cx="50" cy="96" rx="22" ry="3" fill="rgba(0,0,0,0.18)" className="cji-shadow-el" />

      <g className="cji-root">
        <circle cx="50" cy="50" r="46" fill="#16a34a" />

        {/* Office building */}
        <rect x="28" y="20" width="44" height="52" rx="2" fill="white" />

        {/* Window grid 3×4 */}
        {/* Row 1 */}
        <rect x="33" y="25" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="46" y="25" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="59" y="25" width="8" height="6" rx="1" fill="#d1fae5" />
        {/* Row 2 */}
        <rect x="33" y="35" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="46" y="35" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="59" y="35" width="8" height="6" rx="1" fill="#d1fae5" />
        {/* Row 3 */}
        <rect x="33" y="45" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="46" y="45" width="8" height="6" rx="1" fill="#d1fae5" />
        <rect x="59" y="45" width="8" height="6" rx="1" fill="#d1fae5" />
        {/* Row 4 */}
        <rect x="33" y="55" width="8" height="6" rx="1" fill="#bbf7d0" />
        <rect x="46" y="55" width="8" height="6" rx="1" fill="#bbf7d0" />
        <rect x="59" y="55" width="8" height="6" rx="1" fill="#bbf7d0" />

        {/* Clip the truck so it stays in the lower portion */}
        <clipPath id="cji-clip">
          <rect x="4" y="72" width="92" height="20" />
        </clipPath>

        {/* Truck (animated) */}
        <g className="cji-truck" clipPath="url(#cji-clip)">
          {/* Truck body */}
          <rect x="10" y="74" width="22" height="12" rx="2" fill="#bbf7d0" />
          {/* Cab */}
          <rect x="30" y="76" width="10" height="10" rx="2" fill="white" />
          {/* Wheels */}
          <circle cx="17" cy="87" r="3" fill="white" />
          <circle cx="29" cy="87" r="3" fill="white" />
          <circle cx="37" cy="87" r="2.5" fill="white" />
        </g>

        {/* Arrow pointing down */}
        <g className="cji-arrow">
          <line x1="50" y1="66" x2="50" y2="72" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <polyline points="46,70 50,74 54,70" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Export map
───────────────────────────────────────────── */
export const animatedIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "furniture-removal": FurnitureRemovalIcon,
  "appliance-removal": ApplianceRemovalIcon,
  "mattress-disposal": MattressDisposalIcon,
  "garage-cleanout": GarageCleanoutIcon,
  "estate-cleanout": EstateCleanoutIcon,
  "construction-debris-removal": ConstructionDebrisRemovalIcon,
  "yard-waste-removal": YardWasteRemovalIcon,
  "commercial-junk-removal": CommercialJunkRemovalIcon,
}
