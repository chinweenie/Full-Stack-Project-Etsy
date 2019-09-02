export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {user: user}
    })
)
export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {user: user}
    })
)
export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)