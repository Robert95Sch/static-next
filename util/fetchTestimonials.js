export const fetchTestimonials = async ()  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonials`)
    const getTestimonials = await res.json();
    return getTestimonials;
}

