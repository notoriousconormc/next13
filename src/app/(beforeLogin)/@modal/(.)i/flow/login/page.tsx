'use client';

import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
    return null;
}

//router.push
//1                2                      3
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기누를때 3번에서 2번으로감 근데 2번으로가면 다시3번으로가게 코드를짜놨기때문에 무한반복임

//router.replace
//  1                    2                       3
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
