"use client";


import { Dropdown , Button } from "flowbite-react";

export default function DropdownTodo() {
	return (
		<>
			<Dropdown
				label="hello"
				dismissOnClick={false}
				renderTrigger={() => <span className="border text-xs border-gray-400 h-8 rounded-full px-3 py-2 cursor-pointer flex justify-between">Medium</span>
			  }
				
				>
				  <Dropdown.Item >Team</Dropdown.Item>
				  <Dropdown.Item >Update</Dropdown.Item>
				  		
			</Dropdown>
		</>
	);
}
