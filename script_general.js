(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","class":"Player","scrollBarColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarWidth":10,"width":"100%","gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"propagateClick":false,"id":"rootPlayer","paddingBottom":0,"horizontalAlign":"left","downloadEnabled":false,"overflow":"hidden","paddingRight":0,"verticalAlign":"top","defaultVRPointer":"laser","definitions": [{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_F302BF77_F87D_A141_41E3_A427A0591F7E","hfovMax":130,"label":trans('panorama_F302BF77_F87D_A141_41E3_A427A0591F7E.label'),"adjacentPanoramas":[{"distance":3.71,"yaw":115.07,"select":"this.overlay_F55E2FD7_F87E_6141_41D5_B0C4D9EE6902.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F55E2FD7_F87E_6141_41D5_B0C4D9EE6902"},"class":"AdjacentPanorama","backwardYaw":-120.53,"panorama":"this.panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F"}],"overlays":["this.overlay_F55E2FD7_F87E_6141_41D5_B0C4D9EE6902"],"thumbnailUrl":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"360.02"},"partial":false},{"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_F1A7494B_F87D_A141_41DF_F25013D08D6B","id":"panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_camera"},{"label":trans('photo_F77169FB_F882_6140_41CB_1EF95C738DDD.label'),"height":5292,"duration":5000,"thumbnailUrl":"media/photo_F77169FB_F882_6140_41CB_1EF95C738DDD_t.jpg","width":3135,"data":{"label":"H19714-L364603982_original"},"class":"Photo","image":{"class":"ImageResource","levels":[{"url":"media/photo_F77169FB_F882_6140_41CB_1EF95C738DDD.jpg","class":"ImageResourceLevel"}]},"id":"photo_F77169FB_F882_6140_41CB_1EF95C738DDD"},{"arrowKeysAction":"translate","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F","hfovMax":130,"label":trans('panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F.label'),"adjacentPanoramas":[{"distance":4.02,"yaw":-120.53,"select":"this.overlay_F5CAD224_F87E_A2C0_41E9_086654B13E67.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F5CAD224_F87E_A2C0_41E9_086654B13E67"},"class":"AdjacentPanorama","backwardYaw":115.07,"panorama":"this.panorama_F302BF77_F87D_A141_41E3_A427A0591F7E"}],"overlays":["this.overlay_F5CAD224_F87E_A2C0_41E9_086654B13E67","this.overlay_F6E7E28D_F87D_A3C0_41A2_7E1386D3336C"],"thumbnailUrl":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"360.01"},"partial":false},{"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_F1AAC94B_F87D_A141_41A2_FFD45496C2BA","id":"panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_camera"},{"class":"ViewerArea","data":{"name":"Main Viewer"},"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarProgressOpacity":1,"subtitlesBottom":50,"toolTipFontWeight":"normal","width":"100%","toolTipBorderRadius":3,"paddingLeft":0,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"id":"MainViewer","toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingRight":0,"progressRight":0,"toolTipShadowOpacity":1,"transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesTop":0,"subtitlesHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"subtitlesGap":0,"progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#3399FF"],"subtitlesOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","height":"100%","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","progressBottom":0,"subtitlesBorderSize":0,"subtitlesPaddingBottom":5,"minHeight":50,"subtitlesPaddingRight":5,"playbackBarBottom":5,"progressHeight":10,"borderSize":0,"progressBorderSize":0,"translationTransitionDuration":1000,"subtitlesTextDecoration":"none","minWidth":100,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"progressBarBorderSize":0,"toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","subtitlesPaddingTop":5,"playbackBarBackgroundColorDirection":"vertical","paddingTop":0,"playbackBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"playbackBarHeadShadowVerticalLength":0,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipShadowVerticalLength":0,"progressBorderRadius":0,"progressLeft":0,"surfaceReticleOpacity":0.6,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontWeight":"normal","playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadHeight":15,"subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","toolTipShadowColor":"#333333","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","toolTipBorderSize":1,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","toolTipOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"borderRadius":0,"subtitlesPaddingLeft":5,"playbackBarLeft":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesEnabled":true,"shadow":false,"playbackBarHeadOpacity":1,"vrPointerColor":"#FFFFFF"},{"scrollBarColor":"#000000","shadowSpread":1,"closeButtonIconLineWidth":2,"class":"Window","width":450,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonBackgroundOpacity":0,"backgroundOpacity":1,"backgroundColorRatios":[],"titlePaddingRight":5,"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonPressedBorderColor":"#000000","shadowColor":"#000000","closeButtonPressedIconColor":"#FFFFFF","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"paddingLeft":0,"paddingRight":0,"titlePaddingTop":5,"id":"window_E87E8A06_F88D_E2C0_41A9_E1CEB00D966E","closeButtonPressedBorderSize":0,"closeButtonIconHeight":12,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"closeButtonBorderSize":0,"closeButtonRollOverBackgroundOpacity":0,"headerPaddingTop":10,"modal":true,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"height":900,"backgroundColor":[],"bodyPaddingRight":5,"footerBackgroundOpacity":1,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonIconColor":"#000000","closeButtonRollOverBorderSize":0,"closeButtonPaddingRight":0,"headerPaddingRight":10,"layout":"vertical","closeButtonBorderRadius":11,"headerBackgroundColorDirection":"vertical","closeButtonBackgroundColorRatios":[],"contentOpaque":false,"closeButtonPaddingLeft":0,"shadowOpacity":0.5,"scrollBarWidth":10,"scrollBarVisible":"rollOver","minHeight":20,"shadowHorizontalLength":3,"minWidth":20,"backgroundColorDirection":"vertical","closeButtonBorderColor":"#000000","borderSize":0,"gap":10,"toolTipHorizontalAlign":"center","bodyBackgroundColorDirection":"vertical","footerBackgroundColorRatios":[0,0.9,1],"bodyPaddingLeft":5,"closeButtonPressedBackgroundOpacity":0,"paddingTop":0,"closeButtonRollOverIconLineWidth":2,"horizontalAlign":"center","propagateClick":false,"children":["this.htmlText_E8FB86E1_F882_E341_41DC_7979D00C309F","this.image_uidEA822CB1_F88E_67C0_41B9_A8C5A44327FD_1"],"closeButtonBackgroundColor":[],"paddingBottom":0,"headerVerticalAlign":"middle","veilOpacity":0.4,"titleFontFamily":"Arial","closeButtonPaddingTop":0,"overflow":"scroll","closeButtonIconWidth":12,"titleFontColor":"#000000","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverIconColor":"#FFFFFF","verticalAlign":"middle","bodyPaddingTop":5,"titlePaddingLeft":5,"scrollBarMargin":2,"headerBackgroundColorRatios":[0,0.1,1],"shadowVerticalLength":0,"closeButtonPaddingBottom":0,"veilColorRatios":[0,1],"titleHorizontalAlign":"left","headerPaddingLeft":10,"titlePaddingBottom":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"shadowBlurRadius":6,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBackgroundColorRatios":[0],"headerBackgroundOpacity":1,"bodyPaddingBottom":5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyBackgroundColorRatios":[0,0.5,1],"scrollBarOpacity":0.5,"closeButtonPressedIconLineWidth":2,"bodyBackgroundOpacity":1,"borderRadius":5,"footerBackgroundColorDirection":"vertical","veilColorDirection":"horizontal","veilColor":["#000000","#000000"],"closeButtonRollOverBorderColor":"#000000","footerHeight":5,"data":{"name":"Window6991"},"headerPaddingBottom":10,"shadow":true,"titleFontSize":"1.29vmin"},{"items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_F302BF77_F87D_A141_41E3_A427A0591F7E_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_F302BF77_F87D_A141_41E3_A427A0591F7E"},{"camera":"this.panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F_camera","class":"PanoramaPlayListItem","media":"this.panorama_F1B18530_F87D_A6DF_41CA_B76F0EA4FC3F","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_F5E2E02D_F87E_7EC1_41DF_A32E436AE619"],"items":[{"distance":100,"yaw":115.07,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"horizontalAlign":"center","vfov":4.48,"opacity":0.69,"verticalAlign":"middle","image":"this.AnimatedImageResource_EA829CA1_F88E_67C0_41ED_E45C7E25E5C8","data":{"label":"Circle Arrow 01b"},"pitch":-24.64,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 01b"},"id":"overlay_F55E2FD7_F87E_6141_41D5_B0C4D9EE6902"},{"restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_F1A7494B_F87D_A141_41DF_F25013D08D6B"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_F5C98224_F87E_A2C0_41D1_CF499CD39316"],"items":[{"distance":100,"yaw":-120.53,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"horizontalAlign":"center","vfov":4.48,"opacity":0.69,"verticalAlign":"middle","image":"this.AnimatedImageResource_EA82DCA1_F88E_67C0_41E6_FC398E6FBB61","data":{"label":"Circle Arrow 01b"},"pitch":-22.93,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 01b"},"id":"overlay_F5CAD224_F87E_A2C0_41E9_086654B13E67"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_F6BB429D_F87D_A3C0_41ED_95A48F4F7617"],"items":[{"distance":100,"yaw":22.94,"class":"HotspotPanoramaOverlayImage","hfov":3.61,"horizontalAlign":"center","vfov":4.93,"data":{"label":"Info Red 07"},"verticalAlign":"middle","image":"this.AnimatedImageResource_EA823CA1_F88E_67C0_41DA_D9CB61C5BCE5","pitch":-12.47,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"Info Red 07"},"id":"overlay_F6E7E28D_F87D_A3C0_41A2_7E1386D3336C"},{"restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_F1AAC94B_F87D_A141_41A2_FFD45496C2BA"},{"scrollBarVisible":"always","shadow":false,"class":"HTMLText","scrollBarHorizontalMargin":-3,"toolTipHorizontalAlign":"center","borderSize":0,"width":"100%","backgroundOpacity":0,"paddingTop":10,"paddingLeft":10,"propagateClick":false,"paddingBottom":10,"id":"htmlText_E8FB86E1_F882_E341_41DC_7979D00C309F","paddingRight":10,"height":"31%","html":trans('htmlText_E8FB86E1_F882_E341_41DC_7979D00C309F.html'),"borderRadius":0,"scrollBarOpacity":0.5,"scrollBarWidth":10,"data":{"name":"HTMLText6992"},"minWidth":0,"scrollBarColor":"#000000","minHeight":0},{"class":"Image","toolTipHorizontalAlign":"center","width":"100%","url":"media/photo_F77169FB_F882_6140_41CB_1EF95C738DDD.jpg","backgroundOpacity":0,"paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","propagateClick":false,"paddingBottom":0,"id":"image_uidEA822CB1_F88E_67C0_41B9_A8C5A44327FD_1","paddingRight":0,"verticalAlign":"middle","height":"68%","borderRadius":0,"minHeight":0,"data":{"name":"Image9877"},"minWidth":0,"shadow":false,"borderSize":0,"scaleMode":"fit_inside"},{"id":"HotspotPanoramaOverlayArea_F5E2E02D_F87E_7EC1_41DF_A32E436AE619","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_EA829CA1_F88E_67C0_41ED_E45C7E25E5C8","levels":[{"height":630,"width":988,"url":"media/res_E8E1457B_F882_A141_41BA_BADE4A2655AC_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_F5C98224_F87E_A2C0_41D1_CF499CD39316","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_EA82DCA1_F88E_67C0_41E6_FC398E6FBB61","levels":[{"height":630,"width":988,"url":"media/res_E8E1457B_F882_A141_41BA_BADE4A2655AC_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_F6BB429D_F87D_A3C0_41ED_95A48F4F7617","click":"this.showWindow(this.window_E87E8A06_F88D_E2C0_41A9_E1CEB00D966E, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"frameCount":24,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_EA823CA1_F88E_67C0_41DA_D9CB61C5BCE5","levels":[{"height":510,"width":340,"url":"media/res_E8E2D57B_F882_A141_41E7_B95F1683ADA4_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41}],"scrollBarMargin":2,"backgroundPreloadEnabled":true,"height":"100%","backgroundColor":["#FFFFFF"],"children":["this.MainViewer"],"scripts":{"textToSpeech":TDV.Tour.Script.textToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"isPanorama":TDV.Tour.Script.isPanorama,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"init":TDV.Tour.Script.init,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"unregisterKey":TDV.Tour.Script.unregisterKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"mixObject":TDV.Tour.Script.mixObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupImage":TDV.Tour.Script.showPopupImage,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setValue":TDV.Tour.Script.setValue,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaByName":TDV.Tour.Script.getMediaByName,"setLocale":TDV.Tour.Script.setLocale,"quizStart":TDV.Tour.Script.quizStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPixels":TDV.Tour.Script.getPixels,"playAudioList":TDV.Tour.Script.playAudioList,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizFinish":TDV.Tour.Script.quizFinish,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentByName":TDV.Tour.Script.getComponentByName,"translate":TDV.Tour.Script.translate,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"layout":"absolute","mobileMipmappingEnabled":false,"borderRadius":0,"scrollBarOpacity":0.5,"start":"this.init()","contentOpaque":false,"minHeight":20,"data":{"name":"Player510","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"minWidth":20,"shadow":false,"desktopMipmappingEnabled":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Jul 28 2024