import Image from 'next/image'
import Header from "@/app/components/header/header";
import Leftcoloumn from "@/app/components/leftcoloumn/leftcoloumn";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <main className="container">
        <div className="header"><Header/></div>
        <div className="leftcoloumn"><Leftcoloumn/></div>
        <div className="content"></div>
        <div className="footer"><Footer/></div>
    </main>
  )
}
