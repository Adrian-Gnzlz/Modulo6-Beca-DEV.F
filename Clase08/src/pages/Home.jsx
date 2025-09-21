import { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user }) => {
    const [tweets, setTweets] = useState([]);

    // Recuperar tweets guardados
    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        setTweets(storedTweets);
    }, []);

    // Guardar tweets cuando cambien
    useEffect(() => {
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }, [tweets]);

    // Agregar tweet
    const addTweet = (text) => {
        if (!user) return; // Solo usuarios logueados
        const newTweet = {
        id: Date.now(),
        text,
        likes: 0,
        author: user.username,
        };
        setTweets([newTweet, ...tweets]);
    };

    // Dar like
    const likeTweet = (id) => {
        setTweets(
        tweets.map((tweet) =>
            tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
        )
        );
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Línea de tiempo 🐦</h1>
        {user ? (
            <>
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets} onLike={likeTweet} />
            </>
        ) : (
            <p>Debes iniciar sesión para publicar y dar likes.</p>
        )}
        </div>
    );
};

export default Home;
