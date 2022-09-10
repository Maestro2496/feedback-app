import Cards from "./cards";
import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";
import SuggestionHeader from "./SuggestionHeader";
import data from "../../data.json";
import {useAppSelector} from "../../store/hooks";
import {useMemo, useEffect, useState} from "react";
import {FeedBackDetails} from "../feedbacks";
import MobileHeader from "./mobile/Header";
import MobileSideBar from "./mobile/SideBar";

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
      <div className="md:w-[43.0625rem] lg:w-[68.5625rem] lg:flex  lg:space-x-10 lg:space-y-0 md:space-y-8">
        <MobileHeader />
        <MobileSideBar
          setFilteredPRequest={setFilteredPRequests}
          filteredRequests={filteredPRequests}
        />
        <section className="hidden lg:w-[16rem]  lg:h-full md:grid grid-cols-3 gap-x-2  lg:flex lg:flex-col lg:space-y-4">
          <Cards setFilteredPRequest={setFilteredPRequests} filteredRequests={filteredPRequests} />
        </section>
        <section className="  lg:w-[51.5625rem] h-full flex flex-col space-y-3 ">
          <SuggestionHeader setFilteredPRequests={setFilteredPRequests} />
          {filteredPRequests.length === 0 && <SuggestionEmpty />}
          <div className="h-full flex flex-col space-y-3 mx-6 md:mx-0 pb-2">
            {filteredPRequests.map((suggestion) => (
              <Suggestion key={suggestion.id} {...suggestion} />
            ))}
          </div>
        </section>
      </div>
    );
  return null;
};

export default Suggestions;
