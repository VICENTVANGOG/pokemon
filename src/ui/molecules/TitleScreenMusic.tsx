import { useState, useEffect } from "react"

export function TitleScreenMusic() {
  const [audio] = useState(
    () =>
      new Audio(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(1)-WBaaqUWM8OrFK7H8xr5UBLzBHG7ibZ.mp3",
      ),
  )

  useEffect(() => {
    audio.loop = true
    audio.volume = 0.5
    audio.play()
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [audio])

  return null
}

