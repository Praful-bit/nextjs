import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const addMeetUpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/new-meetup`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Failed to add new todo", error);
    }
  };

  const getTodos = async () => {
    try {
      const res = await fetch(`/api/new-meetup`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setTodos(data);
        console.log(data)
      } else {
        console.error("Unexpected data format", data);
      }
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  };
 console.log(todos)
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <header className="flex bg-violet-800 py-3 px-24 flex-row justify-between items-center w-full">
        <div>
          <h1 className="font-serif text-4xl font-bold text-white">ToDo</h1>
        </div>
        <div>
          <Link
            className="hover:underline hover:text-orange-500 pr-6 text-2xl text-white"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:underline hover:text-orange-500 pr-6 text-2xl text-white"
            href="/news/something"
          >
            Some-Thing
          </Link>
        </div>
      </header>
      <main className="flex items-center justify-center min-h-screen bg-gray-900 w-full">
        <section className="flex flex-col bg-white p-8 rounded-lg w-full max-w-2xl">
          <form onSubmit={addMeetUpHandler} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                className="text-black py-2 px-3 border border-gray-300 rounded-md w-full"
                value={title}
                placeholder="Enter Your Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Description
              </label>
              <input
                type="text"
                className="text-black py-2 px-3 border border-gray-300 rounded-md w-full"
                value={description}
                placeholder="Enter Your Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-xl">
              Submit
            </button>
          </form>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Todos</h2>
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li key={todo.id} className="border-b border-gray-300 py-2">
                  <h3 className="text-xl text-black">{todo.data.title}</h3>
                  <p className="text-black">{todo.data.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
