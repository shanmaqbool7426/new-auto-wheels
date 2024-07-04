export const fetchAPI = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }
    return response.json();
  };
  