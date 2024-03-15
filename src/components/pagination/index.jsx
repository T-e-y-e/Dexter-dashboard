'use client'
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

export const TablePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage);

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  const handlePageChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <div className="bg-white mt-8 p-4 rounded-[8px]">
      <div className="flex justify-between">
        <ItemsRange
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={totalItems}
        />
        <Pagination
          count={Math.ceil(totalItems / itemsPerPage)}
          shape="rounded"
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#3A5743",
              color: "#fff",
            },
          }}
        />
      </div>
    </div>
  );
};

const ItemsRange = ({ startIndex, endIndex, totalItems }) => {
  return (
    <div className="text-[#8D9091]">
      {`${startIndex}-${endIndex} of ${totalItems} items`}
    </div>
  );
};
