import Cards from "./cards";
import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";
import SuggestionHeader from "./SuggestionHeader";
const Suggestions = () => {
  return (
    <div className="w-[68.5625rem] flex  space-x-10">
      <section className="w-[16rem] h-full flex flex-col space-y-4">
        <Cards />
      </section>
      <section className="w-[51.5625rem] h-full flex flex-col space-y-3 ">
        <SuggestionHeader />
        {/*  <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion /> */}
        <SuggestionEmpty />
      </section>
    </div>
  );
};

export default Suggestions;
