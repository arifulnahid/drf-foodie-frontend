export const calculateTotalPrice = (items = []) => {
    let t = items.reduce((prev, cur) => prev+cur.item.price, 0)
    return t
}