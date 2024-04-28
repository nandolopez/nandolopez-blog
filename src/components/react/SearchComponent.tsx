import { useState } from "react";
import SearchIcon from "../../assets/SearchIcon.svg";


/**
 * 
 * @param param post: list of posts to find
 * 
 * @returns  Search input component and wrapper to show the results
 * 
 */
const SearchComponent = ({ posts }: any) => {

  // Array of posts to save the search results
  const [query, setQuery] = useState<any[]>([]);

  // For hidden the "x" for delete the content in this case dirt the view
  const onBlurSearchInput = () => {
    document.getElementById("searchResults")?.classList.add("hidden");
  };
  const onFocusSearchInput = () => {
    document.getElementById("searchResults")?.classList.remove("hidden");
  };


  /**
   * 
   * @param event Search input Event
   * 
   * 1. Check that has something wrote in search input
   * 2. If has something, find in posts setting the search term and parameters
   * in low case.
   */
  const onchange = (event: any) => {
    const input = event.target.value.toLowerCase();

    //make disappear search results if search input is clean
    if (input.length === 0) onBlurSearchInput();

    const results = posts.filter((element: any) => {
      return (
        element.title.toLowerCase().includes(input) ||
        element.description.toLowerCase().includes(input) ||
        element.slug.toLowerCase().includes(input)
      );
    });

    setQuery(results);
  };

  /**
   * Viewer of search results for some reason react give errors setting in the code
   * the best solution was abstract it in a variable
   */
  const showQueryResults = query.map((post: any, index: number) => {
    return (
      <a
        key={index}
        href={`/blog/post/${post.slug}w-`}
        className="border-b-2 border-b-slate-700 hover:bg-indigo-900 hover:text-white p-4 rounded"
      >
        <h4>{post.title}</h4>
        <p>{post.description}</p>
      </a>
    );
  });
  
  return (
    <div className="flex flex-col relative">
      <div className="bg-gradient-to-r from-cyan-300 to-indigo-800 p-0.5 flex relative rounded-md">
        <input
          type="search"
          onChange={($event) => onchange($event)}
          onBlur={onBlurSearchInput}
          onFocus={onFocusSearchInput}
          className="bg-slate-950 px-4 py-2 rounded-md text-slate-300"
        />
        <img
          src={SearchIcon.src}
          alt="Search"
          className="right-2 top-2 absolute max-w-6"
        />

      </div>
      <div id="searchResults" className="relative hidden md:w-full w-85 z-10">
        <div className="absolute bg-white flex flex-col  mt-2 rounded text-black">
          {showQueryResults}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
