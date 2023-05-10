import Image from 'next/image'
import Header from "@/app/components/header/header";
import Leftcoloumn from "@/app/components/leftcoloumn/leftcoloumn";
import Footer from "@/app/components/footer/footer";
import ContentHeader from "@/app/components/content_header/content_header";

export default function Home() {
  return (
    <main className="container">
        <div className="header"><Header/></div>
        <div className="leftcoloumn"><Leftcoloumn/></div>
        <div className="content">
            <ContentHeader/>
        </div>
        <div className="footer"><Footer/></div>
    </main>
  )
}
