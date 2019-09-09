export const fetchCategories = () => (
    $.ajax({
        method: 'GET',
        url: 'api/categories'
    })
);

export const fetchCategory = id => (
    $.ajax({
        method: 'GET',
        url: `api/categories/${id}`
    })
)