import React from 'react';

function ProjectDataComponent(props) {
    return [
        {
            "id": 1,
            "title": "Stock Exploratory Data Analysis",
            "description": "Analyze stock data to provide insights and visualizations for informed stakeholder decisions.",
            "imageUrl": props.stocks,
            "url": "https://github.com/cdman334/exploratory_data_analysis"
        },
        {
            "id": 2,
            "title": "Sentiment Analysis",
            "description": "Sentiment Analysis in Python, leveraging NewsAPI for data and various libraries for analysis.",
            "imageUrl": props.likes,
            "url": "https://github.com/cdman334/sentiment_analysis"
        },
        {
            "id": 3,
            "title": "Real Estate Price Predictor",
            "description": "Predicting house prices based on various features using machine learning algorithms.",
            "imageUrl": props.realEstate,
            "url": "https://github.com/cdman334/properties"
        },
        {
            "id": 4,
            "title": "Image Identifier",
            "description": "Identify images using machine learning algorithms.",
            "imageUrl": props.identifier,
            "url": "https://github.com/cdman334/image-identifier"
        }
    ];
}

export default ProjectDataComponent;
