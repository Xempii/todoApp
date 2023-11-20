"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, desc }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDesc }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic!!");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className=" w-full border border-slate-500 rounded-md px-8 py-3 gap-3"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setNewDesc(e.target.value)}
        value={newDesc}
        className=" w-full border border-slate-500 rounded-md px-8 py-3 gap-3"
        type="text"
        placeholder="Topic Descript"
      />
      <button className="rounded-md bg-green-600 text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
