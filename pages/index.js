
import { Inter } from "next/font/google";

import Home from '../components/templates/Home'

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <h1 className="mt-[22vh] sm:mt-0 ">
        <Home/>
    </h1>
  )
}
