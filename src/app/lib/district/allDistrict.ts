export async function fetchAllDistricts() {
    const res = await fetch('http://127.0.0.1:8000/management/api/district/');
    return res.json();
}