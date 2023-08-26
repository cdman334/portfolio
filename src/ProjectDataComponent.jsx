import React from 'react';
import likes from '../images/likes.avif';
import realEstate from '../images/real-estate.avif';
import stocks from '../images/stocks.avif';

const projectData = [
    {
        "id": 1,
        "title": "Stock Exploratory Data Analysis",
        "description": "Analyze stock data to provide insights and visualizations for informed stakeholder decisions.",
        "imageUrl": '../images/stocks.avif',
        "url": "https://colab.research.google.com/drive/1i70RU-QOTbK7KVY0zbqi0F2YBiRPepuK"
    },
    {
        "id": 2,
        "title": "Sentiment Analysis",
        "description": "Sentiment Analysis in Python, leveraging NewsAPI for data and various libraries for visual insights into public sentiment.",
        "imageUrl": {likes},
        "url": "https://colab.research.google.com/drive/1i70RU-QOTbK7KVY0zbqi0F2YBiRPepuK"
    },
    {
        "id": 3,
        "title": "Real Estate Analysis",
        "description": "Python-based Real Estate Analysis using diverse datasets, offering visual insights into property trends and market values.",
        "imageUrl": {realEstate},
        "url": "https://colab.research.google.com/drive/1i70RU-QOTbK7KVY0zbqi0F2YBiRPepuK"
    }
]
;

export default projectData;
