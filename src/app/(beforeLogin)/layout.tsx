import { ReactNode } from 'react';
import styles from '@/app/page.module.css';
type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <div className={styles.container}>
            before login layout
            {children}
            {modal}
        </div>
    );
}
