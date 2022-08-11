import './body.css';

import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from "react-router-dom";
export default function Body() {
    return (
        <div className='body-contain'>
            <div className="body-left">
                <div>
                    <img className='left-img' src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/4fe329e6-3d33-4733-37e7-78c356dede00/public" alt="" />
                </div>
                <div className="left-head">
                    <h1 className='left-header'>Beautiful Fluid Art</h1>
                    <h3 className='left-heading'>Current</h3>
                    <p className='left-count'>5BNB <span className='left-amount'>$326.96</span></p>
                    <div className='mind-contain'>
                    
                    <Link to="/minter" className='link-btn'><button className='mind-btn'>MIND</button><button className='mind-arrow'><MdArrowForwardIos /></button></Link>
                    </div>
                </div>
            </div>
            <div className='body-head'>
                <h1 className="body-header">Digital Art Is The Trend Today Welcome To The World Of "NFTs"</h1>
                <h4 className='body-heading'>CREATE, EXPLORE, & COLLECT DIGITAL ART NFTS.</h4>

                <div className='body-info'>
                    <p className='explore'>Explore <MdArrowForwardIos /></p>
                    <a href="#" className='learn-more'>Learn More</a>
                </div>

                <div className="body-statistic">
                    <div className="statistic">
                        <p className='count'>32K+</p>
                        <p className='count-name'>Artwork</p>
                    </div>
                    <div className="statistic">
                        <p className='count'>20K+</p>
                        <p className='count-name'>Auction</p>
                    </div>
                    <div className="statistic">
                        <p className='count'>10K+</p>
                        <p className='count-name'>Artist</p>
                    </div>
                </div>
            </div>

        </div>
    )
}