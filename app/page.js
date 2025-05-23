import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <>
     <h1>Welcome Priyanshu </h1>
    <Link href="/about">About</Link> <br />
    <Link href="/services">Service</Link>
 </>
  )
}
