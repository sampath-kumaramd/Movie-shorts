import { SignOutButton, UserButton } from '@clerk/nextjs'

export default function User() {
  return (
    <p>Hello user <UserButton afterSignOutUrl="http://localhost:3000/"/>
     </p>
  )
}
