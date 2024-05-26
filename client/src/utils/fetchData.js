export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

// export const fetchData = async (url, options, retries = 3, delay = 1000) => {
//     try {
//       const response = await fetch(url, options);
      
//       if (!response.ok) {
//         if (response.status === 429 && retries > 0) {
//           await new Promise(resolve => setTimeout(resolve, delay));
//           return fetchData(url, options, retries - 1, delay * 2); 
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
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const nutrientOptions= {
    method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
		'x-rapidapi-host': 'nutrition-calculator.p.rapidapi.com'
	}
}