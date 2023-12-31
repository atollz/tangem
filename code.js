
const BANNER_VISIBILITY_KEY = 'banner-is-hidden';
document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('#header');
    const bannerElement = document.querySelector('#banner');
    const closeBannerElement = bannerElement.getElementsByTagName('button')[0];

    const showBanner = () => {
        const bannerIsHidden = localStorage.getItem(BANNER_VISIBILITY_KEY) === 'true';
        if(!bannerIsHidden) {
            bannerElement.classList.remove('hidden');
        }
    }

    const hideBanner = () => {
        localStorage.setItem(BANNER_VISIBILITY_KEY, 'true');
        bannerElement.style.right = '-1000px';
    }

    closeBannerElement.addEventListener('click', hideBanner);

    const handleIntersect = ([entry]) => {
        if (entry.boundingClientRect.bottom < 0) {
            showBanner();
        }
    }

    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        threshold: 0
    });

    observer.observe(headerElement);
});