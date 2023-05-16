export const fetchQuestions = async ()  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getQuestions`)
    const questions = await res.json();
    return questions;
}

