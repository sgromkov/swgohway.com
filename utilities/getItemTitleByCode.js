export default function getItemTitleByCode(code, items) {
    const foundItem = items.filter((item) => item.code === code)[0];

    return foundItem.title;
}
