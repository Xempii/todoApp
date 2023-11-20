"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className=" w-full border border-slate-500 rounded-md px-8 py-3 gap-3"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        className=" w-full border border-slate-500 rounded-md px-8 py-3 gap-3"
        type="text"
        placeholder="Topic Descript"
      />
      <button
        type="submit"
        className="rounded-md bg-green-600 text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
