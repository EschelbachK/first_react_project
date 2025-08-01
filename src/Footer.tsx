export default function Footer() {
    return (
        <footer style={{ textAlign: "center", marginTop: 60, fontSize: 12 }}>
            <p>
                &copy; {new Date().getFullYear()} Kai Eschelbach
            </p>
        </footer>
    );
}