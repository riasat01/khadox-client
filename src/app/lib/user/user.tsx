import { UserInterface } from "@/app/_interfaces/user-interface/UserInterface";
import { baseUrl } from "@/app/_util/BaseURL";

export const registerUser = async (userInfo: UserInterface) => {
    const res = await fetch(`${baseUrl}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    return res.json();
}