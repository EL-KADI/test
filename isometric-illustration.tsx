export default function Component() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#f8f9fb] to-[#eef0f6] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        {/* Left side - Shield cube */}
        <div className="absolute left-[10%] top-[20%] transform-gpu">
          <div className="relative">
            {/* Cube base */}
            <div
              className="w-32 h-32 bg-gradient-to-br from-[#8997be] to-[#5d70a6]"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) rotateZ(0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            {/* Cube top face */}
            <div
              className="absolute top-0 w-32 h-32 bg-gradient-to-br from-[#a5b0ce] to-[#8997be]"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) rotateZ(0deg) translateZ(64px)",
                transformStyle: "preserve-3d",
              }}
            />
            {/* Shield icon on top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-20 bg-gradient-to-b from-[#4a9eff] to-[#2563eb] rounded-t-full rounded-b-lg relative">
                <div className="absolute inset-2 bg-gradient-to-b from-[#60a5fa] to-[#3b82f6] rounded-t-full rounded-b-md">
                  <div className="absolute inset-1 bg-gradient-to-b from-[#93c5fd] to-[#60a5fa] rounded-t-full rounded-b-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left side - MC cube */}
        <div className="absolute left-[5%] bottom-[25%] transform-gpu">
          <div className="relative">
            {/* Cube faces */}
            <div
              className="w-28 h-28 bg-gradient-to-br from-[#4c619d] to-[#2d468c]"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute top-0 w-28 h-28 bg-gradient-to-br from-[#6678ab] to-[#4c619d]"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) translateZ(56px)",
                transformStyle: "preserve-3d",
              }}
            />
            {/* MC Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12">
              <span className="text-[#4a9eff] text-2xl font-bold italic">MC</span>
            </div>
          </div>
        </div>

        {/* Center - Large rounded cube */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transform-gpu">
          <div className="relative">
            <div
              className="w-48 h-48 bg-gradient-to-br from-[#4c619d] to-[#1e3883] rounded-3xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute top-0 w-48 h-48 bg-gradient-to-br from-[#6678ab] to-[#4c619d] rounded-3xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) translateZ(96px)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-[#3d5494] to-[#1a3581] rounded-3xl"
              style={{
                transform: "rotateX(60deg) rotateY(45deg) translateX(96px)",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>

        {/* Right side - Light cubes */}
        <div className="absolute right-[15%] top-[15%] transform-gpu">
          <div className="relative">
            <div
              className="w-40 h-40 bg-gradient-to-br from-[#eef0f6] to-[#dde1ec] rounded-2xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute top-0 w-40 h-40 bg-gradient-to-br from-[#f8f9fb] to-[#eef0f6] rounded-2xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) translateZ(80px)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute right-0 top-0 w-40 h-40 bg-gradient-to-br from-[#e8ebf2] to-[#d8ddea] rounded-2xl"
              style={{
                transform: "rotateX(60deg) rotateY(45deg) translateX(80px)",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>

        {/* Right side - Small cube */}
        <div className="absolute right-[10%] bottom-[20%] transform-gpu">
          <div className="relative">
            <div
              className="w-24 h-24 bg-gradient-to-br from-[#e8ebf2] to-[#d1d6e6] rounded-xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute top-0 w-24 h-24 bg-gradient-to-br from-[#f2f4f8] to-[#e8ebf2] rounded-xl"
              style={{
                transform: "rotateX(60deg) rotateY(-45deg) translateZ(48px)",
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-[#dee2ed] to-[#cdd3e4] rounded-xl"
              style={{
                transform: "rotateX(60deg) rotateY(45deg) translateX(48px)",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
