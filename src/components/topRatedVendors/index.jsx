import React from "react";

export const TopRatedVendors = () => {
  return (
    <div className="bg-white shadow-lg p-6 w-[420px] rounded-[8px]">
      <h1 className="text-[#6A6B6D] font-medium text-xl text-center mb-6">
        Top Rated Vendors
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src="/images/user1.png" alt="user" />
            </div>
            <h3 className="font-medium text-sm text-[#4C4C4C]">Esosa Bolaji</h3>
          </div>
          <div className="flex justify-evenly items-center">
            <p className="text-sm font-light text-[#808080]">Electrician</p>
            <div className="flex items-center gap-2 ml-4">
              <img src="/images/Stars.png" alt="stars" />
              <h3 className="font-semibold text-[#276E59] text-sm">4/5</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src="/images/user2.png" alt="user" />
            </div>
            <h3 className="font-medium text-sm text-[#4C4C4C]">Efik Eyo</h3>
          </div>
          <div className="flex justify-evenly items-center">
            <p className="text-sm font-light text-[#808080]">Carpenter</p>
            <div className="flex items-center gap-2 ml-4">
              <img src="/images/Stars.png" alt="stars" />
              <h3 className="font-semibold text-[#276E59] text-sm">4/5</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src="/images/user3.png" alt="user" />
            </div>
            <h3 className="font-medium text-sm text-[#4C4C4C]">Victor Siji</h3>
          </div>
          <div className="flex justify-evenly items-center">
            <p className="text-sm font-light text-[#808080]">Makeup Artist</p>
            <div className="flex items-center gap-2 ml-4">
              <img src="/images/Stars.png" alt="stars" />
              <h3 className="font-semibold text-[#276E59] text-sm">4/5</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src="/images/user3.png" alt="user" />
            </div>
            <h3 className="font-medium text-sm text-[#4C4C4C]">
              Tolani Chelsea
            </h3>
          </div>
          <div className="flex justify-evenly items-center">
            <p className="text-sm font-light text-[#808080]">House Cleaner</p>
            <div className="flex items-center gap-2 ml-4">
              <img src="/images/Stars.png" alt="stars" />
              <h3 className="font-semibold text-[#276E59] text-sm">4/5</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src="/images/user3.png" alt="user" />
            </div>
            <h3 className="font-medium text-sm text-[#4C4C4C]">
              Amala Moon
            </h3>
          </div>
          <div className="flex justify-evenly items-center">
            <p className="text-sm font-light text-[#808080]">Restaurant</p>
            <div className="flex items-center gap-2 ml-4">
              <img src="/images/Stars.png" alt="stars" />
              <h3 className="font-semibold text-[#276E59] text-sm">4/5</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
