
export const Roadmap = () => {
  const milestones = [
    {
      id: 1,
      x: 130,
      y: 250,
      percentage: "30%",
      topLabel: "Start",
      bottomLabel: "B1",
      levelText: "Intermediate",
      color: "#FF8A00",
    },
    {
      id: 2,
      x: 245,
      y: 175,
      percentage: "45%",
      topLabel: "Month 2",
      color: "#FFD600",
    },
    {
      id: 3,
      x: 340,
      y: 100,
      percentage: "60%",
      topLabel: "Month 3",
      bottomLabel: "B2",
      levelText: "Upper – Intermediate",
      color: "#B8FF5F",
    },
  ]

  return (
    <div className="relative w-full max-w-[500px] h-[500px] bg-black p-4 font-sans select-none overflow-hidden">
      {/* Side Labels */}
      <div className="absolute left-6 top-[40%] -translate-y-1/2 flex flex-col gap-0.5 pointer-events-none">
        <span className="text-secondary-150 text-[16px] font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-[16px] font-medium leading-tight">Score, %</span>
      </div>
      
      <div className="absolute left-6 bottom-12 flex flex-col gap-0.5 pointer-events-none">
        <span className="text-secondary-150 text-[16px] font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-[16px] font-medium leading-tight">level</span>
      </div>

      <svg
        viewBox="0 0 500 400"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="roadmapGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8A00" />
            <stop offset="50%" stopColor="#FFD600" />
            <stop offset="100%" stopColor="#B8FF5F" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Smooth S-Curve Path */}
        <path
          d="M 10 280 C 60 290, 90 300, 150 275 C 200 260, 200 230, 245 175 C 255 165, 310 100, 350 55 C 350 70, 300 70, 450 25 C 480 10, 470 50, 490 10 C 480 0, 460 0, 450 0"
          fill="none"
          stroke="url(#roadmapGradient)"
          strokeWidth="7"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.5))" }}
        />

        {milestones.map((m) => (
          <g key={m.id}>
            {/* Dashed vertical line */}
            <line
              x1={m.x}
              y1={m.y}
              x2={m.x}
              y2={m.y - 45}
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4,4"
              opacity="0.25"
            />

            {/* Top Labels */}
            <text
              x={m.x}
              y={m.y - 65}
              textAnchor="middle"
              fill="white"
              className="text-[14px] font-medium opacity-60 tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {m.topLabel}
            </text>
            <text
              x={m.x}
              y={m.y - 35}
              textAnchor="middle"
              fill={m.color}
              className="text-[32px] font-bold tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {m.percentage}
            </text>

            {/* The Point */}
            <circle 
              cx={m.x} 
              cy={m.y} 
              r="9" 
              fill={m.color} 
              stroke="rgba(0,0,0,0.2)" 
              strokeWidth="1"
            />

            {/* Bottom Labels */}
            {m.bottomLabel && (
              <g>
                <text
                  x={m.x}
                  y={m.y + 28}
                  textAnchor="middle"
                  fill="white"
                  className="text-[13px] font-bold tracking-widest opacity-50"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.bottomLabel}
                </text>
                <text
                  x={m.x}
                  y={m.y + 48}
                  textAnchor="middle"
                  fill="white"
                  className="text-[15px] font-semibold tracking-tight opacity-70"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.levelText}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

