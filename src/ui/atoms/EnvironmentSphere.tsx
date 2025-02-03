import { Environment } from "@react-three/drei"

export function EnvironmentSphere() {
  return (
    <Environment
      files="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/night4-5uEo5n1aEFtW5SYwlMTy9bglR0dq6O.jpg"
      background
      blur={0.5}
    />
  )
}

