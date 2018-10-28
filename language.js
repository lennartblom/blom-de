

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
}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
    updateContent();
});