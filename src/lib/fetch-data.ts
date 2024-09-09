export const fetchData = async () => {
    const response = await fetch('http://localhost:8787/api/users');
    const data = await response.json();
    return data
}