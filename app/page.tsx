import getAllUsers from '@/lib/getAllUsers'
import getAllTodos from '@/lib/getAllTodos'
import Link from "next/link"

import TableTodo from "./components/TableTodo";

export default async function Home() {

    const dataTodo = getAllTodos()

	const {data} = await dataTodo;

	console.log(data)

	return (
		<main>
			<TableTodo data={data} />
		</main>
	);

	
}
