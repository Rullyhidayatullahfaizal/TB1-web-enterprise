import Tiket from "../../components/home/home";
import WisataCard from "../../components/home/card";
import Statistik from "@/components/home/statistik";
import FooterHome from "@/components/home/footer";
import Navbar from "@/components/home/navbar";

const Page = () => {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Tiket></Tiket>
        <WisataCard></WisataCard>
        <Statistik></Statistik>
        <FooterHome />
      </div>
    </>
  );
};

export default Page;
