import React from 'react';
import './Review.scss'

const Review = ({avatar,fullName,text,link}) => {
    return (
        <div className='review'>
            <div className='review__header'><img src={avatar} alt="avatar" /><span>{fullName}</span></div>
            <div className='review__stars'></div>
            <p className='review__text'>{text}</p>
            <a className='review__link' href={link} target='new-blank'/>
        </div>
    );
}

export default Review;
