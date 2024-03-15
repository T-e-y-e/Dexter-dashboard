import { DashboardChart } from "@/components/chart";
import TextRating from "@/components/rating";
import { TopRatedUsers } from "@/components/topRatedUsers";
import { TopRatedVendors } from "@/components/topRatedVendors";
import { Topbar } from "@/components/topbar";


export default function Home() {
  return (
    <>
      <Topbar pageTitle={"Welcome Dexter Admin,"} />
      <section className="grid grid-cols-4 gap-10">
        <div className="bg-white shadow-lg rounded-[10px] p-8">
          <div>
            <img src="/images/icon-pack1.png" alt="icon pack" />
          </div>
          <div className="text-center mt-6">
            <h2 className="font-semibold text-[32px] text-[#1B264F]">350</h2>
            <p className="text-lg mt-1">Vendors</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-[10px] p-8">
          <div>
            <img src="/images/icon-pack2.png" alt="icon pack" />
          </div>
          <div className="text-center mt-6">
            <h2 className="font-semibold text-[32px] text-[#F7B32B]">10</h2>
            <p className="text-lg mt-1">Active Services</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-[10px] p-8">
          <div>
            <img src="/images/icon-pack3.png" alt="icon pack" />
          </div>
          <div className="text-center mt-6">
            <h2 className="font-semibold text-[32px] text-[#C1292E]">56</h2>
            <p className="text-lg mt-1">Active Service Requests</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-[10px] p-8">
          <div>
            <img src="/images/icon-pack4.png" alt="icon pack" />
          </div>
          <div className="text-center mt-6">
            <h2 className="font-semibold text-[32px] text-[#34252F]">1000+</h2>
            <p className="text-lg mt-1">Users</p>
          </div>
        </div>
      </section>

      <section className="mt-16 flex justify-between w-full">
        <div>
          <DashboardChart />
        </div>
        <div className="flex flex-col gap-6">
          <TopRatedVendors />
          <TopRatedUsers />
        </div>
      </section>
    </>
  );
}
