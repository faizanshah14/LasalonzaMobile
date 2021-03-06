export const baseUrl = 'http://192.168.250.2:3000/api';
export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')):JSON.parse(sessionStorage.getItem('user'));
    if (user && user.accessToken) {
        return { 
            contentType: "application/json",
            Authorization: `Bearer ${user.accessToken}` 
        };
    } else {
        return {
            contentType: "application/json",
        };
    }
}
export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')):JSON.parse(sessionStorage.getItem('user'));
    if (user && user.accessToken) {
        return user;
    } else {
        return null;
    }
}