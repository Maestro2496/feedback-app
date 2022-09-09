import Cards from "./cards";
import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";
import SuggestionHeader from "./SuggestionHeader";
import data from "../../data.json";
import {useAppSelector} from "../../store/hooks";
import {useMemo} from "react";

const Suggestions = () => {
  const productRequests = useAppSelector((state) => state.productRequests);
  const suggestions = useMemo(() => {
    return productRequests.filter((productRequest) => productRequest.status === "suggestion");
  }, [productRequests]);

  return (
    <div className="w-[68.5625rem] flex  space-x-10">
      <section className="w-[16rem] h-full flex flex-col space-y-4">
        <Cards />
      </section>
      <section className="w-[51.5625rem] h-full flex flex-col space-y-3 ">
        <SuggestionHeader />
        <>
          {suggestions.map((suggestion) => (
            <Suggestion key={suggestion.id} {...suggestion} />
          ))}
        </>
      </section>
    </div>
  );
};

export default Suggestions;
