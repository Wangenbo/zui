function addFont(){
    // #ifdef APP-PLUS
    const dom = weex.requireModule('dom');
    dom.addRule('fontFace', {
        fontFamily: 'zicon',
        src: "url('/static/font/loading.ttf')"
    });
    // #endif
}
export {
    addFont
}
