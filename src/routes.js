/**
 * Created by Edge on 2/25/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GalleryPage from './components/gallery/GalleryPage';
import ProfilePage from './components/profile/ProfilePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="gallery" component={GalleryPage} />
    <Route path="profile" component={ProfilePage} />
  </Route>
);
