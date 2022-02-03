import { useRouter } from "next/dist/client/router"

export function useAccent() {
  const router = useRouter()
  return router.query["accent"] ?? "primary"
}
