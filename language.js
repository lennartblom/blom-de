

i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        ns: ['text'],
        defaultNS: 'special',
        backend: {
            // load from i18next-gitbook repo
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            crossDomain: true
        }
    }, function(err, t) {
        // init set content
        updateContent();
    });


// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
    document.getElementById('tagline-text').innerHTML = i18next.t('text:tagline:text');
    document.getElementById('tagline-button').innerHTML = i18next.t('text:tagline:button');

    document.getElementById('nav-about').innerHTML = i18next.t('text:navigation:about');
    document.getElementById('nav-photography').innerHTML = i18next.t('text:navigation:photography');
    document.getElementById('nav-platforms').innerHTML = i18next.t('text:navigation:platforms');
    document.getElementById('nav-contact').innerHTML = i18next.t('text:navigation:contact');

    document.getElementById('about-headline').innerHTML = i18next.t('text:about:headline');
    document.getElementById('about-text').innerHTML = i18next.t('text:about:text');

    document.getElementById('photography-headline').innerHTML = i18next.t('text:photography:headline');
    document.getElementById('photography-text').innerHTML = i18next.t('text:photography:text');

    document.getElementById('platforms-linkedin').innerHTML = i18next.t('text:platforms:linkedin');
    document.getElementById('platforms-github').innerHTML = i18next.t('text:platforms:github');
    document.getElementById('platforms-twitter').innerHTML = i18next.t('text:platforms:twitter');
    document.getElementById('platforms-stackoverflow').innerHTML = i18next.t('text:platforms:stackoverflow');

    document.getElementById('contact-slogan').innerHTML = i18next.t('text:contact:slogan');
    document.getElementById('contact-contact').innerHTML = i18next.t('text:contact:contact');
    document.getElementById('contact-instagram').innerHTML = i18next.t('text:contact:instagram');
    document.getElementById('contact-thanks-headline').innerHTML = i18next.t('text:contact:thanks-headline');
    document.getElementById('contact-thanks-text').innerHTML = i18next.t('text:contact:thanks-text');

    document.getElementById('footer-imprint').innerHTML = i18next.t('text:footer:imprint');


}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
    updateContent();
});