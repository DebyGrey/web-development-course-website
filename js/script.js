// Hamburger open/close
// get the hamburger element
const hamburger = document.querySelector('#hamburger');
// get the close-btn element
const closeBtn = document.querySelector('#close-hamburger');
// get the mobile menu container element
const mobileMenu = document.querySelector('.mobile-menu');

// toggle visibility function for nav menu
function toggleNavMenu() {
  mobileMenu.classList.toggle('show-menu');
}

// open mobile nav container
if (hamburger) {
  hamburger.addEventListener('click', toggleNavMenu);
}
// close mobile nav container
if (closeBtn) {
  closeBtn.addEventListener('click', toggleNavMenu);
}

// javascript object for the entire work section content
const featuredSpeakers = [
  {
    id: 1,
    speakerImg: './img/speaker-01.png',
    speakerName: 'Yochai Benkler',
    speakerPosition:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBio:
      ' Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    speakerImg: './img/speaker-02.png',
    speakerName: 'Kilnam Chon',
    speakerPosition: '',
    speakerBio:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 3,
    speakerImg: './img/speaker-03.png',
    speakerName: 'SohYeong Noh',
    speakerPosition:
      'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBio:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 4,
    speakerImg: './img/speaker-04.png',
    speakerName: 'Julia Leda',
    speakerPosition: 'President of Young Pirates of Europe',
    speakerBio:
      'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 5,
    speakerImg: './img/speaker-05.png',
    speakerName: 'Lila tretikov',
    speakerPosition: 'Executive Director of the Wikimedia Foundation',
    speakerBio:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    id: 6,
    speakerImg: './img/speaker-06.png',
    speakerName: 'Ryan Merkley',
    speakerPosition:
      'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    speakerBio:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source movement',
  },
];
// Render featured speakers
function renderFeaturedSpeakers() {
  const speakersContent = document.querySelector('.speakers-content');

  const speakerItems = featuredSpeakers.map(
    (speakerData, i) => `
      <div class="speaker-card speaker-${i + 1}">
        <img class="speaker-img" src="${
  speakerData.speakerImg
}" alt="speaker picture"/>
        <div class="speaker-intro">
          <div class="speaker">
            <h3 class="speaker-name text-15-FW-700 custom-black-B">${
  speakerData.speakerName
}</h3>
            <p class="speaker-position custom-red-3 text-10-LH-15">${
  speakerData.speakerPosition
}</p>
            <div class="title-underline-2"></div>
          </div> 
          <p class="speaker-desc custom-gray-10 text-9">${
  speakerData.speakerBio
}</p>
        </div>
      </div>
    `,
  );

  const speakerSection = `
    <div class="speakers-section-title">
      <h3 class="text-20 big-text-30"> Featured Speakers </h3> 
      <div class="title-underline"></div>
    </div>
    <div class="speakers-group">
      ${speakerItems.join('')}
    </div>
    <button class="see-more-btn more-btn text-11 custom-gray-10">MORE <i class="fa-solid fa-angle-down down-arrow custom-red text-14"></i></button>
    <button class="see-less-btn more-btn text-11 custom-gray-10 hide-btn">LESS <i class="fa-solid fa-angle-up down-arrow custom-red text-14"></i></button>
  `;

  speakersContent.innerHTML = speakerSection;
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const seeLessBtn = document.querySelector('.see-less-btn');
  const speaker3 = document.querySelector('.speaker-3');
  const speaker4 = document.querySelector('.speaker-4');
  const speaker5 = document.querySelector('.speaker-5');
  const speaker6 = document.querySelector('.speaker-6');

  function seeMore() {
    seeMoreBtn.classList.add('hide-btn');
    speaker3.classList.remove('speaker-3');
    speaker4.classList.remove('speaker-4');
    speaker5.classList.remove('speaker-5');
    speaker6.classList.remove('speaker-6');
    seeLessBtn.classList.remove('hide-btn');
  }

  function seeLess() {
    seeLessBtn.classList.add('hide-btn');
    speaker3.classList.add('speaker-3');
    speaker4.classList.add('speaker-4');
    speaker5.classList.add('speaker-5');
    speaker6.classList.add('speaker-6');
    seeMoreBtn.classList.remove('hide-btn');
  }

  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', renderFeaturedSpeakers);
