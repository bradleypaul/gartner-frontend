export function formatCSV(categories) {
    if (categories) {
        return categories.trim().split(',').map(category => {
            return parseInt(category, 10);
        });
    } else {
        return [];
    }
}
