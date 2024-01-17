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

import Image from "next/image";
import { useState } from "react";
import DropdownTodo from "@/app/components/DropdownTodo"
import SearchTodo from "@/app/components/SerarchTodo"
import PaginationTodo from "./PaginationTodo";


function TableTodo() {
	const [openModal, setOpenModal] = useState(false);
	
  return (
		<>
			<div className="overflow-x-auto w-full border-2 rounded-md border-zinc-200 ">
				<div className="flex justify-between gap-6 mx-4 my-6 ">
					<SearchTodo />
					<PaginationTodo />
				</div>
				<hr/>
				<Table hoverable>
					<TableBody className="divide-y">
						<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4 cursor-pointer peer">
								<Checkbox />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
									<h1 className="text-lg font-semibold cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
										hello world
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Morbi pulvinar feugiat
										consequat. Duis lacus nibh, sagittis id
										
									
									</p>
								</TableCell>
								<TableCell>
									<div className="flex flex-wrap gap-2">
										<Button
											outline
											gradientDuoTone="purpleToBlue">
											Medium
										</Button>
										<Button
											outline
											gradientDuoTone="greenToBlue">
											Team
										</Button>
									</div>
								</TableCell>
								<TableCell>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							</span>

							<TableCell>
								<DropdownTodo />
							</TableCell>
						</TableRow>

						<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4">
								<Checkbox />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									<h1 className="text-lg font-semibold">
										hello world
									</h1>
									<p>Lorem ipsum dolor sit amet.</p>
								</TableCell>
								<TableCell>
									<div className="flex flex-wrap gap-2">
										<Button
											outline
											gradientDuoTone="purpleToBlue">
											Medium
										</Button>
										<Button
											outline
											gradientDuoTone="greenToBlue">
											Team
										</Button>
									</div>
								</TableCell>
								<TableCell>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							</span>

							<TableCell>
								<DropdownTodo />
							</TableCell>
						</TableRow>

						<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4">
								<Checkbox />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									<h1 className="text-lg font-semibold">
										hello world
									</h1>
									<p>Lorem ipsum dolor sit amet.</p>
								</TableCell>
								<TableCell>
									<div className="flex flex-wrap gap-2">
										<Button
											outline
											gradientDuoTone="purpleToBlue">
											Medium
										</Button>
										<Button
											outline
											gradientDuoTone="greenToBlue">
											Team
										</Button>
									</div>
								</TableCell>
								<TableCell>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							</span>

							<TableCell>
								<DropdownTodo />
							</TableCell>
						</TableRow>

						<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<TableCell className="p-4">
								<Checkbox />
							</TableCell>
							<span onClick={() => setOpenModal(true)}>
								<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									<h1 className="text-lg font-semibold">
										hello world
									</h1>
									<p>Lorem ipsum dolor sit amet.</p>
								</TableCell>
								<TableCell>
									<div className="flex flex-wrap gap-2">
										<Button
											outline
											gradientDuoTone="purpleToBlue">
											Medium
										</Button>
										<Button
											outline
											gradientDuoTone="greenToBlue">
											Team
										</Button>
									</div>
								</TableCell>
								<TableCell>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							</span>

							<TableCell>
								<DropdownTodo />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>
					<div className="flex gap-5">
						<h1 className="text-lg font-semibold">hello world</h1>
						<div className="flex flex-wrap gap-2">
							<Button outline gradientDuoTone="purpleToBlue">
								Medium
							</Button>
							<Button outline gradientDuoTone="greenToBlue">
								Team
							</Button>
						</div>
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European
							Union enacts new consumer privacy laws for its
							citizens, companies around the world are updating
							their terms of service agreements to comply. Lorem
							ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias ex amet possimus exercitationem eaque
							corrupti inventore totam quidem blanditiis eum.
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="red" onClick={() => setOpenModal(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
  );
}

export default TableTodo