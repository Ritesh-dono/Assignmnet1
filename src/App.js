import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__',
    'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__',
    'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__'
  ]);

  const handleAddImage = () => {
    const newImage = 'https://via.placeholder.com/150'; 
    setImages([...images, newImage]);
  };

  return (
    <div className="app-container">
      <div className="instructions">
        <h3>Assignment Instructions</h3>
        <ol>
          <li>Keep the left half of the screen empty.</li>
         
        </ol>
      </div>

      <div className="right-side">
        <div className="widget">
          <div className="tabs">
            <button className="tab" onClick={() => setActiveTab('about')}>About Me</button>
            <button className="tab" onClick={() => setActiveTab('experience')}>Experiences</button>
            <button className="tab" onClick={() => setActiveTab('recommended')}>Recommended</button>
          </div>
          <div className="content">
            {activeTab === 'about' && (
              <div>Hlo I'm Ritesh I hope you like my Assignment</div>
            )}
            {activeTab === 'experience' && (
              <div>Experiences Content</div>
            )}
            {activeTab === 'recommended' && (
              <div>Recommended Content</div>
            )}
          </div>
        </div>

        <div className="line-separator"></div>

        <div className="gallery-widget">
          <button className="btn">Gallery</button>
          <button className="add-image" onClick={handleAddImage}>+ Add Image</button>
          <div className="container">
            <div className="arrow left"><div></div></div>
            <div className="arrow right"><div></div></div>
          </div>
          <div className="gallery">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index}`} />
            ))}
          </div>
        </div>

        <div className="line-separator"></div>
      </div>
    </div>
  );
}

export default App;
