import React from 'react';
import './brand.css';
import {google,shopify,slack,atlassian,dropbox} from './import'
const Brand = () => {
    return (
        <div className='gpt3__brand section'>
            <div>
                <img src={google} alt="google" srcset="" />
            </div>
            <div>
                <img src={shopify} alt="shopify" srcset="" />
            </div>
            <div>
                <img src={slack} alt="slack" srcset="" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" srcset="" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" srcset="" />
            </div>
        </div>
    )
}

export default Brand
