// import React, { Suspense, useState, useEffect } from 'react';
// import "./App.css";
// import VideoCard from "./VideoCard";

// const videos = [
//   {
//     id: 1,
//     title: "Intorduction to JS|ES-6",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/Z1uhlRKPufeg2qfaa3C-PiEQs90Zgj_KmWcEzoTuOqw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy5z/dHVkeXRvbmlnaHQu/Y29tL2N1cmlvdXMv/dXBsb2Fkcy9waWN0/dXJlcy8xNjgyOTEx/NDM0LTEucG5n",
//     likes: 1200,
//     views: 18000,
//     channelName: "JavaScript Tutorials",
//     channelLogoUrl:
//       "https://imgs.search.brave.com/SV-PCczLHgbvCltT9W2MqlZjTU2KF113yXZjnjIhypU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80OC82NC9q/YXZhc2NyaXB0LWVt/YmxlbS1ibGFjay1s/ZXR0ZXJzLW9uLXll/bGxvdy1iZy12ZWN0/b3ItMjgyNjQ4NjQu/anBn",
//   },
//   {
//     id: 2,
//     title: "Introduction to React",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/uHury4X5VqJBFdheAvYkewEdsoQhm8hmkmNyeu5FT1o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcm93/ZGJvdGljcy5naG9z/dC5pby9jb250ZW50/L2ltYWdlcy8yMDIx/LzA1L1JlYWN0LU5h/dGl2ZS1JbWcucG5n",
//     likes: 1200,
//     views: 18000,
//     channelName: "React ",
//     channelLogoUrl:
//       "https://imgs.search.brave.com/cJYMRhVSG1NPMe7ZwN139qYfNtHkAow4-7-KNBPwxg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnVk/ZW15Y2RuLmNvbS9j/b3Vyc2UvNDgweDI3/MC8xMzYyMDcwX2I5/YTFfMi5qcGc",
//   },
//   {
//     id: 3,
//     title: "Intro to Node JS",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
//     likes: 20000,
//     views: 6800,
//     channelName: "NodeJS",
//     channelLogoUrl:
//       "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
//   },
//   {
//     id: 4,
//     title:
//       "Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn",
//     likes: 2810000,
//     views: 25000,
//     channelName: "Naruto Shippuden",
//     channelLogoUrl:
//       "https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 5,
//     title: "Men's ODI World Cup 2023 Preview...",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/PXXk29lSxcQH1O5SQZ5oW6-1puGX5ZRLN0DMGSXptb0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93cGFz/c2V0cy5hZGRhMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/bXVsdGlzaXRlL3Np/dGVzLzUvMjAyMy8w/Ni8yNzEyMzc1NC9p/bWFnZXMtOS0xLTY5/NngzOTEtMS0zMDB4/MTY5LmpwZWc",
//     likes: 12000085,
//     views: 45000,
//     channelName: "Cricbuzz",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 6,
//     title: "BGMI New Season|Road to Ace",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/BCL0x2dW7pcNo8NSRQGhqeh-g9TSkgSZauJQxQtzDBI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z3VydWdhbWVyLmNv/bS9yZXNpemUvNzQw/eC0vMjAyMS8wNy8x/NS9iZ21pLXRodW1i/bmFpbC00LWMzNTQu/anBn",
//     likes: 120000000,
//     views: 180000000,
//     channelName: "Battlegrounds Mobile India",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/moYUpns5eJKq4RZZ0NLFukEox1mIkmUr0L370Qv_hpX1acs90VzOKHsRCCvCbGERhomXmt5-jg=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj",
//   },
//   {
//     id: 7,
//     title: "THANKSGIVING - Official Teaser Trailer (HD)",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/9bErNWOHCd74219c9Gw1TOKaTFk65sKdPEaTmIdIkEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HWmhPR0pq/WlRBdE9USm1ZUzAw/WlRrMkxUZ3hZV0V0/TmpNM1ptVXhNalky/TldGaVhrRXlYa0Zx/Y0dkZVFYVnlOalUy/TlRJNE1qRUAuanBn",
//     likes: 2000000,
//     views: 21800,
//     channelName: "Sony Pictures Entertainment",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 8,
//     title: "Aquaman and the Lost Kingdom | Trailer",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/AxInGGNigazZ871SDT9w-MLQVNsOu_LVJ5ZfTczmFYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EVTRaV1Zs/TkRjdE16ZGhOaTAw/WXpZeExXSXhNamd0/TkRSa01UbGtOak00/WmpZd1hrRXlYa0Zx/Y0dkZVFYUnlaWGRs/Y3dAQC5fVjFfUUw3/NV9VWDUwMF9DUjAs/MCw1MDAsMjgxXy5q/cGc",
//     likes: 2800000,
//     views: 728000,
//     channelName: "DC",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ytc/APkrFKboOY7FNjHAd7XlU5KKDxs9JS9JdeF_XkhCe7xacOU=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 9,
//     title: "Marvel Studios’ Loki Season 2 | Loki Through The Years",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/_2XRF7ZSNtco3B6_SG7YSj0TXNrl0raVuOMqxeT8pcY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8y/Zjg3NTdjNi5qcGVn/P3JlZ2lvbj0wLDAs/MTkyMCwxMDgw",
//     likes: 2000000,
//     views: 21800,
//     channelName: "Marvel Entertainment",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 10,
//     title: "Next On Disney+ | September 2023",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/rvXu0lHPJhhSRRxeCYQM8CjuNoCV_-BQyJfCeQtShUU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEUmxNemRo/T0RndFl6STJaaTAw/T0RJekxUaGpaRGt0/TlROa09UZGpNRE5s/TlRsalhrRXlYa0Zx/Y0dkZVFYVnlNelV3/TkRJeE1qUUAuanBn",
//     likes: 910000,
//     views: 55000,
//     channelName: "Disney Plus",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/P6LY0R0LwiUzku7KCoIvI9NSkNoAGEmGniUyi02qCPXpAVbNfIOucqw4oKiFtDmUv1fJ06-_=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 11,
//     title: "Gen V – Official Redband Trailer | Prime Video",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/807Of8eE-BD4QlxGoAjf-fmN9zHUKPbILGvL4QAMcu8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXVXpOVFkz/TlRJdE56bGxaQzAw/WlROaUxUazJZalV0/Tmprek16azVaR1V6/TXpSaVhrRXlYa0Zx/Y0dkZVFXcGxabVpz/Y0FAQC5fVjFfUUw3/NV9VWDUwMF9DUjAs/MCw1MDAsMjgxXy5q/cGc",
//     likes: 120000,
//     views: 65000,
//     channelName: "Prime Video",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 12,
//     title: "DROP 01 | Official Trailer | Coming September 27th | Netflix India",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/3Ftg9Hi8GcZ-TSVrMRXpG2og2DGoXqPURQo8B2kGnsU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hhdHMtb24tbmV0/ZmxpeC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/ZHJvcC0wMS1hbmlt/ZS1uZXRmbGl4LWV2/ZXJ5dGhpbmcuanBn",
//     likes: 120000000,
//     views: 180000000,
//     channelName: "Netflix India",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 13,
//     title: "Launch of PSLV-C57/Aditya-L1 Mission",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/y0W2Pp3sVokKqP4Vfxo8WJeg03yLBpnV4y44IFxJz8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9za3kt/YnJva2Vycy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvSVNSTy1QU0xW/LUMyNy1sYXVuY2gt/dmVoaWNsZS05MDB4/NTk5LTEuanBn",
//     likes: 91000000,
//     views: 6231000,
//     channelName: "ISRO Official",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/CzlVEHcdvYCY9xyQvmBSmRPQeMBTcoFqF8JbjC9KbEr-jN3vKJkCNgr4mB3ZKJvqMibZqHMr5hE=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 14,
//     title:
//       "Our First Asteroid Sample Return Mission is Back on Earth on This Week @NASA",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
//     likes: 81200000,
//     views: 65000000,
//     channelName: "NASA",
//     channelLogoUrl:
//       "https://yt3.ggpht.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj-mo",
//   },
//   {
//     id: 15,
//     title: "Starship | First Integrated Flight Test",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/WjmXwu1uPbEPEl35OrLx-hVL9IAzoIBJOvLcmCQHD4g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ldmVy/eWRheWFzdHJvbmF1/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDQvU3Rh/cnNoaXBfRnVsbF9T/dGFja19XYXZlc18y/XzFfb2ZfMS05LTgw/MHg1MzYuanBlZw",
//     likes: 31000000,
//     views: 6100000,
//     channelName: "SpaceX",
//     channelLogoUrl:
//       "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
//   },
//   {
//     id: 16,
//     title: "FIFA World Cup Goals and Assists",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/Nor10WR3mABgaiLjNcOxOKmsxCTdJR7M1mAyo9Y3yVo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x5bXBpY2NoYW5u/ZWwuY29tL2ltYWdl/cy9pbWFnZS9wcml2/YXRlL3Rfc193ODYw/L3Rfc18xNl85X2df/YXV0by9mX2F1dG8v/cHJpbWFyeS9zazVp/aDh2emtkY2kzZ210/YXFueQ.jpeg",
//     likes: 108000000,
//     views: 62310000,
//     channelName: "FIFA",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/GV75cdGEHaUZnQ_oJIzj_tGzLZCX2RyDKhn_75fFW6Mf_dpi8Fn6TaevTNhbrtLLBpk0upYt=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 17,
//     title: "ICC Men's Cricket World Cup 2023 Official Anthem",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/ZxbB8HzCxfzlpaWhxz9J1g6r-L_p-E0pRUJ9UKNQ_j0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMucHVsc2Uu/aWNjLWNyaWNrZXQu/Y29tL3Bob3RvLXJl/c291cmNlcy8yMDIz/LzA5LzA4Lzk5Y2Ex/NzgzLTUyZTgtNDJl/Yi1iNDdmLTljNTIw/ZmI5NWQ4OS9TeW5v/cHNpcy1wYWdlLTEy/ODAteC02NDBhLmpw/Zz93aWR0aD00NDAm/aGVpZ2h0PTI0OA",
//     likes: 8200000,
//     views: 6500000,
//     channelName: "ICC",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 18,
//     title: "Raw Vs SmackDown",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/SXHDuvfXpkddEXth0qdugBXZ2417-p3CcLrGYIcIfB0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEWXdZMlZq/WldVdE5qZzVOaTAw/TjJVM0xXSmhPV010/TnpWalltSXhaamxp/WlRJNVhrRXlYa0Zx/Y0dkZVFYVnlOakU0/TmprNU5UTUAuanBn",
//     likes: 31000000,
//     views: 6100000,
//     channelName: "WWE",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ytc/APkrFKaERKeBTY6Z-ktDAHmsZ38tbAi2M84InFei9RtiPmQ=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 19,
//     title: "Meri Jaane Man - Kushi",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/Hu7foTFyTHET2QjWIJevFK6B7LJBmNWJ_ooB11s17dw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yLnNh/cmVnYW1hLmNvbS9y/ZXNvdXJjZXMvaW1h/Z2VzL2NhcnZhYW4v/Q2FydmFhbl9Qb3At/Q29sb3VyX0hpbmRp/LUFsbC1DYXJ2YWFu/LTY0MHg0NDcuanBn/P3Y9MTE",
//     likes: 1080000,
//     views: 623100,
//     channelName: "Saregama Music",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 20,
//     title: "Ghost Telugu Trailer | Dr. Shivarajkumar,Anupam Kher,Jayaram ",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/y7kW4cEzsUYwob8sSbRmJrbgOmuzF9iKgNmsTdigp8U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xODQ3/ODg0MTE2LnJzYy5j/ZG43Ny5vcmcvdGFt/aWwvbmV3cy9zaGl2/YXJhamt1bmFyLWdo/b3N0LXJsZXJtMi0y/OTMuanBn",
//     likes: 8200000,
//     views: 6500000,
//     channelName: "T-Series Telugu",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 21,
//     title: "LEO - Badass Lyric | Thalapathy Vijay",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/g_wtp_etZPRhFG0zfNImE9h6rPqwZnrCysCo3tXvs1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/cmVwdWJsaWN3b3Js/ZC5jb20vcmVwdWJs/aWMtcHJvZC9zdG9y/aWVzL3Byb21vbGFy/Z2UveGhkcGkveWh5/ZnF6NHcwamVkc212/c18xNjk1OTA4OTAy/LmpwZWc",
//     likes: 31000000,
//     views: 6100000,
//     channelName: "Sony Music",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 22,
//     title: "S. JAISHANKAR LIVE",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/W74DKt1Ch5jNbcxHlnDQ9pjOjegqwaIALFzqsMgVrf8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjItMDgvZzZzY2dm/OF9leHRlcm5hbC1h/ZmZhaXJzLW1pbmlz/dGVyLXMtamFpc2hh/bmthcl82MjV4MzAw/XzA0X0F1Z3VzdF8y/Mi5qcGc",
//     likes: 180000,
//     views: 63100,
//     channelName: "India Today",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/5Zr4bV9iJRa6zNS_-VSbZ7j5S8JhQc2Aez7b9y923AnYqJnltvI2iGdOFnWBcW-34ioPZlxzzLE=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 23,
//     title:
//       "New York City: State of emergency declared over flash flooding - BBC News",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/qv1F7ytyU5zLdTKM4pyZFpVYUVGXLtaRxn5iFoMOZAc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvOTc2L2Nw/c3Byb2RwYi85NTUy/L3Byb2R1Y3Rpb24v/XzEyMDM2MjI4M19u/eWZsb29kcy5qcGc",
//     likes: 820000,
//     views: 650000,
//     channelName: "BBC News",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/y_esGAQOhX4rTpWvrALErAJlFbm_2TIVrvcVfcZny7TuA8dJZgOQcC6KRfd_J5hljFe-foYXj9U=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 25,
//     title:
//       "Live News | Amid Afghanistan's Decision To Wrap Up Consulate In India",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/ARTWe8LZuslW-TvevySE7y8tO6jtl_A6cLMtG51fNGY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGZyb250LXVzLWVh/c3QtMi5pbWFnZXMu/YXJjcHVibGlzaGlu/Zy5jb20vcmV1dGVy/cy9ISlpaQzM1REVC/TEY3R1pXM1RMRzVW/NFZQQS5qcGc",
//     likes: 31000000,
//     views: 6100000,
//     channelName: "TIMES NOW",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/GKw3-YGSe7_0K_Y8E-cqomjUmSvqD2E7kBJXaB05QTMYONC6RjJcMkLgtm8KdqX9EEV6QwgDGw=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 26,
//     title: "What makes you special?",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/-B1nnhMoBeHe3XV8oowL0V9LGcctR4R2JkhdC3JJH0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waS50/ZWRjZG4uY29tL3Iv/cGItYXNzZXRzLnRl/ZGNkbi5jb20vc3lz/dGVtL2JhdWJsZXMv/ZmlsZXMvMDAwLzAw/MC81NTQvb3JpZ2lu/YWwvVEVEeF90YWxr/c18xLmpwZz93aWR0/aD0xNDAw",
//     likes: 980000,
//     views: 610000,
//     channelName: "TEDx Talks",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/70r5TkYTLC0cpKLAiQEvcWLeIHB8yxoiog0nQIK9MmnZHqkICy0YA-jAaqfT2ChOBwehskjf5g=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 27,
//     title:
//       "Celebrating 40 Years of Sadhguru's Enlightenment - LIVE from Isha Yoga Center",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/-WwQ3I9o5UjUnuFbAC9X-L50DDQkU1TFEN56VFBZARI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ndW1s/ZXQuYXNzZXR0eXBl/LmNvbS9uZXdzbGF1/bmRyeS8yMDIxLTA1/L2ExYzE1N2M2LWEw/MDktNDBkYS04YWEx/LTZjOGI2MmEwYWQ2/Zi9Jc2hhX2FzaHJh/bV9pbGxlZ2FsX2Vs/ZXBoYW50X2NvcnJp/ZG9yLmpwZz9hdXRv/PWZvcm1hdCxjb21w/cmVzcyZmaXQ9bWF4",
//     likes: 80000,
//     views: 60000,
//     channelName: "Sadhguru",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/qaUDxW_k7xq6zrO6BaUUqdlzo57P1VzLVkusn8zOtpLg1gFrNmJXkt_g5eDi97tvGtA96T1JTQ=s176-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     id: 28,
//     title: "OBSESSION - Best Motivational Speech",
//     thumbnailUrl:
//       "https://imgs.search.brave.com/_KBzV9dfkgRq3BWcSpakN4JXTkAbYHB0US0WAg4DVPg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDI0/OTU2ODg2NS1oOXM3/MjItdDUwMHg1MDAu/anBn",
//     likes: 31000000,
//     views: 6100000,
//     channelName: "Ben Lionel Scott",
//     channelLogoUrl:
//       "https://yt3.googleusercontent.com/ykGIIXMJANVu2Vjf_5DpjtQDUIQijWS3fZcQiNArNh8F4xDUQFeFCLp6gwaYPiXIw4O_2gXW=s176-c-k-c0x00ffffff-no-rj",
//   },
// ];

