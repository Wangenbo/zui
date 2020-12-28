function addFont(){
    // #ifdef APP-PLUS
    const dom = weex.requireModule('dom');
    dom.addRule('fontFace', {
        fontFamily: 'zicon',
        src: "url('/static/font/loading.ttf')"
    });

    dom.addRule('fontFace', {
        fontFamily: 'vicon',
        src: "url('/static/font/z-icon.ttf')"
    });
    // #endif
}
export {
    addFont
}
