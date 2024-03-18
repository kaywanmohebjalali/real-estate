import Footer from "@/components/templates/Footer";
import SideBar from "@/components/templates/SideBar";
import TopSite from "@/components/templates/TopSite";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const FlagIsComponent=Component?.displayName=='PageNotFound';
  return(
    <>
    

     {!FlagIsComponent?<TopSite/>:''}
    
     {!FlagIsComponent?<SideBar/>:''}
   
       <div className="my-6 ">
      <Component {...pageProps} />
     </div>
     {!FlagIsComponent?<Footer/>:''}
     
    
   </>

    
    )
}
