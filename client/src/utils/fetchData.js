export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

// export const fetchData = async (url, options, retries = 3, delay = 1000) => {
//     try {
//       const response = await fetch(url, options);
      
//       // If response is not OK, throw an error
//       if (!response.ok) {
//         if (response.status === 429 && retries > 0) {
//           // If rate limited, wait for the delay and retry
//           await new Promise(resolve => setTimeout(resolve, delay));
//           return fetchData(url, options, retries - 1, delay * 2); // Double the delay for next attempt
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Fetch error:', error);
//       throw error;
//     }
//   };
  

//using these exerciseOptions to set the host , key , limit etc things while fetching data from API

export const exerciseOptions = {
    method: 'GET',
    params: { limit: '1000' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    // params: {
    //     id: 'UCE_M8A5yxnLfW0KghEeajjw'
    // },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }

}