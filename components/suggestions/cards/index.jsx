const Board = () => {
  return (
    <div className="bg-[url('/images/background-header.png')] h-[8.5625rem] px-6 pb-6 rounded-md text-white flex justify-start items-end">
      <div>
        <h1 className="font-bold text-[1.25rem]">Frontend Mentor</h1>
        <h2 className="font-light text-[0.9325rem]">Feedback board</h2>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="h-[10.375rem] w-full bg-white rounded-md  py-4 px-2 flex items-center justify-center">
      <div className="space-x-3 space-y-2 ">
        <span className="text-[0.825rem] ml-3 inline-block  items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          All
        </span>
        <span className="text-[0.825rem] inline-block items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          UI
        </span>
        <span className="text-[0.825rem] inline-block  items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          UX
        </span>
        <span className="text-[0.825rem] inline-block items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          Enhancements
        </span>
        <span className="text-[0.825rem] inline-block items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          Bug
        </span>
        <span className="text-[0.825rem] inline-block items-center rounded-md bg-very-light-blue px-5 py-2 text-sm font-semibold text-simple-blue">
          Feature
        </span>
      </div>
    </div>
  );
};
const RoadMap = () => {
  return (
    <div className="h-fit bg-white rounded-md flex py-4 px-3">
      <table className="w-full h-full">
        <thead className="h-12">
          <tr>
            <th className="text-slate-blue font-bold text-lg text-left">Roadmap</th>
            <th className="text-simple-blue font-semibold underline underline-offset-2 text-[0.8125rem]">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center justify-start space-x-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-red-300" />
              <span className="text-medium-grey">Planned</span>
            </td>
            <td className="text-center text-medium-grey font-bold">2</td>
          </tr>
          <tr>
            <td className="flex items-center justify-start space-x-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-simple-purple" />
              <span className="text-medium-grey">In-progress</span>
            </td>
            <td className="text-center text-medium-grey font-bold">2</td>
          </tr>
          <tr>
            <td className="flex items-center justify-start space-x-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-sky-blue" />
              <span className="text-medium-grey">Live</span>
            </td>
            <td className="text-center text-medium-grey font-bold">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Cards = () => {
  return (
    <>
      <Board />
      <Categories />
      <RoadMap />
    </>
  );
};

export default Cards;
