export const formatPeriod = (iso: string) => {
    if (/^\d{4}-\d{2}$/.test(iso)) {
        const [y, m] = iso.split('-');
        return `${m}/${y}`;
    }
    return iso;
};

const toTs = (iso: string) =>
    /^\d{4}-\d{2}$/.test(iso)
        ? new Date(`${iso}-01`).getTime()
        : /^\d{4}$/.test(iso)
          ? new Date(`${iso}-01-01`).getTime()
          : 0;

export const endTs = (end?: string) => (end ? toTs(end) : Number.POSITIVE_INFINITY);
export const startTs = (start: string) => toTs(start);
