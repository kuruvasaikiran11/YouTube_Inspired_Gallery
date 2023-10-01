import logo from './logo.svg';
import './App.css';


const videos = [
  {
    id: 1,
    title: 'Example Video 1',
    thumbnailUrl: 'https://www.youtube.com/embed/Xo_nioC5cQ4https://imgs.search.brave.com/zBkmhrQaO2HztKQZ3l4d6gNM4vmK91eIJNHjD6O5Jz0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWN0/aW9uaG9yaXpvbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvbmFydXRv/LXNhc3VrZS0yMzk0/NDktMTI4MHgwLTEu/anBn',
    likes: 1500,
    views: 25000,
    channelName: 'AnimeFightAMVs',
    channelLogoUrl: 'https://yt3.googleusercontent.com/GfCM7I4XSF6fHYibP8HmPpdnjJ6KsnGCNAp3LeR6i5-CSvsGMfXfT7KDhCfzEiZRwwFz9NXWIQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'Example Video 2',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg',
    likes: 1200,
    views: 18000,
    channelName: 'Sample Channel 2',
    channelLogoUrl: 'https://example.com/channel2_logo.jpg',
  },
  {
    id: 2,
    title: 'Example Video 2',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg',
    likes: 1200,
    views: 18000,
    channelName: 'Sample Channel 2',
    channelLogoUrl: 'https://example.com/channel2_logo.jpg',
  }
];

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Welcome</h1> */}
      <div id="wrapper">
      <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
        <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
        <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
        <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
        <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
        <div id="video-card">
          <div id='channel'>
            <img src="https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj" alt='logo' />
            <p id='channel-name'>Naruto Shippuden</p>
          </div>
          <div id='video-details'>
            <div id='thumbnail'>
              <img src='https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn' alt="thumbnail" />
            </div>
            <div id='video-title'>
              <p id='title'>Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru</p>
              <div id='video-stats'>
                <p id='likes'>281K likes</p>
                <p id='views'>11.1K views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
