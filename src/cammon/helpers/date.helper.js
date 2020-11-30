export const currentYear = () => {
    const date = new Date();
    return  date.getFullYear();
};

export const currentMonth = () => {
    const date = new Date();
    return  date.getMonth();
};

export const dateRange = (first, last, step) => {
    let a = [first], b = first;
    while (b < last) {
        a.push(b += step || 1);
    }
    return (b > last) ? a.slice(0,-1) : a;
};

export const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

export const getFirstDayInMonth = (month, year) => new Date(year + "-" + ( month + 1 ) + "-01").getDay();
