"use client";

import { CiMenuKebab } from "react-icons/ci";
import { Dropdown } from "flowbite-react";

export default function DropdownTodo({values}) {
	return (
		<>
			<Dropdown
				label="High"
				dismissOnClick={false}
				>
				  <Dropdown.Item >High</Dropdown.Item>
				  <Dropdown.Item >Medium</Dropdown.Item>
				  <Dropdown.Item >Low</Dropdown.Item>		
			</Dropdown>
		</>
	);
}

