"use client";

import { CiMenuKebab } from "react-icons/ci";
import { Dropdown } from "flowbite-react";

export default function DropdownTodo() {
	return (
		<div>
			<Dropdown
				label="Action"
				dismissOnClick={false}
				renderTrigger={() => (
					<span>
						<CiMenuKebab />
					</span>
				)}>
				<Dropdown.Item>Edit</Dropdown.Item>
				<Dropdown.Item>Delete</Dropdown.Item>
				<Dropdown.Item>Important</Dropdown.Item>
			</Dropdown>
		</div>
	);
}
