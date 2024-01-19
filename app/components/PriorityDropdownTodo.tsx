"use client";

import { CiMenuKebab } from "react-icons/ci";
import { Dropdown, Button } from "flowbite-react";

export default function DropdownTodo() {
	return (
		<>
			<Dropdown
				label=""
				dismissOnClick={false}
				renderTrigger={() =>  <Button pill outline  gradientMonochrome="success">
				Priority
			  </Button>}
				>
				  <Dropdown.Item >High</Dropdown.Item>
				  <Dropdown.Item >Medium</Dropdown.Item>
				  <Dropdown.Item >Low</Dropdown.Item>		
			</Dropdown>
		</>
	);
}

