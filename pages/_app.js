import Footer from "@/components/templates/Footer";
import SideBar from "@/components/templates/SideBar";
import TopSite from "@/components/templates/TopSite";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
   <>
   <TopSite/>
   <SideBar/>
       <div className="my-6 ">
     <Component {...pageProps} />
     </div>
     <Footer/>
   </>

    
    )
}
