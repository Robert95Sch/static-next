export const fetchTutors = async ()  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTutors`)
    const getTutors = await res.json();
    return getTutors;
}

