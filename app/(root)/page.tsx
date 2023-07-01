import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { SignOutButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <p>Hello admin Dashboard  <SignOutButton/>
     </p>
  )
}
