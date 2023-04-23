import React, { useState } from "react";

import User from "./user";
import ReactPaginate from "react-paginate";
import useGetUsers from "../../hooks/useGetUsers";

function AllUsers() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const { users, fetchedCountPage } = useGetUsers(selectedPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  return (
    <>
      <div className="space-y-8">{users && users.map((item, index) => <User {...item} key={index} />)}</div>

      <ReactPaginate
        pageCount={fetchedCountPage}
        breakLabel="..."
        nextLabel="بعدی"
        previousLabel="قبلی"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"mt-4 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
        pageClassName={
          "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
        activeClassName={"h-6 lg:h-8 rounded-full !text-white bg-brand"}
        breakClassName={
          "flex items-center justify-center border-brand pt-1 border px-2 lg:px-3 h-6 lg:h-8 rounded-full text-brand"
        }
        nextClassName={
          "flex items-center justify-center px-2 lg:px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        previousClassName={
          "flex items-center justify-center px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        disabledClassName={"hidden"}
      />
    </>
  );
}

export default AllUsers;
