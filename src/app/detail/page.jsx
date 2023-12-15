import DaftarTiket from "@/components/detail"
import FooterHome from "@/components/home/footer"
import Navbar from "@/components/home/navbar"


const Page = () =>{
    return(
        <>
            <Navbar></Navbar>
            <DaftarTiket></DaftarTiket>
            <FooterHome ></FooterHome>
        </>
    )
}

export default Page