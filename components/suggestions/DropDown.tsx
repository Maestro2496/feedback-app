/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState, useEffect, Dispatch, SetStateAction} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {CheckIcon} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {FeedBackDetails} from "../feedbacks";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const votes = ["Most Upvotes", "Least Upvotes", "Most comments", "Least comments"];
export default function UpVoteDropDown({
  setFilteredPRequests,
}: {
  setFilteredPRequests: Dispatch<SetStateAction<FeedBackDetails[]>>;
}) {
  const [selected, setSelected] = useState(votes[0]);
  useEffect(() => {
    setFilteredPRequests((productRequests) => {
      const copy = structuredClone(productRequests);
      switch (selected) {
        case "Most Upvotes": {
          return copy.sort((a, b) => b.upvotes - a.upvotes);
        }
        case "Least Upvotes": {
          return copy.sort((a, b) => a.upvotes - b.upvotes);
        }
        case "Most comments": {
          return copy.sort((a, b) => b.comments.length - a.comments.length);
        }
        case "Least comments": {
          return copy.sort((a, b) => a.comments.length - b.comments.length);
        }
        default: {
          return productRequests;
        }
      }
    });
  }, [selected, setFilteredPRequests]);
  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  text-sm font-medium text-very-light-blue shadow-sm  ">
          {selected}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-8 md:right-0  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {votes.map((vote) => (
              <Menu.Item key={vote}>
                {({active}) => (
                  <button
                    onClick={() => setSelected(vote)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                      "flex justify-between items-center px-4 py-2 text-sm w-full text-left border-b-gray-300 border-b"
                    )}
                  >
                    <span className={clsx(active && "text-simple-purple font-bold")}>{vote}</span>
                    {selected === vote && (
                      <CheckIcon className={clsx("w-4 h-4 stroke-simple-purple")} strokeWidth={2} />
                    )}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
