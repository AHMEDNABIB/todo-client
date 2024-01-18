"use client";

import {
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Button,
	Modal
} from "flowbite-react";
import { useState } from "react";

import Image from "next/image";
import ActionDropdownTodo from "@/app/components/ActionDropdownTodo"
import SearchTodo from "@/app/components/SerarchTodo"
import PaginationTodo from "./PaginationTodo";
import ViewModalTodo from "@/app/components/ViewModalTodo"
import TagsDropdownTodo from "@/app/components/TagsDropdownTodo"
import PriorityDropdownTodo from "@/app/components/PriorityDropdownTodo"

function TableTodo() {
	  const priority = ['high', 'medium', 'low'];

	  const [openModal, setOpenModal] = useState(false);
	  const [isChecked, setIsChecked] = useState(false);

	  const handleCheckboxChange = () => {
	    setIsChecked(!isChecked);
	  };
		
  return (
		<>
			<div className="overflow-x-auto w-full border-2 rounded-md border-zinc-200 ">
				<div className="flex justify-between gap-6 mx-4 my-6 ">
					<SearchTodo />
					<PaginationTodo />
				</div>
				<hr/>
				<Table hoverable>
					<TableBody className="divide-y divide-x">

				       {/*1*/}

						<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4 cursor-pointer peer">
								<Checkbox checked={isChecked}  onChange={handleCheckboxChange} />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
									<h1 className={`text-lg font-semibold cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>
										hello world
									</h1>
									<p className={`ml-2  ${isChecked ? 'line-through text-gray-500' : ''}`}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing 
										
									
									</p>
								</TableCell>
							</span>
								<TableCell >
								  <div className="flex justify-between gap-2">
									<TagsDropdownTodo />
									<PriorityDropdownTodo/>
								  </div>
									
								</TableCell>
								<TableCell className={`cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							

							<TableCell>
								<ActionDropdownTodo />
							</TableCell>
						</TableRow>

					{/*2*/}
					<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4 cursor-pointer peer">
								<Checkbox checked={isChecked}  onChange={handleCheckboxChange} />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
									<h1 className={`text-lg font-semibold cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>
										hello world
									</h1>
									<p className={`ml-2  ${isChecked ? 'line-through text-gray-500' : ''}`}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing 									
									</p>
								</TableCell>
							</span>
								<TableCell>
									<TagsDropdownTodo />
									
								</TableCell>
								<TableCell className={`cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							<TableCell>
								<ActionDropdownTodo />
							</TableCell>
						</TableRow>

					{/*3*/}
					<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4 cursor-pointer peer">
								<Checkbox checked={isChecked}  onChange={handleCheckboxChange} />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
									<h1 className={`text-lg font-semibold cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>
										hello world
									</h1>
									<p className={`ml-2  ${isChecked ? 'line-through text-gray-500' : ''}`}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing 
									</p>
								</TableCell>
							</span>
								<TableCell>
									<TagsDropdownTodo />	
								</TableCell>
								<TableCell className={`cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							<TableCell>
								<ActionDropdownTodo />
							</TableCell>
						</TableRow>	
					</TableBody>
				</Table>
			</div>

			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ViewModalTodo/>
			</Modal>
		</>
  );
}

export default TableTodo