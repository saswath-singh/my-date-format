function getDateInFormat (date, format) {
    try {
        // Input validation
        if (!(date instanceof Date)) {
            if (typeof date === 'string') {
                date = new Date(date);
            } else {
                throw new Error('Invalid date input. Expected a Date object or a string.');
            }
        }

        const replacements = {
            yyyy: date.getFullYear(),
            mmmm: date.toLocaleString("default", { month: "long" }),
            mmm: date.toLocaleString("default", { month: "short" }),
            mm: ('0' + (date.getMonth() + 1)).slice(-2),
            dd: ('0' + date.getDate()).slice(-2),
            hh: ('0' + date.getHours()).slice(-2),
            ii: ('0' + date.getMinutes()).slice(-2),
            ss: ('0' + date.getSeconds()).slice(-2),
            day: date.toLocaleDateString("en-IN", { weekday: "short" })
        };

        // Using regular expression with a replacement function
        const result = format.replace(/(yyyy|mmmm|mmm|mm|dd|hh|ii|ss|day)/g, (match, p1) => {
            return replacements[p1] || match; // If replacement exists, use it; otherwise, keep the original
        });

        return result;
    } catch (err) {
        // Throw a new error or return a default value.
        throw new Error('Error formatting date: ' + err.message);
    }
};

module.exports = getDateInFormat
