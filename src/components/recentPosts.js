import React, { Component } from 'react';

export default class RecentPosts extends Component {
  render () {
    return (
      <div className='recent-posts'>
        <div className='recent-posts__wrapper'>
            <div className='recent-posts__heading'>Recent Posts</div>
            <ul>
                <li>Recent post 0</li>
                <li>Recent post 1</li>
                <li>Recent post 2</li>
            </ul>
        </div>
               
      </div>
    );
  }
}