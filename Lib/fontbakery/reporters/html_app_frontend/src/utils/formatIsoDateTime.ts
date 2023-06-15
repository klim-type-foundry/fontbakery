export default function formatIsoDateTime(isoDateTime: string): string {
    if (!isoDateTime) {
        return;
    }
    const date = new Date(isoDateTime);
    console.log(date);
    if (date.getFullYear() <= 1970) {
        throw Error(`Invalid date: ${isoDateTime} -> ${date}`);
    }

    const dateParts = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        hourCycle: 'h12',
        minute: 'numeric',
    }).formatToParts(date);

    const day = dateParts.find((dp) => dp.type === 'day')?.value;
    const month = dateParts.find((dp) => dp.type === 'month')?.value;
    const year = dateParts.find((dp) => dp.type === 'year')?.value;

    if (day === undefined || month === undefined || year === undefined) {
        throw Error(`Invalid date parts: ${isoDateTime} -> ${date} (${day}-${month}-${year})`);
    }

    const dateOut = `${day} ${month} ${year}`;

    const hour = dateParts.find((dp) => dp.type === 'hour')?.value;
    const minute = dateParts.find((dp) => dp.type === 'minute')?.value;
    const dayPeriod = dateParts.find((dp) => dp.type === 'dayPeriod')?.value.toLowerCase();

    if (hour === undefined || minute === undefined) {
        throw Error(`Invalid time parts: ${isoDateTime} -> ${date} (${hour}:${minute})`);
    }

    return `${dateOut} at ${hour}:${minute}${dayPeriod !== undefined ? dayPeriod : ''}`;
}
