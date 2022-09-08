import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon, PlusIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
const people = [
  {id: 1, name: "Wade Cooper"},
  {id: 2, name: "Arlene Mccoy"},
  {id: 3, name: "Devon Webb"},
  {id: 4, name: "Tom Cook"},
];

function CustomSelect() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <>
          <div className="relative mt-3 ">
            <Listbox.Button className="h-[3rem] relative w-full cursor-default rounded-md border border-gray-300 bg-very-light-blue py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({active}) =>
                      clsx(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({selected, active}) => (
                      <>
                        <span
                          className={clsx(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default function NewFeedBack() {
  return (
    <div className=" max-w-[33.75rem] mx-auto flex flex-col items-center justify-center space-y-8">
      <div className="flex justify-start items-center w-full">
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
      </div>
      <div className="bg-white  flex flex-col justify-center items-start space-y-8 p-8 rounded-md w-full">
        <div className="w-12 h-12 -mt-[52px] z-10 rounded-full -top-6 bg-[url('/images/background-header.png')] bg-cover flex items-center justify-center">
          <PlusIcon className="fill-white w-10 h-10" />
        </div>
        <h1 className="text-slate-blue font-bold text-2xl">Create new feedback</h1>
        <div className="w-full ">
          <h2 className="text-slate-blue font-bold text-sm">Feedback Title</h2>
          <h3 className="text-medium-grey text-sm">Add a short, descriptive headline</h3>
          <input className="bg-very-light-blue w-full h-[3rem] mt-3 rounded-md" />
        </div>
        <div className="w-full ">
          <h2 className="text-slate-blue font-bold text-sm">Category</h2>
          <h3 className="text-medium-grey text-sm">Choose a category for your feedback</h3>
          <CustomSelect />
        </div>
        <div className="w-full ">
          <h2 className="text-slate-blue font-bold text-sm">Feedback Detail</h2>
          <h3 className="text-medium-grey text-sm">
            Include any specific comments on what should be improved, added, etc.
          </h3>
          <textarea className="bg-very-light-blue w-full h-[6rem] mt-3 rounded-md" />
          <div className="w-full flex items-center justify-end space-x-3 mt-3 ">
            <button className="bg-slate-blue text-white py-2 px-4 rounded-md">Cancel</button>
            <button className="bg-simple-purple text-white py-2 px-4 rounded-md">
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}