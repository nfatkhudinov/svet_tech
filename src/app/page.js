import Image from 'next/image'
import Header from "@/app/components/header/header";
import Leftcoloumn from "@/app/components/leftcoloumn/leftcoloumn";
import Footer from "@/app/components/footer/footer";
import ContentHeader from "@/app/components/content_header/content_header";
import Content_article from "@/app/components/content_article/content_article";
import ContentButtonwithpicture from "@/app/components/content_buttonswithpicture/content_buttonwithpicture";

export default function Home() {
  return (
    <main className="container">
        <div className="header"><Header/></div>
        <div className="leftcoloumn"><Leftcoloumn/></div>
        <div className="content">
            <ContentHeader/>
            <Content_article/>
            <ContentButtonwithpicture/>
        </div>
        <div className="footer"><Footer/></div>
    </main>
  )
}
