import Link from "next/link";
import React from "react";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
  />
</svg>;

export default function Suggestion({title, description, upvotes, comments, category, id}) {
  return (
    <Link passHref href={`/feedback/${id}`}>
      <div className="cursor-pointer bg-white w-full flex space-x-10 px-8 py-8 h-[9.4rem] rounded-md shadow-md">
        <div className="h-1/2 rounded-md flex flex-col space-y-1 justify-start items-center bg-very-light-blue ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-8 h-4 stroke-simple-blue"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          <span className="inline-flex text-slate-blue font-bold text-sm">{upvotes}</span>
        </div>
        <div className="space-y-2 flex-1">
          <h2 className="font-bold text-slate-blue">{title}</h2>
          <p className="text-medium-grey ">{description}</p>
          <span className="inline-flex items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-medium text-simple-blue">
            {category}
          </span>
        </div>
        <div className="flex space-x-1 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#CDD2EE"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          <span className="inline-flex text-slate-blue font-bold text-sm">{comments.length}</span>
        </div>
      </div>
    </Link>
  );
}
