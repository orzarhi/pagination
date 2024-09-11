export const fetchData = async (page: string) => {
  const response = await fetch(`http://localhost:8787/api/users?page=${page}`);
  return response.json();
};
