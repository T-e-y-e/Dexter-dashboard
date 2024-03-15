"use client";
import { TablePagination } from "@/components/pagination";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Topbar } from "@/components/topbar";


export const VendorsTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState({
    total: 0,
    perPage: 10,
    currentPage: 1,
    lastPage: 1,
  });
  const [filterType, setFilterType] = useState("all");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://beta.getdexterapp.com/api/test");
      const data = await response.json();
      console.log("Fetched data:", data);
      const initialData = data.data;
      console.log("Initial data:", initialData);
      setPaginationData({
        total: data.meta.total,
        perPage: data.meta.per_page,
        currentPage: data.meta.current_page,
        lastPage: data.meta.last_page,
      });
      setUsers(initialData);
      console.log("Updated users:", users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("users:", users);

  const handlePageChange = async (event, value) => {
    try {
      const response = await fetch(
        `https://beta.getdexterapp.com/api/test?page=${value}`
      );
      const data = await response.json();
      setUsers(data.data);
      console.log(data);
      setPaginationData({
        total: data.meta.total,
        perPage: data.meta.per_page,
        currentPage: data.meta.current_page,
        lastPage: data.meta.last_page,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate.replace(/(\d+)(st|nd|rd|th)/, "$1<sup>$2</sup>");
  };

  const applyFilter = () => {
      switch (filterType) {
        case "all":
          return users;
        case "incomplete":
          return users.filter(
            (user) => user.shop === null && user.business === null
          );
        case "complete":
          return users.filter(
            (user) => user.shop !== null || user.business !== null
          );
        default:
          return users;
      }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Topbar pageTitle={"Users"} />
      <section className="mb-10">
        <div>
          <h2 className="font-semibold text-xl mb-2">Filters:</h2>
          <div className="flex items-center justify-between">
            <div className="flex gap-6 mb-8">
              <button
                onClick={() => setFilterType("all")}
                className={`w-max py-2.5 px-[18px] font-semibold text-[#3A5743] bg-white rounded-full border-2 border-[#3A5743] ${
                  filterType === "all" ? "bg-green-100" : ""
                }`}>
                All
              </button>
              <button
                onClick={() => setFilterType("incomplete")}
                className={`w-max py-2.5 px-[18px] font-semibold text-[#3A5743] bg-white rounded-full border border-[#3A5743] ${
                  filterType === "incomplete" ? "bg-green-100" : ""
                }`}>
                Incomplete Registered Users
              </button>
              <button
                onClick={() => setFilterType("complete")}
                className={`w-max py-2.5 px-[18px] font-semibold text-[#3A5743] bg-white rounded-full border border-[#3A5743] ${
                  filterType === "complete" ? "bg-green-100" : ""
                }`}>
                Complete Registered Users
              </button>
            </div>
            <p className="text-lg">
              Users:{" "}
              <span className="font-bold text-2xl mr-6 text-[#3A5743]">
                {applyFilter().length}
              </span>
            </p>
          </div>
        </div>
        <div className="relative min-h-64 rounded-lg h-max overflow-x-auto bg-white">
          <table className="w-full text-left rtl:text-right text-slate-900 text-base font-normal font-['Hanken Sans'] leading-normal">
            <thead className="text-[#8D9091] text-sm font-normal bg-white border-[#3A5743] border-b-2">
              <tr className="px-6">
                <th scope="col" className="px-6 py-4 font-normal">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  <div className="flex items-center gap-6">Location</div>
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  <div className="flex items-center gap-6">Date Joined</div>
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  <div className="text-center">Services Requested</div>
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  <div className="flex items-center text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {applyFilter().map((user, i) => (
                <tr
                  className="bg-white hover:bg-gray-50 border-b px-10 text-[#8D9091] text-sm"
                  key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-normal whitespace-nowrap">
                    <span>{user.first_name}</span>
                    <span> {user.last_name}</span>
                  </th>
                  <td className="px-6 py-4">Lekki Phase 1</td>
                  <td className="px-6 py-4">{formatDate(user.created_at)}</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-left">
                    <MoreVertIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          totalItems={paginationData.total}
          itemsPerPage={paginationData.perPage}
          currentPage={paginationData.currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

// const AddressWithCoordinates = ({ latitude, longitude }) => {
//     const [address, setAddress] = useState("");
    
//     const getAddressFromCoordinates = async (latitude, longitude) => {
//       try {
//         const response = await fetch(
//           `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`
//         );
//         const data = await response.json();
//         if (data.features && data.features.length > 0) {
//           return data.features[0].place_name;
//         } else {
//           return "Location not found";
//         }
//       } catch (error) {
//         console.error("Error fetching location:", error);
//         return "Error fetching location";
//       }
//     };

//   useEffect(() => {
//     const fetchAddress = async () => {
//       const address = await getAddressFromCoordinates(latitude, longitude);
//       setAddress(address);
//     };
//     fetchAddress();
//   }, [latitude, longitude]);

//   return <div>{address}</div>;
// };
