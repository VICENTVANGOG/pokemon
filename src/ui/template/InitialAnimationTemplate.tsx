"use client"
import { TitleScreenMusic } from "../molecules/TitleScreenMusic"
import { Text } from "../atoms/Text"

interface InitialAnimationTemplateProps {
  onStart: () => void
}

export function InitialAnimationTemplate({ onStart }: InitialAnimationTemplateProps) {
  return (
    <div className="w-full h-screen">
      <TitleScreenMusic />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[256px] font-[NightAOE] pointer-events-none text-red-600 text-shadow-lg z-[1000]">
        <Text>237</Text>
      </div>
      <div className="absolute inset-x-0 bottom-10 flex justify-center pointer-events-none uppercase">
        <Text className="text-white text-lg animate-pulse">Press Spacebar</Text>
      </div>
    </div>
  )
}

