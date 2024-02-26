export async function fetchAllRestaurants() {
    const res = await fetch('http://127.0.0.1:8000/management/api/restaurant/')
    return res.json();
}