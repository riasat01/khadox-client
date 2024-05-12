import { baseUrl } from "@/app/_util/BaseURL";

export async function fetchAllFoods (){
    const res = await fetch(`${baseUrl}/management/api/food/`);
    return res?.json();
}