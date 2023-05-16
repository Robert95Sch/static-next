export const fetchMainPage = async ()  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainPageInfo`)
    const mainPageInfo = await res.json();
    return mainPageInfo;
}

