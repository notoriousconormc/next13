import { ReactNode } from 'react';

export default async function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div>{children}</div>
            <h1>good</h1>
        </div>
    );
}
