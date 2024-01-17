"use client";

import { Sidebar } from "flowbite-react";
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiTagSimpleFill } from "react-icons/pi";

import Link from "next/link";
import ModalTodo from "./ModalTodo";



export default function SidbarTodo() {
	return (
		<Sidebar
			className="  top-4 mx-3 rounded-lg border-2 bg-white border-gray-200 "
			aria-label="Sidebar with content separator example">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item icon={FaClipboardList}>TodoList</Sidebar.Item>
				</Sidebar.ItemGroup>
				<Sidebar.ItemGroup>
					<Sidebar.Item icon={BsListCheck}>
						<Link href="/">Inbox</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={FaRegThumbsUp}>
						<Link href="/done">Done</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={FaRegStar}>
						<Link href="/important">Important</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={FaRegTrashCan}>
						<Link href="/trash">Trash</Link>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
				<Sidebar.ItemGroup>
					<Sidebar.Item>Tags</Sidebar.Item>
					<Sidebar.Item href="#" icon={PiTagSimpleFill}>
						Team
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={PiTagSimpleFill}>
						Low
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={PiTagSimpleFill}>
						High
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={PiTagSimpleFill}>
						Medium
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={PiTagSimpleFill}>
						Update
					</Sidebar.Item>
					<Sidebar.Item >
						<ModalTodo/>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}


