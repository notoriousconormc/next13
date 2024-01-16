export default function AfterLoginLayout({ children }) {
    return (
        <div>
            <div>{children}</div>
            <div>afterlogin</div>
        </div>
    );
}
