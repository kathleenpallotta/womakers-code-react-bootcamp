export const DISPLAY_GIFS = 'DISPLAY_GIFS'
export const QUERY = 'QUERY'
export function getGifs(item) {
    return {
        type: DISPLAY_GIFS, item
    }
}

export function getQuery(item) {
    return {
        type: QUERY, item
    }
}