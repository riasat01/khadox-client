import { baseUrl } from "@/app/_util/BaseURL";

export async function fetchAllDistricts() {
    const res = await fetch(`${baseUrl}/management/api/district/`);
    return res.json();
}