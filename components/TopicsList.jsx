import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiMenuAlt1, HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Topics!!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics && topics.length > 0 ? (
        topics.map((topic) => (
          <div
            className="p-4 border border-slate-300 my-3 flex justify-between items-center rounded-md shadow-lg"
            key={topic._id}
          >
            <div>
              <h2 className="font-bold text-2xl">{topic.title}</h2>
              <div>{topic.desc}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-3xl">No Topic</h1>
        </div>
      )}
    </>
  );
};

export default TopicsList;
