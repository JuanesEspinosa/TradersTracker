import { redirect } from 'next/navigation'

export default function Newsletter() {
  redirect('/home')
  return null
}
