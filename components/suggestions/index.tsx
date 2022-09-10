import Cards from "./cards";
import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";
import SuggestionHeader from "./SuggestionHeader";
import data from "../../data.json";
import {useAppSelector} from "../../store/hooks";
import {useMemo, useEffect, useState} from "react";
import {FeedBackDetails} from "../feedbacks";

const Suggestions = () => {
  const [filteredPRequests, setFilteredPRequests] = useState<FeedBackDetails[]>();

  const productRequests = useAppSelector((state) => state.productRequests);
  useEffect(() => {
    const suggestions = productRequests
      .filter((productRequest) => productRequest.status === "suggestion")
      .sort((a, b) => b.upvotes - a.upvotes);
    setFilteredPRequests(suggestions);
  }, [productRequests]);
  if (filteredPRequests)
    return (
      <div className="w-[43.0625rem] lg:w-[68.5625rem] lg:flex  lg:space-x-10 lg:space-y-0 space-y-8">
        <section className="lg:w-[16rem]  lg:h-full grid grid-cols-3 gap-x-2  lg:flex lg:flex-col lg:space-y-4">
          <Cards setFilteredPRequest={setFilteredPRequests} filteredRequests={filteredPRequests} />
        </section>
        <section className="lg:w-[51.5625rem] h-full flex flex-col space-y-3 ">
          <SuggestionHeader setFilteredPRequests={setFilteredPRequests} />
          {filteredPRequests.length === 0 && <SuggestionEmpty />}
          <>
            {filteredPRequests.map((suggestion) => (
              <Suggestion key={suggestion.id} {...suggestion} />
            ))}
          </>
        </section>
      </div>
    );
  return null;
};

export default Suggestions;
