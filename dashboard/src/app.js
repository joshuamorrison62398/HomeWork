import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentalAnalysis from './components/sentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
    return (
        <div className='container'>
            <div id='sidebar'> <Sidebar /></div>
            <div id='reviews'> <Reviews amount={1281}/></div>
            <div id='average-rating'> <AverageRating rating={4.6}/></div>
            <div id='sentimental-analysis'> <SentimentalAnalysis values={[960, 122, 321]}/></div>
            <div id='website-visitors'> <WebsiteVisitors visitors={821}/></div>
        </div>
    );
}

export default App;