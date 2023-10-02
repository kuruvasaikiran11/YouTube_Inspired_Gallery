import logo from './logo.svg';
import './App.css';
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    title: "Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru",
    thumbnailUrl: 'https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn',
    likes: 2810000,
    views: 25000,
    channelName: 'Naruto Shippuden',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: "Men's ODI World Cup 2023 Preview...",
    thumbnailUrl: 'https://imgs.search.brave.com/PXXk29lSxcQH1O5SQZ5oW6-1puGX5ZRLN0DMGSXptb0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93cGFz/c2V0cy5hZGRhMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/bXVsdGlzaXRlL3Np/dGVzLzUvMjAyMy8w/Ni8yNzEyMzc1NC9p/bWFnZXMtOS0xLTY5/NngzOTEtMS0zMDB4/MTY5LmpwZWc',
    likes: 12000085,
    views: 45000,
    channelName: 'Cricbuzz',
    channelLogoUrl: 'https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title: 'BGMI New Season|Road to Ace',
    thumbnailUrl: 'https://imgs.search.brave.com/BCL0x2dW7pcNo8NSRQGhqeh-g9TSkgSZauJQxQtzDBI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z3VydWdhbWVyLmNv/bS9yZXNpemUvNzQw/eC0vMjAyMS8wNy8x/NS9iZ21pLXRodW1i/bmFpbC00LWMzNTQu/anBn',
    likes: 120000000,
    views: 180000000,
    channelName: 'Battlegrounds Mobile India',
    channelLogoUrl: 'https://yt3.googleusercontent.com/moYUpns5eJKq4RZZ0NLFukEox1mIkmUr0L370Qv_hpX1acs90VzOKHsRCCvCbGERhomXmt5-jg=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj',
  },
  {
    id: 4,
    title: 'Introduction to React',
    thumbnailUrl: 'https://imgs.search.brave.com/uHury4X5VqJBFdheAvYkewEdsoQhm8hmkmNyeu5FT1o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcm93/ZGJvdGljcy5naG9z/dC5pby9jb250ZW50/L2ltYWdlcy8yMDIx/LzA1L1JlYWN0LU5h/dGl2ZS1JbWcucG5n',
    likes: 1200,
    views: 18000,
    channelName: 'React ',
    channelLogoUrl: 'https://imgs.search.brave.com/cJYMRhVSG1NPMe7ZwN139qYfNtHkAow4-7-KNBPwxg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnVk/ZW15Y2RuLmNvbS9j/b3Vyc2UvNDgweDI3/MC8xMzYyMDcwX2I5/YTFfMi5qcGc',
  },
  {
    id: 5,
    title: 'Intorduction to JS|ES-6',
    thumbnailUrl: 'https://imgs.search.brave.com/Z1uhlRKPufeg2qfaa3C-PiEQs90Zgj_KmWcEzoTuOqw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy5z/dHVkeXRvbmlnaHQu/Y29tL2N1cmlvdXMv/dXBsb2Fkcy9waWN0/dXJlcy8xNjgyOTEx/NDM0LTEucG5n',
    likes: 1200,
    views: 18000,
    channelName: 'JavaScript Tutorials',
    channelLogoUrl: 'https://imgs.search.brave.com/SV-PCczLHgbvCltT9W2MqlZjTU2KF113yXZjnjIhypU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80OC82NC9q/YXZhc2NyaXB0LWVt/YmxlbS1ibGFjay1s/ZXR0ZXJzLW9uLXll/bGxvdy1iZy12ZWN0/b3ItMjgyNjQ4NjQu/anBn',
  },
  {
    id: 6,
    title: 'THANKSGIVING - Official Teaser Trailer (HD)',
    thumbnailUrl: 'https://imgs.search.brave.com/9bErNWOHCd74219c9Gw1TOKaTFk65sKdPEaTmIdIkEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HWmhPR0pq/WlRBdE9USm1ZUzAw/WlRrMkxUZ3hZV0V0/TmpNM1ptVXhNalky/TldGaVhrRXlYa0Zx/Y0dkZVFYVnlOalUy/TlRJNE1qRUAuanBn',
    likes: 2000000,
    views: 21800,
    channelName: 'Sony Pictures Entertainment',
    channelLogoUrl: 'https://yt3.googleusercontent.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj',
  }
];

function App() {
  return (
    <div className="App">
      {/* {videos.map((item)=>VideoCard(item))} */}
      
      <div id="wrapper">
        {videos.map((item) => <VideoCard key={item.id} video={item} />)}
      {/* <div id="video-card">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