// const placeholderStyle = {
//   width: "100%",
//   height: "300px", // You can adjust the height as needed
//   backgroundColor: "#f0f0f0", // Placeholder background color
//   borderRadius: "8px", // Optional: Add some rounded corners
//   margin: "10px 0", // Optional: Add some margin between each placeholder
// };

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Youtube Inspired Gallery</h1>
// //       {/* {videos.map((item)=>VideoCard(item))} */}

// //       <div id="wrapper">
// //         {videos.map((item) => <VideoCard key={item.id} video={item} />)}
// //       </div>
// //     </div>
// //   );
// // }

// function App() {
//   const [videos, setVideos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating loading data from an API
//     setTimeout(() => {
//       setVideos([
//         {
//           id: 1,
//           title: "Intorduction to JS|ES-6",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/Z1uhlRKPufeg2qfaa3C-PiEQs90Zgj_KmWcEzoTuOqw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy5z/dHVkeXRvbmlnaHQu/Y29tL2N1cmlvdXMv/dXBsb2Fkcy9waWN0/dXJlcy8xNjgyOTEx/NDM0LTEucG5n",
//           likes: 1200,
//           views: 18000,
//           channelName: "JavaScript Tutorials",
//           channelLogoUrl:
//             "https://imgs.search.brave.com/SV-PCczLHgbvCltT9W2MqlZjTU2KF113yXZjnjIhypU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80OC82NC9q/YXZhc2NyaXB0LWVt/YmxlbS1ibGFjay1s/ZXR0ZXJzLW9uLXll/bGxvdy1iZy12ZWN0/b3ItMjgyNjQ4NjQu/anBn",
//         },
//         {
//           id: 2,
//           title: "Introduction to React",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/uHury4X5VqJBFdheAvYkewEdsoQhm8hmkmNyeu5FT1o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcm93/ZGJvdGljcy5naG9z/dC5pby9jb250ZW50/L2ltYWdlcy8yMDIx/LzA1L1JlYWN0LU5h/dGl2ZS1JbWcucG5n",
//           likes: 1200,
//           views: 18000,
//           channelName: "React ",
//           channelLogoUrl:
//             "https://imgs.search.brave.com/cJYMRhVSG1NPMe7ZwN139qYfNtHkAow4-7-KNBPwxg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnVk/ZW15Y2RuLmNvbS9j/b3Vyc2UvNDgweDI3/MC8xMzYyMDcwX2I5/YTFfMi5qcGc",
//         },
//         {
//           id: 3,
//           title: "Intro to Node JS",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
//           likes: 20000,
//           views: 6800,
//           channelName: "NodeJS",
//           channelLogoUrl:
//             "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
//         },
//         {
//           id: 4,
//           title:
//             "Sasuke came to Naruto's house for the first time,Boruto training Rasengan with Sasuke and Konohamaru",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn",
//           likes: 2810000,
//           views: 25000,
//           channelName: "Naruto Shippuden",
//           channelLogoUrl:
//             "https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 5,
//           title: "Men's ODI World Cup 2023 Preview...",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/PXXk29lSxcQH1O5SQZ5oW6-1puGX5ZRLN0DMGSXptb0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93cGFz/c2V0cy5hZGRhMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/bXVsdGlzaXRlL3Np/dGVzLzUvMjAyMy8w/Ni8yNzEyMzc1NC9p/bWFnZXMtOS0xLTY5/NngzOTEtMS0zMDB4/MTY5LmpwZWc",
//           likes: 12000085,
//           views: 45000,
//           channelName: "Cricbuzz",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 6,
//           title: "BGMI New Season|Road to Ace",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/BCL0x2dW7pcNo8NSRQGhqeh-g9TSkgSZauJQxQtzDBI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z3VydWdhbWVyLmNv/bS9yZXNpemUvNzQw/eC0vMjAyMS8wNy8x/NS9iZ21pLXRodW1i/bmFpbC00LWMzNTQu/anBn",
//           likes: 120000000,
//           views: 180000000,
//           channelName: "Battlegrounds Mobile India",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/moYUpns5eJKq4RZZ0NLFukEox1mIkmUr0L370Qv_hpX1acs90VzOKHsRCCvCbGERhomXmt5-jg=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj",
//         },
//         {
//           id: 7,
//           title: "THANKSGIVING - Official Teaser Trailer (HD)",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/9bErNWOHCd74219c9Gw1TOKaTFk65sKdPEaTmIdIkEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HWmhPR0pq/WlRBdE9USm1ZUzAw/WlRrMkxUZ3hZV0V0/TmpNM1ptVXhNalky/TldGaVhrRXlYa0Zx/Y0dkZVFYVnlOalUy/TlRJNE1qRUAuanBn",
//           likes: 2000000,
//           views: 21800,
//           channelName: "Sony Pictures Entertainment",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 8,
//           title: "Aquaman and the Lost Kingdom | Trailer",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/AxInGGNigazZ871SDT9w-MLQVNsOu_LVJ5ZfTczmFYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EVTRaV1Zs/TkRjdE16ZGhOaTAw/WXpZeExXSXhNamd0/TkRSa01UbGtOak00/WmpZd1hrRXlYa0Zx/Y0dkZVFYUnlaWGRs/Y3dAQC5fVjFfUUw3/NV9VWDUwMF9DUjAs/MCw1MDAsMjgxXy5q/cGc",
//           likes: 2800000,
//           views: 728000,
//           channelName: "DC",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/ytc/APkrFKboOY7FNjHAd7XlU5KKDxs9JS9JdeF_XkhCe7xacOU=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 9,
//           title: "Marvel Studios’ Loki Season 2 | Loki Through The Years",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/_2XRF7ZSNtco3B6_SG7YSj0TXNrl0raVuOMqxeT8pcY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8y/Zjg3NTdjNi5qcGVn/P3JlZ2lvbj0wLDAs/MTkyMCwxMDgw",
//           likes: 2000000,
//           views: 21800,
//           channelName: "Marvel Entertainment",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 10,
//           title: "Next On Disney+ | September 2023",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/rvXu0lHPJhhSRRxeCYQM8CjuNoCV_-BQyJfCeQtShUU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEUmxNemRo/T0RndFl6STJaaTAw/T0RJekxUaGpaRGt0/TlROa09UZGpNRE5s/TlRsalhrRXlYa0Zx/Y0dkZVFYVnlNelV3/TkRJeE1qUUAuanBn",
//           likes: 910000,
//           views: 55000,
//           channelName: "Disney Plus",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/P6LY0R0LwiUzku7KCoIvI9NSkNoAGEmGniUyi02qCPXpAVbNfIOucqw4oKiFtDmUv1fJ06-_=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 11,
//           title: "Gen V – Official Redband Trailer | Prime Video",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/807Of8eE-BD4QlxGoAjf-fmN9zHUKPbILGvL4QAMcu8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXVXpOVFkz/TlRJdE56bGxaQzAw/WlROaUxUazJZalV0/Tmprek16azVaR1V6/TXpSaVhrRXlYa0Zx/Y0dkZVFXcGxabVpz/Y0FAQC5fVjFfUUw3/NV9VWDUwMF9DUjAs/MCw1MDAsMjgxXy5q/cGc",
//           likes: 120000,
//           views: 65000,
//           channelName: "Prime Video",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 12,
//           title:
//             "DROP 01 | Official Trailer | Coming September 27th | Netflix India",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/3Ftg9Hi8GcZ-TSVrMRXpG2og2DGoXqPURQo8B2kGnsU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hhdHMtb24tbmV0/ZmxpeC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/ZHJvcC0wMS1hbmlt/ZS1uZXRmbGl4LWV2/ZXJ5dGhpbmcuanBn",
//           likes: 120000000,
//           views: 180000000,
//           channelName: "Netflix India",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 13,
//           title: "Launch of PSLV-C57/Aditya-L1 Mission",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/y0W2Pp3sVokKqP4Vfxo8WJeg03yLBpnV4y44IFxJz8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9za3kt/YnJva2Vycy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvSVNSTy1QU0xW/LUMyNy1sYXVuY2gt/dmVoaWNsZS05MDB4/NTk5LTEuanBn",
//           likes: 91000000,
//           views: 6231000,
//           channelName: "ISRO Official",
//           channelLogoUrl:
//             "https://yt3.googleusercontent.com/CzlVEHcdvYCY9xyQvmBSmRPQeMBTcoFqF8JbjC9KbEr-jN3vKJkCNgr4mB3ZKJvqMibZqHMr5hE=s176-c-k-c0x00ffffff-no-rj",
//         },
//         {
//           id: 14,
//           title:
//             "Our First Asteroid Sample Return Mission is Back on Earth on This Week @NASA",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
//           likes: 81200000,
//           views: 65000000,
//           channelName: "NASA",
//           channelLogoUrl:
//             "https://yt3.ggpht.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj-mo",
//         },
//         {
//           id: 15,
//           title: "Starship | First Integrated Flight Test",
//           thumbnailUrl:
//             "https://imgs.search.brave.com/WjmXwu1uPbEPEl35OrLx-hVL9IAzoIBJOvLcmCQHD4g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ldmVy/eWRheWFzdHJvbmF1/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDQvU3Rh/cnNoaXBfRnVsbF9T/dGFja19XYXZlc18y/XzFfb2ZfMS05LTgw/MHg1MzYuanBlZw",
//           likes: 31000000,
//           views: 6100000,
//           channelName: "SpaceX",
//           channelLogoUrl:
//             "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
//         },
//         // Add more data here
//       ]);
//       setIsLoading(false);
//     }, 2000); // Adjust the delay time as needed
//   }, []);

