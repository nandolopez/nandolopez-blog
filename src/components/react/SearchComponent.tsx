import { useEffect, useState } from "react";

const SearchComponent = ({ posts }: any) => {
 

  useEffect(()=>{ console.log(posts)},[])


  const [searchResutls, setSearchResults] = useState<any[]>()

  const onInputSearchInput = (event: any) => {

    const input = event.target.value.toLowerCase()
    
    const results = posts.filter((element: any) =>{
      return (  
        element.title.toLowerCase().includes(input) ||
        element.description.toLowerCase().includes(input) ||
        element.slug.toLowerCase().includes(input)
      )
    });
    
    console.log(results)
    

    setSearchResults(results)
    
  };

  const setResults = () =>{
    if(searchResutls.length > 0) {
      return (
          <div className="bt-white flex flex-col gap-2 p-4 z-10">
              {
              searchResutls.map((post:any) => {
                  return (
                    <a href={`/blog/${post.slug}/`}>
                      <h4>{post.data.title}</h4>
                      <p>{post.data.description}</p>
                    </a>
                  );
                })
              }
          </div>
      )
    }
  }

  return (
    <>
      <input
        type="search"
        onInput={($event) => onInputSearchInput($event)}
        list="searchResults"
        className="border border-indigo-950 dark:border-sky-200 px-4 py-2 rounded-full text-black bg-transparent"
      />
      { setResults() }
    </>
  );
};

export default SearchComponent;
