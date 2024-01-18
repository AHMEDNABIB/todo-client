"use client";

import { CiMenuKebab } from "react-icons/ci";
import { Dropdown } from "flowbite-react";

export default function DropdownTodo({values}) {
	return (
		<>
			<Dropdown
				label="Team"
				dismissOnClick={false}
				>
				  <Dropdown.Item >Team</Dropdown.Item>
				  <Dropdown.Item >Update</Dropdown.Item>
				  		
			</Dropdown>
		</>
	);
}
