import { useState } from "react"

export const useLoading = () => {
  const [isLoading, setLoading] = useState(true)

  const toggleLoading = () => {
    setLoading(!isLoading)
  }

  return {
    isLoading,
    toggleLoading,
  }
}
