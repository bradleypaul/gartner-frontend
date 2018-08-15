export function getProductId (): number {
    return parseInt(window.location.pathname.split('/').slice(-1)[0], 10);
}
