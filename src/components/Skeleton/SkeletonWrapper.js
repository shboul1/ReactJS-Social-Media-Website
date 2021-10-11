import React from 'react'
import './SkeletonWrapper.css'
import Skeleton from './Skeleton'
const SkeletonWrapper = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className="header">
               <div>
               <Skeleton type='avatar'/>
               </div>
                <div>
                <Skeleton type='title' />
                <Skeleton type='title' />
                </div>
            </div>
            <Skeleton type='image' />
            <Skeleton type='text' />
            <Skeleton type='text' />
            <Skeleton type='text' />
        </div>
    )
}

export default SkeletonWrapper
