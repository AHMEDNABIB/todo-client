export default async function getAllTodos() {
    const res = await fetch('http://localhost:5000/todo')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

// await fetch("http://localhost:3000/api/data");