export const addressShortner = (address) => {
    return address.slice(1,6) + '.....' + address.slice(15, address[length-1]);
}