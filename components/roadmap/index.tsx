function Header() {
  return (
    <div className="bg-[#373F68] h-[4.5rem] rounded-md flex items-center justify-between space-x-7 px-5">
      <div className="flex flex-col items-start justify-center space-y-2">
        <div className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-4 stroke-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <p className="text-white text-xs font-bold">Go back</p>
        </div>
        <h1 className="text-white text-lg font-bold">Roadmap</h1>
      </div>

      <button className="bg-simple-purple text-white py-2 px-4 rounded-md">+ Add Feedback</button>
    </div>
  );
}

function Box() {
  return (
    <div className="w-[21.875rem] h-[17rem] bg-white mt-2 p-6 rounded-md border-t-4 border-t-light-orange">
      <div className="w-[17.875rem] flex items-center justify-start space-x-4 py-1.5 ">
        <div className="w-2 h-2 rounded-full bg-red-300" />
        <span className="text-medium-grey">Planned</span>
      </div>
      <h2 className="w-[17.875rem ]text-slate-blue font-bold text-lg">
        More comprehensive reports
      </h2>
      <h3 className="w-[17.875rem] text-medium-grey mt-1 ">
        It would be great to see a more detailed breakdown of solutions.
      </h3>
      <div className=" mt-3 text-[0.825rem] inline-block items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
        Feature
      </div>
      <div className="w-[17.875rem] flex justify-between items-center mt-4 ">
        <div className=" rounded-md flex p-2 h-fit justify-between items-center bg-very-light-blue ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            className="w-6 h-3 stroke-simple-blue "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          <span className="inline-flex text-slate-blue font-bold text-sm">112</span>
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
          <span className="inline-flex text-slate-blue font-bold text-sm">2</span>
        </div>
      </div>
    </div>
  );
}
export default function Roadmap() {
  return (
    <div className="w-[69.375rem]">
      <Header />
      <div className="flex space-x-8 mt-12">
        <div className="flex flex-col space-y-2">
          <h2 className="text-slate-blue font-bold text-lg ">Planned (2)</h2>
          <h3 className="text-medium-grey">Ideas prioritized for research</h3>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-slate-blue font-bold text-lg ">Planned (2)</h2>
          <h3 className="text-medium-grey">Ideas prioritized for research</h3>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-slate-blue font-bold text-lg ">Planned (2)</h2>
          <h3 className="text-medium-grey">Ideas prioritized for research</h3>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}
