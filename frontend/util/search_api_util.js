export const fetchSearchProducts = search_query => (
    $.ajax({
        method: 'GET',
        url: 'api/search_products',
        data: {search_query: search_query}
    })
) 

