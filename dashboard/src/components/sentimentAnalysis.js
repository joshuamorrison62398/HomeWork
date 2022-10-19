function SentimentalAnalysis ({values}) {
    return (
        <div>
            <h2>Sentimental Analysis</h2>
            <div className="sa-elements">
                <h1>{values[0]}</h1>
                <h1>{values[1]}</h1>
                <h1>{values[2]}</h1>
            </div>
        </div>
    )
}

export default SentimentalAnalysis;