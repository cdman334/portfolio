
import React from 'react';

function ProjectDataComponent(props) {
    return [
        {
            "id": 1,
            "title": "Stock Exploratory Data Analysis",
            "description": "Analyze stock data to provide insights and visualizations for informed stakeholder decisions.",
            "imageUrl": props.stocks,
            "url": "https://colab.research.google.com/drive/1i70RU-QOTbK7KVY0zbqi0F2YBiRPepuK"
        },
        {
            "id": 2,
            "title": "Sentiment Analysis",
            "description": "Sentiment Analysis in Python, leveraging NewsAPI for data and various libraries for analysis.",
            "imageUrl": props.likes,
            "url": "https://colab.research.google.com/drive/1f2cNf2d7K5N3sSP5jyk3jBjOVr3_w4ZC"
        },
        {
            "id": 3,
            "title": "Real Estate Price Predictor",
            "description": "Predicting house prices based on various features using machine learning algorithms.",
            "imageUrl": props.realEstate,
            "url": "https://colab.research.google.com/drive/1Q79OVM3YPF9XtM_a1KthaPt5hvkPGM5M"
        }
    ];
}

export default ProjectDataComponent;
