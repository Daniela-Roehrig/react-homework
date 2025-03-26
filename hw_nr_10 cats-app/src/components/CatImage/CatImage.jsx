import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
    const [imageUrl, setImageUrl] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCatImage = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setImageUrl(response.data[0].url);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Random Cat Image</h1>
                {loading && <p>Loading...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <div>
                    <img src={imageUrl} alt="Random Cat" className={styles.catImage} />
                    <button onClick={fetchCatImage} className={styles.button}>
                        Load New Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatImage;
