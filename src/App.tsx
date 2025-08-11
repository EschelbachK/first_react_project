// Importiert die CSS-Datei für das Styling
import './App.css';

// Importiert die Liste aller Blogeinträge (POSTS) aus der Datei posts.ts
import { POSTS } from "./posts";

// Importiert die PostComponent, die einen einzelnen Blogeintrag darstellt
import PostComponent from "./PostComponent";

// Exportiert die Hauptkomponente App als Standard-Export
export default function App() {
    return (
        <>
            {/* Kopfbereich der Seite */}
            <header>
                {/* Hauptüberschrift des Blogs */}
                <h1>Mein Interessen-Blog</h1>

                {/* Navigation mit drei Menüpunkten */}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>

            {/* Hauptbereich mit allen Blogbeiträgen */}
            <main>
                {/* Geht alle Einträge in POSTS durch und gibt für jeden einen PostComponent aus */}
                {POSTS.map(post => (
                    // Einzelner Blogbeitrag; key sorgt dafür, dass React ihn eindeutig erkennt
                    <PostComponent key={post.id} post={post} />
                ))}
            </main>
        </>
    );
}
