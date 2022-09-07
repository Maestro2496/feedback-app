import Image from "next/image";
import React, {useState} from "react";
import Suggestion from "../suggestions/Suggestion";
import clsx from "clsx";

const Reply = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  return (
    <div className={clsx("flex space-x-6 mt-4 p-2 rounded-md")}>
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src="/images/image-elijah.jpg"
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">Elijah Moss</h2>
            <p className="text-medium-grey">@hexagon.pestagon</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div>
          <p className="text-medium-grey">
            Also, please allow styles to be applied based on system preferences. I would love to be
            able to browse Frontend Mentor in the evening after my device’s dark mode turns on
          </p>
          <div
            className={clsx(
              "flex justify-between w-full mt-6 transform transition-all duration-300",
              showReplyBox ? "opacity-1  translate-y-0" : "opacity-0 h-0 -translate-y-[100%]"
            )}
          >
            <textarea className="w-[80%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4" />
            <button className="h-1/2 bg-simple-purple text-white py-2 px-3 rounded-md">
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentWithoutReply = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  return (
    <div className="flex space-x-6  px-2 py-6  border-b border-b-gray-300">
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src="/images/image-elijah.jpg"
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">Elijah Moss</h2>
            <p className="text-medium-grey">@hexagon.pestagon</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div>
          <p className="text-medium-grey">
            Also, please allow styles to be applied based on system preferences. I would love to be
            able to browse Frontend Mentor in the evening after my device’s dark mode turns on
            without the bright background it currently has. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet magnam ipsum officia quo laboriosam aliquid
          </p>
          <div
            className={clsx(
              "justify-between w-full mt-6 transform transition-all duration-300 ",
              showReplyBox ? "flex" : "hidden"
            )}
          >
            <textarea className="w-[80%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4" />
            <button className="h-1/2 bg-simple-purple text-white py-2 px-3 rounded-md">
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentWithReply = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  return (
    <div className="flex space-x-6 mt-4  p-2  ">
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src="/images/image-elijah.jpg"
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className=" h-[60%] bg-gray-300 rounded-md  w-[1px]" />
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">Elijah Moss</h2>
            <p className="text-medium-grey">@hexagon.pestagon</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div>
          <p className="text-medium-grey">
            Also, please allow styles to be applied based on system preferences. I would love to be
            able to browse Frontend Mentor in the evening after my device’s dark mode turns on
            without the bright background it currently has. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet magnam ipsum officia quo laboriosam aliquid
          </p>
          <div
            className={clsx(
              "flex justify-between w-full mt-6 transform transition-all duration-300",
              showReplyBox ? "opacity-1  translate-y-0" : "opacity-0 h-0 -translate-y-[100%]"
            )}
          >
            <textarea className="w-[80%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4" />
            <button className="h-1/2 bg-simple-purple text-white py-2 px-3 rounded-md">
              Post Reply
            </button>
          </div>
          <Reply />
          <Reply />
        </div>
      </div>
    </div>
  );
};
const Comments = () => {
  return (
    <section className="rounded-md bg-white px-8 py-3">
      <h1 className="text-slate-blue font-bold text-lg">4 comments</h1>
      <CommentWithoutReply />
      <CommentWithReply />
    </section>
  );
};

export default function FeedBackDetails() {
  return (
    <div className="max-w-[45.625rem] mx-auto space-y-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-4 stroke-simple-blue"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <p className="text-medium-grey font-bold">Go back</p>
        </div>
        <button className="text-white bg-[#7C91F9] py-2 px-6 rounded-md">Edit feedback</button>
      </div>
      <Suggestion />
      <Comments />
      <div className="bg-white px-4 py-6 rounded-md flex flex-col space-y-3 items-center justify-center">
        <h2 className="text-left w-full text-slate-blue text-lg font-bold">Add comment</h2>
        <textarea
          className="w-full h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4"
          placeholder="Type your comment here"
        />
        <div className="w-full flex justify-between items-center">
          <p className="text-medium-grey">250 characters left</p>
          <button className="text-white bg-simple-purple px-4 py-2 rounded-md">Post comment</button>
        </div>
      </div>
    </div>
  );
}
