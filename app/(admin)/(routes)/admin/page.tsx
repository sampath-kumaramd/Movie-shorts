import { SignOutButton, UserButton } from '@clerk/nextjs'

export default function Admin() {
  return (
    <p>Hello admin <UserButton afterSignOutUrl="http://localhost:3000/"/>
     </p>
  )
}
