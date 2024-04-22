import { useState } from "react";

const SearchComponent = ({ posts }: any) => {
  const [query, setQuery] = useState<any[]>([]);

  const onBlurSearchInput = () => {
    document.getElementById("searchResults")?.classList.add("hidden");
  };
  const onFocusSearchInput = () => {
    document.getElementById("searchResults")?.classList.remove("hidden");
  };

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

  const showQueryResults = query.map((post: any, index: number) => {
    return (
      <a
        key={index}
        href={`/blog/${post.slug}/`}
        className="border-b-2 border-b-slate-700 hover:bg-indigo-900 hover:text-white p-4 rounded"
      >
        <h4>{post.title}</h4>
        <p>{post.description}</p>
      </a>
    );
  });

  return (
    <>
      <input
        type="search"
        onChange={($event) => onchange($event)}
        onBlur={onBlurSearchInput}
        onFocus={onFocusSearchInput}
        list="query"
        className="bg-white border border-indigo-950 dark:border-sky-200 px-4 py-2 rounded-full text-black bg-transparent"
      />
      <div
        id="searchResults"
        className="absolute bg-white flex flex-col hidden mt-2 rounded text-black z-10"
      >
        {showQueryResults}
      </div>
    </>
  );
};

export default SearchComponent;
