import type { BlogPost } from "./BlogPostTypes";

export default function BlogPost({
                                     title,
                                     subtitle,
                                     content,
                                     author,
                                     image,
                                     date,
                                     tags,
                                     likes,
                                 }: BlogPost) {
    return (
        <article className="card">
            {image && (
                <img
                    src={image}
                    alt={title}
                    style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "1rem" }}
                />
            )}
            <h2>{title}</h2>
            <h4 style={{ color: "#666", fontWeight: "normal" }}>{subtitle}</h4>
            <p>
                <small>{date ? new Date(date).toLocaleDateString() : ""}</small>
            </p>
            <p>{content}</p>
            <p><strong>Autor:</strong> {author}</p>
            {tags && (
                <p>
                    Tags:{" "}
                    {tags.map((tag) => (
                        <span key={tag} style={{ marginRight: "0.5rem" }}>
              #{tag}
            </span>
                    ))}
                </p>
            )}
            {likes !== undefined && <p>👍 Likes: {likes}</p>}
        </article>
    );
}
