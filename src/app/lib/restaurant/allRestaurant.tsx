import { baseUrl } from "@/app/_util/BaseURL";

export async function fetchAllRestaurants() {
    const res = await fetch(`${baseUrl}/management/api/restaurant/`);
    return res?.json();
}

export async function fetchRestaurantByDistrict(id: string) {
    const res = await fetch(`${baseUrl}/management/api/restaurant/${id}`);
    return res?.json();
}