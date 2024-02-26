export async function fetchAllFoods (){
    const res = await fetch('http://127.0.0.1:8000/management/api/food/')
    return res?.json();
}