//   return (
//     <>
//       <Suspense
//         fallback={
//           <div id="wrapper">
//             {videos.map((item) => (
//               <VideoCard key={item.id} video={item} />
//             ))}
//             {/* Render placeholders */}
//             {Array(4)
//               .fill()
//               .map((_, index) => (
//                 <div key={index} style={placeholderStyle}></div>
//               ))}
//           </div>
//         }
//       ></Suspense>
//     </>
//   );
// }

// export default App;

import React, { Suspense, useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import VideoCardPlaceholder from "./VideoCardPlaceholder";
import "./App.css";

function App() {
  const videos = [
    {
      id: 1,
      title: "Intorduction to JS|ES-6",
      thumbnailUrl:
        "https://imgs.search.brave.com/Z1uhlRKPufeg2qfaa3C-PiEQs90Zgj_KmWcEzoTuOqw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy5z/dHVkeXRvbmlnaHQu/Y29tL2N1cmlvdXMv/dXBsb2Fkcy9waWN0/dXJlcy8xNjgyOTEx/NDM0LTEucG5n",
      likes: 1200,
      views: 18000,
      channelName: "JavaScript Tutorials",
      channelLogoUrl:
        "https://imgs.search.brave.com/SV-PCczLHgbvCltT9W2MqlZjTU2KF113yXZjnjIhypU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80OC82NC9q/YXZhc2NyaXB0LWVt/YmxlbS1ibGFjay1s/ZXR0ZXJzLW9uLXll/bGxvdy1iZy12ZWN0/b3ItMjgyNjQ4NjQu/anBn",
    },
    {
      id: 3,
      title: "Intro to Node JS",
      thumbnailUrl:
        "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
      likes: 20000,
      views: 6800,
      channelName: "NodeJS",
      channelLogoUrl:
        "https://imgs.search.brave.com/6tQB1v-kzgblo9dLOAHumXIgyWoKghCcQemcSO8k6pw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vanMvbm9kZWpz/L2ltYWdlcy9ub2Rl/LWpzLXR1dG9yaWFs/LnBuZw",
    },
    {
      id: 4,
      title:
        "Sasuke came to Naruto's house for",
      thumbnailUrl:
        "https://imgs.search.brave.com/rTnaTNygyCgEwkgch9o_YLc8dFnAoxtaTdvqPUbYg0A/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9XYWxs/cGFwZXItb2YtTmFy/dXRvLTEuanBn",
      likes: 2810000,
      views: 25000,
      channelName: "Naruto Shippuden",
      channelLogoUrl:
        "https://yt3.ggpht.com/ytc/APkrFKb8uneth06WfoDZVTWBsmGA--_qPcCX9CmlSYes=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      title: "Men's ODI World Cup 2023",
      thumbnailUrl:
        "https://imgs.search.brave.com/PXXk29lSxcQH1O5SQZ5oW6-1puGX5ZRLN0DMGSXptb0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93cGFz/c2V0cy5hZGRhMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/bXVsdGlzaXRlL3Np/dGVzLzUvMjAyMy8w/Ni8yNzEyMzc1NC9p/bWFnZXMtOS0xLTY5/NngzOTEtMS0zMDB4/MTY5LmpwZWc",
      likes: 12000085,
      views: 45000,
      channelName: "Cricbuzz",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      title: "BGMI New Season|Road to Ace",
      thumbnailUrl:
        "https://imgs.search.brave.com/BCL0x2dW7pcNo8NSRQGhqeh-g9TSkgSZauJQxQtzDBI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z3VydWdhbWVyLmNv/bS9yZXNpemUvNzQw/eC0vMjAyMS8wNy8x/NS9iZ21pLXRodW1i/bmFpbC00LWMzNTQu/anBn",
      likes: 120000000,
      views: 180000000,
      channelName: "Battlegrounds Mobile India",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/moYUpns5eJKq4RZZ0NLFukEox1mIkmUr0L370Qv_hpX1acs90VzOKHsRCCvCbGERhomXmt5-jg=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj",
    },
    {
      id: 7,
      title: "THANKSGIVING - Official Teaser",
      thumbnailUrl:
        "https://imgs.search.brave.com/9bErNWOHCd74219c9Gw1TOKaTFk65sKdPEaTmIdIkEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HWmhPR0pq/WlRBdE9USm1ZUzAw/WlRrMkxUZ3hZV0V0/TmpNM1ptVXhNalky/TldGaVhrRXlYa0Zx/Y0dkZVFYVnlOalUy/TlRJNE1qRUAuanBn",
      likes: 2000000,
      views: 21800,
      channelName: "Sony Pictures Entertainment",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 8,
      title: "Aquaman and the Lost Kingdom | Trailer",
      thumbnailUrl:
        "https://imgs.search.brave.com/AxInGGNigazZ871SDT9w-MLQVNsOu_LVJ5ZfTczmFYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EVTRaV1Zs/TkRjdE16ZGhOaTAw/WXpZeExXSXhNamd0/TkRSa01UbGtOak00/WmpZd1hrRXlYa0Zx/Y0dkZVFYUnlaWGRs/Y3dAQC5fVjFfUUw3/NV9VWDUwMF9DUjAs/MCw1MDAsMjgxXy5q/cGc",
      likes: 2800000,
      views: 728000,
      channelName: "DC",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKboOY7FNjHAd7XlU5KKDxs9JS9JdeF_XkhCe7xacOU=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      title: "Marvel Studios’ Loki Season 2 | Loki",
      thumbnailUrl:
        "https://imgs.search.brave.com/_2XRF7ZSNtco3B6_SG7YSj0TXNrl0raVuOMqxeT8pcY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8y/Zjg3NTdjNi5qcGVn/P3JlZ2lvbj0wLDAs/MTkyMCwxMDgw",
      likes: 2000000,
      views: 21800,
      channelName: "Marvel Entertainment",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 12,
      title: "DROP 01 | Official Trailer | Coming",
      thumbnailUrl:
        "https://imgs.search.brave.com/3Ftg9Hi8GcZ-TSVrMRXpG2og2DGoXqPURQo8B2kGnsU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hhdHMtb24tbmV0/ZmxpeC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/ZHJvcC0wMS1hbmlt/ZS1uZXRmbGl4LWV2/ZXJ5dGhpbmcuanBn",
      likes: 120000000,
      views: 180000000,
      channelName: "Netflix India",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 13,
      title: "Launch of PSLV-C57/Aditya-L1",
      thumbnailUrl:
        "https://imgs.search.brave.com/y0W2Pp3sVokKqP4Vfxo8WJeg03yLBpnV4y44IFxJz8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9za3kt/YnJva2Vycy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvSVNSTy1QU0xW/LUMyNy1sYXVuY2gt/dmVoaWNsZS05MDB4/NTk5LTEuanBn",
      likes: 91000000,
      views: 6231000,
      channelName: "ISRO Official",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/CzlVEHcdvYCY9xyQvmBSmRPQeMBTcoFqF8JbjC9KbEr-jN3vKJkCNgr4mB3ZKJvqMibZqHMr5hE=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 14,
      title:
        "Our First Asteroid Sample Return",
      thumbnailUrl:
        "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
      likes: 81200000,
      views: 65000000,
      channelName: "NASA",
      channelLogoUrl:
        "https://yt3.ggpht.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 15,
      title: "Starship | First Integrated Flight",
      thumbnailUrl:
        "https://imgs.search.brave.com/WjmXwu1uPbEPEl35OrLx-hVL9IAzoIBJOvLcmCQHD4g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ldmVy/eWRheWFzdHJvbmF1/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDQvU3Rh/cnNoaXBfRnVsbF9T/dGFja19XYXZlc18y/XzFfb2ZfMS05LTgw/MHg1MzYuanBlZw",
      likes: 31000000,
      views: 6100000,
      channelName: "SpaceX",
      channelLogoUrl:
        "https://imgs.search.brave.com/azHpChd_AOjtAOWRY65wzBTa9DA6uAbkrUR8WM75uHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzc0/TUQ1Z0JNcTRoUTZw/VDd2RzI0eFUtMzIw/LTgwLmpwZw",
    },
    {
      id: 16,
      title: "FIFA World Cup Goals and Assists",
      thumbnailUrl:
        "https://imgs.search.brave.com/Nor10WR3mABgaiLjNcOxOKmsxCTdJR7M1mAyo9Y3yVo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x5bXBpY2NoYW5u/ZWwuY29tL2ltYWdl/cy9pbWFnZS9wcml2/YXRlL3Rfc193ODYw/L3Rfc18xNl85X2df/YXV0by9mX2F1dG8v/cHJpbWFyeS9zazVp/aDh2emtkY2kzZ210/YXFueQ.jpeg",
      likes: 108000000,
      views: 62310000,
      channelName: "FIFA",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/GV75cdGEHaUZnQ_oJIzj_tGzLZCX2RyDKhn_75fFW6Mf_dpi8Fn6TaevTNhbrtLLBpk0upYt=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 18,
      title: "Raw Vs SmackDown",
      thumbnailUrl:
        "https://imgs.search.brave.com/SXHDuvfXpkddEXth0qdugBXZ2417-p3CcLrGYIcIfB0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEWXdZMlZq/WldVdE5qZzVOaTAw/TjJVM0xXSmhPV010/TnpWalltSXhaamxp/WlRJNVhrRXlYa0Zx/Y0dkZVFYVnlOakU0/TmprNU5UTUAuanBn",
      likes: 31000000,
      views: 6100000,
      channelName: "WWE",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKaERKeBTY6Z-ktDAHmsZ38tbAi2M84InFei9RtiPmQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 19,
      title: "Meri Jaane Man - Kushi",
      thumbnailUrl:
        "https://imgs.search.brave.com/Hu7foTFyTHET2QjWIJevFK6B7LJBmNWJ_ooB11s17dw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yLnNh/cmVnYW1hLmNvbS9y/ZXNvdXJjZXMvaW1h/Z2VzL2NhcnZhYW4v/Q2FydmFhbl9Qb3At/Q29sb3VyX0hpbmRp/LUFsbC1DYXJ2YWFu/LTY0MHg0NDcuanBn/P3Y9MTE",
      likes: 1080000,
      views: 623100,
      channelName: "Saregama Music",
      channelLogoUrl:
        "https://yt3.googleusercontent.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s176-c-k-c0x00ffffff-no-rj",
    },
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);
  return (
    <>
      <div className="App">
        <h1>Youtube Inspired Gallery</h1>
        <Suspense fallback={<VideoCardPlaceholder />}>
        <div id="wrapper">
            {isLoading ? (
              // Show loading layouts while data is loading
              Array.from({ length: 9 }).map((_, index) => (
                <VideoCardPlaceholder key={index} />
              ))
            ) : (
              // Show actual data once loaded
              videos.map((item) => (
                <VideoCard key={item.id} video={item} />
              ))
            )}
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
