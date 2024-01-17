"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

function PaginationTodo() {

    const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);
	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				layout="table"
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
				showIcons
			/>
		</div>
	);
}

export default PaginationTodo;
