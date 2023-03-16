import GetStarted from "./GetStarted";
import PopularSearches from "./PopularSearches";
import PostingSuggestions from "./PostingSuggestions";
import ProminentCompanies from "./ProminentCompanies";
import ProminentPostings from "./ProminentPostings";

export default function Main() {
  return (
    <main>
      <PopularSearches />
      <ProminentPostings />
      <GetStarted />
      <ProminentCompanies />
      <PostingSuggestions />
    </main>
  )
}