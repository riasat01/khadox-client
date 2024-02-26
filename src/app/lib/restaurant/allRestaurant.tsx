export async function fetchAllRestaurants() {
    const res = await fetch('http://127.0.0.1:8000/management/api/restaurant/')
    return res?.json();
}

export async function fetchRestaurantByDistrict(id: string) {
    const res = await fetch(`http://127.0.0.1:8000/management/api/restaurant/${id}`);
    return res?.json();
}