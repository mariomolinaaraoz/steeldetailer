import { User } from 'lucide-react'
import { Button } from "../ui/button"

export default function LoginButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button variant="ghost" size="icon">
        <User/>
      </Button>
    </form>
  )
}