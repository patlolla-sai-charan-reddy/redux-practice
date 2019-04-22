export const UPDATE_USER = 'changeUser';

export function triggerUser(val) {
    return {
        type: UPDATE_USER,
        name: val
    }
}