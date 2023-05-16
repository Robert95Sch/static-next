export const fetchSiteSettings = async ()  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSiteSettings`)
    const settings = await res.json();
    return settings;
}

