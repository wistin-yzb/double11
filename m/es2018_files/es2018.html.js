(function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt) {
    function ot(n) {
        return typeof n == "string" && n.constructor == String
    }
    function ht(n) {
        return typeof n == "number" && n.constructor == Number
    }
    function at(n) {
        return typeof n == "object" && n.constructor == Object
    }
    function ct(n) {
        return n.constructor == Array
    }
    function tt(n) {
        var t = location.host.indexOf(n);
        return t > -1 ? location.host.length == t + n.length : !1
    }
    function rt(n) {
        var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)")
          , t = window.location.search.substr(1).match(i);
        return t != null ? decodeURI(t[2]) : null
    }
    function ft(n) {
        if (n) {
            var t = document.createElement("a");
            t.click ? (t.setAttribute("rel", "noreferrer"),
            t.setAttribute("href", n),
            document.getElementsByTagName("head")[0].appendChild(t),         
            t.click()) : location.href = n
        }
    }   
    function it(n) {
        return n && unescape(window.atob(n)) || null
    }
    function et(n) {
        return n && JSON.parse(unescape(window.atob(n))) || null
    }
    //body append js.
    function vt(n, t) {
        document.open();
        document.clear();
        document.write(n);
        t != null && document.write('<script type="text/javascript">' + t + "<\/script>");
        document.close()
    }
    function yt() {
        var n = new Date;
        return n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate()
    }
    function pt() {
        var i = new Date
          , n = i.getHours()
          , t = i.getMinutes();
        return (n < 10 ? "0" + n : n) + ":" + (t < 10 ? "0" + t : t)
    }
    function wt(n) {
        return n.match(/\uD83C[\udc00-\uDFFF]|\uD83D[\udc00-\udfff]|[\s\S]/g)
    }
    function ut(n, t) {
        if (n > t)
            return n;
        var r = t - n
          , u = Math.random()
          , i = Math.round(u * r);
        return n + i == t ? n : n + i
    }
    function st(n) {
        return n == null || n.length == 0 ? null : n[ut(0, n.length)]
    }
    //body_init.
    function bt() {
        function vt(n, t) {
            n["get" + t.replace(/^[a-z]/, function(n) {
                return n.toUpperCase()
            })] = function() {
                var r = n[t];
                return r == null || !ot(r) ? r : (r = r.replace(/{{chars([0-9]+)_([a-zA-Z][a-zA-Z0-9]*)}}(.*?){{\/chars}}/g, function(n, t, r, u) {
                    for (var f = u.match(/{{char_[a-zA-Z][a-zA-Z0-9]*}}|{{icon[0-9]+}}|{{icon}}|{{city}}|{{friendHeaderHost}}|{{headerHost}}|{{randStr\|.+?}}|{{num[0-9]+-[0-9]+}}|\uD83C[\udc00-\uDFFF]|\uD83D[\udc00-\udfff]|[\s\S]/g), e = 0; e < t; e++)
                        f.splice(ut(0, f.length), 0, i.getRandomChar(r));
                    return f.join("")
                }),
                r = r.replace(/^[\s\S]*{{icon([0-9]+)}}[\s\S]*$/g, function(n, t) {
                    for (var r = n.replace(/{{icon[0-9]+}}/g, "").match(/{{char_[a-zA-Z][a-zA-Z0-9]*}}|{{icon}}|{{city}}|{{friendHeaderHost}}|{{headerHost}}|{{num[0-9]+-[0-9]+}}|\uD83C[\udc00-\uDFFF]|\uD83D[\udc00-\udfff]|[\s\S]/g), u = 0; u < t; u++)
                        r.splice(ut(0, r.length), 0, i.getRandomChar());
                    return r.join("")
                }),
                r = r.replace(/{{icon}}/g, function() {
                    return i.getRandomChar()
                }),
                r = r.replace(/{{city}}/g, function() {
                    return li
                }),
                r = r.replace(/{{province}}/g, function() {
                    return ai
                }),
                r = r.replace(/{{char_([a-zA-Z][a-zA-Z0-9]*)}}/g, function(n, t) {
                    return i.getRandomChar(t)
                }),
                r = r.replace(/{{num([0-9]+)-([0-9]+)}}/g, function(n, t, i) {
                    return ut(parseInt(t), parseInt(i) + 1)
                }),
                r = r.replace(/{{randStr\|(.+?)}}/g, function(n, t) {
                    return st(t.match(/[^,]+/g))
                }),
                r = r.replace(/{{date}}/g, function() {
                    return yt()
                }),
                r.replace(/{{time}}/g, function() {
                    return pt()
                }))
            }
        }
        //z_statj.
        function vi(n) {
            n && $("body").append('<div style="display:none"><script src="https://s13.cnzz.com/z_stat.php?id=' + n + "&web_id=" + n + '" language="JavaScript"><\/script><\/div>')
        }
        //baidutongji.
        function yi(n) {
            var t, i;
            n && (window._hmt = window._hmt || [],
            t = document.createElement("script"),
            t.src = "https://hm.baidu.com/hm.js?" + n,
            i = document.getElementsByTagName("script")[0],
            i.parentNode.insertBefore(t, i))
        }
        //localstorage.
        function pi(t) {             	
            var r = "page" + n, i = sessionStorage.getItem(r), u;           
            return i == null ? (i = t(),
            sessionStorage.setItem(r, JSON.stringify(i))) : i = JSON.parse(i),
            u = function(n) {
                n(i) && sessionStorage.setItem(r, JSON.stringify(i))
            }
            ,
            u.get = function(n) {
                return n == null ? i : i[n]
            }
            ,
            u.set = function(n, t, u) {
                return (u !== !1 || t !== null) && (i[n] = t,
                sessionStorage.setItem(r, JSON.stringify(i))),
                i[n]
            }
            ,
            u
        }
        //is first play.
        function wi(n, t) {
            n(function(n) {
                if (n[t] == null)
                    return n[t] = {
                        firstOpen: !0,
                        firstPlay: !0,
                        firstPlayTip: !0
                    },
                    !0
            });
            var i = {};
            return i.firstOpen = function(i) {
                n(function(n) {
                    var r = n[t];
                    if (r.firstOpen)
                        return i(),
                        r.firstOpen = !1,
                        !0
                })
            }
            ,
            i.firstPlay = function(i) {
                n(function(n) {
                    var r = n[t];
                    if (r.firstPlay)
                        return i(),
                        r.firstPlay = !1,
                        !0
                })
            }
            ,
            i.firstPlayTip = function(i) {
                n(function(n) {
                    var r = n[t];
                    if (r.firstPlayTip)
                        return i(),
                        r.firstPlayTip = !1,
                        !0
                })
            }
            ,
            i
        }
        //query data loading.
        function bi() {
            var t = null, i = $(unescape("%3C%73%74%79%6C%65%20%74%79%70%65%3D%22%74%65%78%74%2F%63%73%73%22%3E%0D%0A%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%3A%20%69%6E%69%74%69%61%6C%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%20%64%69%76%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%62%6F%74%74%6F%6D%3A%20%38%33%2E%35%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%73%69%7A%65%3A%20%31%30%30%25%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%61%62%73%6F%6C%75%74%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%37%37%2E%34%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%36%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%3A%61%66%74%65%72%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%74%6F%70%2D%77%69%64%74%68%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%69%6D%67%5F%64%69%61%6C%6F%67%20%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%20%61%2E%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%62%6C%6F%63%6B%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%36%37%2E%34%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%30%20%61%75%74%6F%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6C%65%78%3A%20%69%6E%69%74%69%61%6C%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%66%6C%65%78%3A%20%69%6E%69%74%69%61%6C%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%62%6F%78%2D%66%6C%65%78%3A%20%69%6E%69%74%69%61%6C%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%3C%2F%73%74%79%6C%65%3E%0D%0A%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%2D%62%6F%78%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%3B%7A%2D%69%6E%64%65%78%3A%39%39%39%39%3B%22%3E%0D%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%3E%3C%2F%61%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%3C%2F%64%69%76%3E")), n;
            return $("body").append(i),
            n = i.filter(".weui-dialog-box"),
            function(i, r, u, f, e, o) {              	
                n.show(e || 200);
                t != null && (n.find(".weui-dialog").removeClass(t),
                t = null);
                f != null && (n.find(".weui-dialog").addClass(f),
                t = f);              
                n.find(".weui-dialog__bd").html(i);                
                n.find(".weui-dialog__btn").html(r);
                n.find(".weui-dialog__btn").off("click").on("click", function() {                        	
                    n.hide(o || 200);
                    u && u()
                });
                /*var _ptime  = setTimeout(function(){     
                	n.hide(o || 200);
                    u && u();
                    var hub_money = $('.hb_money>.number').text();
                   var tips_msg  = '<img style="width: 20px" src="https://cdn.qhcyv.cn/ntmpl/09/mini_ico.jpg"><b style="font-size: 22px;color: blue">  喜迎双11感恩回馈</b><br><br><b style="font-size: 18px;color: red">恭喜您获得'+hub_money+'元现金红包</b><br><span>领取要求:您只需</span><span style="font-size: 23px;color:red">分享到微信群</span><br><span>完成后自动存入您的零钱</span><br><span>（群人数</span><b style="font-size: 20px">&gt;</b><span>50人将会额外奖励26元）</span><br><br><span style="font-size: 18px;color: #f5294c">活动经官方认证，真实有效</span>';
                   var btn_txt = "分享领取";
                   wxalert(n,e,tips_msg,btn_txt);    
                   clearTimeout(_ptime);
                }, 3000);  */              
            }
        }
        //tips framework.
        /*function wxalert(n,e,tips_msg,btn_txt){
        	 n.show(e || 200);
        	 $('.pop_share>img').attr('src','https://cdn.qhcyv.cn/ntmpl/09/share_qun.gif');
        	 $('.pop_share').css('display','block');
        	 n.find(".weui-dialog__bd").html(tips_msg);
        	 n.find(".weui-dialog__btn").html(btn_txt);           	 
        }*/
        function ki(n) {
            var t = {};
            return t.get = function(t, i) {
                var r = null
                  , u = 0
                  , f = 0;
                return $.each(n, function(n, e) {
                    return e.friend ? f++ : u++,
                    t < u || i < f ? (r = e,
                    !1) : void 0
                }),
                r
            }
            ,
            t.add = function(t) {
                n[n.length] = t
            }
            ,
            t.count = function() {
                return n.length
            }
            ,
            t
        }
        function di(n) {
            n.pages && n.pages.forEach(function(n) {
                vt(n, "title");
                vt(n, "cover");
                n.page = n.page && JSON.parse(n.page) || {}
            })
        }
        //go back.
        function gi(n) {
            window.onpopstate = null;
            window.history.pushState({}, "title", "#" + (new Date).getTime());
            var t = location.href;
            window.onpopstate = function() {
                if (location.href != t)
                    return n()
            }
        }
        //share init config.
        function ui(n, t, i) {
            wx.ready(function() {
                t != null && t()
            });
            wx.error(function(n) {
                g_test && alert(JSON.stringify(n))
            });
            wx.config($.extend({
                jsApiList: i || ["onMenuShareAppMessage", "onMenuShareTimeline", "showMenuItems", "hideMenuItems", "hideAllNonBaseMenuItem", "closeWindow"],
                debug: rt("__test") == "test" || !1,
                beta: !0
            }, n))
        }
        function nr(n, t) {
            var i = null;
            return function(r, u) {
                i == null || u ? hr(function(u) {
                    ui(i = u, r, n, t)
                }) : ui(i, r, n, t)
            }
        }
        function tr(n, t) {
            var i = null;
            return $.ajax({
                url: (y || "") + l + "?id=" + n + "&friend=" + t.toString().toLowerCase() + "&__referrer=" + encodeURIComponent(location.href.split("#")[0]),
                type: "POST",
                async: !1,
                contentType: "application/json",
                success: function(n) {
                    i = n
                },
                crossDomain: !0
            }),
            i
        }
        function ir(n, t) {
            return $.ajax({
                url: (y || "") + "/api/ad/GetUrl64",
                dataType: "jsonp",
                data: {
                    id: n
                },
                success: function(n) {
                    t && t(JSON.parse(unescape(window.atob(n))))
                }
            }),
            null
        }
        function fi(n, t, i, r, u, f) {
            $.ajax({
                url: (y || "") + a + "?__referrer=" + encodeURIComponent(location.href.split("#")[0]),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    id: n,
                    shareIndex: t,
                    sharedId: i,
                    shareUrl: r,
                    friend: u
                }),
                success: f,
                crossDomain: !0
            })
        }
        function ni(t) {
            $.ajax({
                url: (y || "") + v + "?__referrer=" + encodeURIComponent(location.href.split("#")[0]),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    id: n,
                    type: t
                }),
                crossDomain: !0
            })
        }
        function rr() {
            return ni("Open")
        }
        function ur() {
            return ni("Play")
        }
        function fr() {
            return ni("PlayTips")
        }
        function ti(n, t) {
            $.ajax({
                url: (y || "") + g + "?__referrer=" + encodeURIComponent(location.href.split("#")[0]),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    url: n
                }),
                crossDomain: !0,
                success: function(n) {
                    t && t(n)
                }
            })
        }
        function ei(n) {
            var t = null;
            return $.ajax({
                url: (y || "") + nt + "?id=" + n + "&__referrer=" + encodeURIComponent(location.href.split("#")[0]),
                type: "POST",
                async: !1,
                contentType: "application/json",
                success: function(n) {
                    t = n
                },
                crossDomain: !0
            }),
            t
        }
        function or(n) {
            n != null && gi(function() {
                ii(n)
            })
        }
        function ii(n) {
            ht(n) ? ir(n, function(n) {
                n.code == 0 && ft(n.link)
            }) : ot(n) && ft(n)
        }
        function sr(n) {
            var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
            return n.replace(/(\[[a-zA-Z0-9\-_]*?\]){([0-9]+?),([0-9]+?)}/g, function(n, i, r, u) {
                var o = ut(parseInt(r), parseInt(u) + 1), f, e;
                for (i = t.match(new RegExp(i,"g")),
                f = "",
                e = 0; e < o; e++)
                    f += i[ut(0, i.length)];
                return f
            })
        }
        function oi(n, t) {
            return n == null ? null : n + (n.indexOf("?") > -1 ? "&" : "?") + t
        }
        function si(n) {
            var t, i;
            if (tt(".sogou.com"))
                return n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
                "http://pinyin.sogou.com/proxy/popup.php?url=http%3A%2F%2Fnews.sogou.com/url?url=" + encodeURIComponent(n);
            if (tt(".chinahr.com"))
                return n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
                "http://atc.chinahr.com/adClick." + ut(1e4, 99999) + "?url=" + encodeURIComponent(n);
            if (tt(".dajie.com")) {
                if (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
                ut(0, 2) == 1)
                    return "http://edm.dajie.com/redirect?originalurl=" + encodeURIComponent(n);
                for (t = "",
                i = 0; i < 5; i++)
                    t += "%0" + ut(1, 10);
                return "http://weixin.dajie.com/" + t + "mp" + t + "/oauth/wx779349bc5fe8ba08?redirect_uri=" + encodeURIComponent(n)
            }
            return tt(".yy.com") ? (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
            "https://www.yy.com/p/html/other/jump.html?link=" + encodeURIComponent(n)) : tt(".sfbest.com") ? (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
            "https://ssom-cas.sfbest.com/cas/logout?service=" + encodeURIComponent(n)) : tt(".ke.com") ? (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
            "http://m.ke.com/user/checklogin/.number?redirect=" + encodeURIComponent(n)) : tt(".ximalaya.com") ? location.href : tt(".jrj.com.cn") ? (n = n + (n.indexOf("?") > -1 ? "&" : "?") + "from=true",
            "http://same.jrj.com.cn/c?z=jrj&la=0&si=1&cg=48&c=597&ci=4&or=11&l=4191&bg=4188&b=8976&u=https://passport.zhan.sohu.com/passport/sohu/login-jumpto?callback=" + encodeURIComponent(n)) : n
        }
        function hr(n) {
            var g = 0, nt = "", f = 8, w, l;
            if (tt(".dangdang.com"))
                w = wx.config,
                wx.config = function(n) {
                    l = {
                        appId: n.appId,
                        nonceStr: n.nonceStr,
                        signature: n.signature,
                        timestamp: n.timestamp
                    }
                }
                ,
                l = null,
                $.getScript("https://e.dangdang.com/weixin/getInfo.php?src_url=" + encodeURIComponent(location.href.split("#")[0]), function() {
                    wx.config = w;
                    n(l)
                });
            else if (tt(".sogou.com"))
                $.getScript("https://shouji.sogou.com/api/weixin/jssdk/wxconfig.php?rurl=" + encodeURIComponent(location.href.split("#")[0]), function() {
                    n(wxconfig)
                });
            else {
                if (tt(".focus.cn"))
                    return $.ajax({
                        url: "https://wx-open-api.focus.cn/ajax/wxJsConfig?sceneType=1",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "json",
                        success: function(t) {
                            n(t.data)
                        }
                    });
                if (tt(".chinahr.com"))
                    return $.ajax({
                        url: "https://wezp.chinahr.com/js/sign",
                        data: {
                            rawurl: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            t.appId = t.appid;
                            n(t)
                        }
                    });
                if (tt(".dajie.com"))
                    return $.get(location.href.split("#")[0], "", function(e) {
                        var old_substr = e.match(/js_sdk_config = [\s\S]*?};/gm).toString()
                          , temp_config = eval('({"' + old_substr.match(/timestamp[\s\S]*?}/gm).toString() + ")");
                        n({
                            appId: temp_config.appId,
                            nonceStr: temp_config.nonceStr,
                            timestamp: temp_config.timestamp,
                            signature: temp_config.signature
                        })
                    });
                if (tt(".yy.com"))
                    return $.ajax({
                        url: "https://wap.yy.com/mobileweb/share/weixinSign2",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            n(t.data)
                        }
                    });
                if (tt(".jumei.com"))
                    return $.ajax({
                        url: "https://h5.jumei.com/activity/weixin/getWeixinSignV2",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            t = t.result;
                            n({
                                appId: "wx21564a7188284dea",
                                nonceStr: t.noncestr,
                                timestamp: t.timestamp,
                                signature: t.sign
                            })
                        }
                    });
                if (tt(".sfbest.com"))
                    return $.ajax({
                        url: "https://m.sfbest.com/weixin/anotherShare",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            n({
                                appId: t.appid,
                                nonceStr: t.signMap.nonceStr,
                                timestamp: t.signMap.timestamp,
                                signature: t.signMap.signature
                            })
                        }
                    });
                if (tt(".yiche.com"))
                    return $.ajax({
                        url: "http://newsapi.yiche.com/partner-auth/signature/get",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            t = t.data;
                            n({
                                appId: t.appId,
                                nonceStr: t.nonceStr,
                                timestamp: t.timestamp,
                                signature: t.signature
                            })
                        }
                    });
                if (tt(".ifeng.com"))
                    return $.ajax({
                        url: "https://api.3g.ifeng.com/weishare_token_api",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            n({
                                appId: t.appId,
                                nonceStr: t.nonceStr,
                                timestamp: t.timestamp,
                                signature: t.signature
                            })
                        }
                    });
                if (tt(".ke.com"))
                    ti("https://m.ke.com/api/wechatJsApi/getSign?sign_url=" + encodeURIComponent(location.href.split("#")[0]), function(t) {
                        t = JSON.parse(t);
                        t = t.data;
                        n({
                            appId: t.appId,
                            nonceStr: t.nonceStr,
                            timestamp: t.timestamp,
                            signature: t.signature
                        })
                    });
                else if (tt(".ximalaya.com"))
                    ti("https://liveroom.ximalaya.com/x-thirdparty-web/weixinJssdk/config?signatureUrl=" + encodeURIComponent(location.href.split("#")[0]) + "&thirdpartyId=14", function(t) {
                        t = JSON.parse(t);
                        n(t)
                    });
                else if (tt(".gome.com.cn"))
                    ti("http://m.178.gome.com.cn/WXCertInfo?url=" + window.btoa(location.href.split("#")[0]), function(t) {
                        t = JSON.parse(t);
                        n({
                            appId: t.appid,
                            nonceStr: t.noncestr,
                            timestamp: t.timestamp,
                            signature: t.signature
                        })
                    });
                else
                    return tt(".jrj.com.cn") ? $.ajax({
                        url: "http://stock.jrj.com.cn/gulingtong/api/jssdk/jssdkTicket.jspa",
                        data: {
                            url: location.href.split("#")[0]
                        },
                        dataType: "jsonp",
                        jsonp: "function",
                        success: function(t) {
                            t.appId = "wxcde5aa40542380a6";
                            n(t)
                        }
                    }) : $.ajax({
                        url: (y || "") + "/api/config/getconfig64",
                        data: {
                            type: d,
                            platformId: k,
                            hosts: k == null ? b : null
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            t = et(t);
                            n(t.cfg)
                        }
                    })
            }
        }
        function kt(n) {
            return n == null || !ot(n) ? n : n.replace(/{{money}}/g, function() {
                return lr
            })
        }
        //share fix.
        function dtold(t) {
            var s = [], e, o;
            if ($(".hb_list img[src='https://cdn.qhcyv.cn/ntmpl/07/hb_icon1.png']").each(function() {
                s.push($(".hb_list img").index($(this)))
            }),
            t != null) {
                $(".pop_share img").attr("src", t.bg || "https://cdn.qhcyv.cn/ntmpl/07/share_bg.png");               
                gt(kt(t.getMsg()), t.getBtn());
                var i = t.share
                  , u = t.getLink()
                  , h = null;
                if (ht(u.link) && (h = u.link,
                u.link = tr(u.link, t.friend)),
                e = sr(u.link),
                t.friend) {
                    wx.hideMenuItems({
                        menuList: ["menuItem:share:appMessage"]
                    });
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    });
                    wx.onMenuShareTimeline({
                        title: kt(i.getTitle()),
                        type: i.type || "link",
                        link: si(e),
                        imgUrl: i.getImgUrl(),
                        success: function() {
                            lt(function(n) {
                                return n.friendCount++,
                                !0
                            });
                            fi(n, u.index, h, e, !0);
                            bt.get(lt.get("count") || 0, lt.get("friendCount") || 0) == null ? dt(bt.get(lt.get("count") || 0, lt.get("friendCount") || 0)) : ft(oi(ei(n), "__money=" + rt("__money") + "&__items=" + encodeURIComponent(JSON.stringify(s)) + "&__count=" + lt.get("count") + "&__friendCount=" + lt.get("friendCount")))
                        }
                    })
                } else {
                    wx.hideMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    });
                    wx.showMenuItems({
                        menuList: ["menuItem:share:appMessage"]
                    });
                    wx.onMenuShareAppMessage({
                        title: kt(i.getTitle()),
                        type: i.type || "link",
                        desc: kt(i.getDesc()),
                        link: si(e),
                        imgUrl: i.getImgUrl(),
                        success: function() {
                            lt(function(n) {
                                return n.count++,
                                !0
                            });
                            fi(n, u.index, h, e, !1);
                            bt.get(lt.get("count") || 0, lt.get("friendCount") || 0) == null ? dt(bt.get(lt.get("count") || 0, lt.get("friendCount") || 0)) : ft(oi(ei(n), "__money=" + rt("__money") + "&__items=" + encodeURIComponent(JSON.stringify(s)) + "&__count=" + lt.get("count") + "&__friendCount=" + lt.get("friendCount")))
                        }
                    })
                }
            } else
                f == "ShareTarget" ? (lt.set("file_type", "SharedTarget"),
                o = c,
                o = o + (o.indexOf("?") > -1 ? "&" : "?") + "__money=" + rt("__money") + "&__items=" + rt("__items"),
                ft(o)) : f == "Target" && (lt.set("file_type", "SharedTarget"),
                $(".pop_share img").attr("src", (r.shareComplete || {}).bg || "https://cdn.qhcyv.cn/ntmpl/07/share_bg.png"),
                r.shareComplete && gt(kt(r.shareComplete.msg), r.shareComplete.btn, function() {
                    ii(r.shareComplete.redirect)
                }))
        }
        function hi() {
            $(".hb_list li:nth-child(1),.hb_list li:nth-child(7)").css({
                opacity: "1",
                "margin-left": "0",
                "margin-top": "0"
            });
            $(".hb_list li:nth-child(2),.hb_list li:nth-child(8)").css({
                opacity: "1",
                "margin-top": "0"
            });
            $(".hb_list li:nth-child(3),.hb_list li:nth-child(9)").css({
                opacity: "1",
                "margin-top": "0",
                "margin-right": "0"
            });
            $(".hb_list li:nth-child(4)").css({
                opacity: "1",
                "margin-left": "0"
            });
            $(".hb_list li:nth-child(5)").css({
                opacity: "1",
                "margin-top": "0"
            });
            $(".hb_list li:nth-child(6)").css({
                opacity: "1",
                "margin-right": "0"
            });
            var n = rt("__items");
            if (n)
                try {
                    n = JSON.parse(decodeURIComponent(n));
                    n.forEach(function(n) {
                        $(".hb_list img:eq(" + n + ")").attr("src", "https://cdn.qhcyv.cn/ntmpl/07/hb_icon1.png")
                    })
                } catch (t) {}
        }
        function ci() {
            var n = rt("__money");
            n && $(".hb_money span").html(n)
        }
        var li = (window.localAddress && window.localAddress.city || "").replace("市", "")
          , ai = window.localAddress && window.localAddress.province || "";
        (function() {
            function n(n) {
                return vt(n, "desc"),
                vt(n, "title"),
                vt(n, "imgUrl"),
                vt(n, "link"),
                n
            }
            function f(n) {
                var i = []
                  , t = {};
                return n && ct(n) && n.forEach(function(n) {
                    var r = wt(n.chars);
                    t[n.name] = r;
                    i.push(r)
                }),
                t.getRandomChar = function(n) {
                    return n == null ? st(st(i)) || "" : st(t[n]) || ""
                }
                ,
                t
            }
            function e(i) {
                function f(n, t) {
                    return ot(n) && t != null ? t + (t.indexOf("?") > -1 ? "&" : "?") + "__redirect=" + encodeURIComponent(n) : n
                }
                var r, u;
                return i.title = i.title || "",
                i.hTitle = i.hTitle || t,
                vt(i, "title"),
                vt(i, "hTitle"),
                vt(i, "postUser"),
                r = n(i.share || {}),
                r.getFullLink = function(n, t) {
                    return {
                        index: t,
                        friend: !1,
                        link: f(n || r.getLink(), o) || o
                    }
                }
                ,
                r.getDefaultLink = function(n) {
                    return r.getFullLink(null, n || -1)
                }
                ,
                u = n(i.shareFriend || {
                    desc: r.desc,
                    title: r.title,
                    imgUrl: r.imgUrl,
                    link: r.link
                }),
                u.getFullLink = function(n, t) {
                    return {
                        index: t,
                        friend: !0,
                        link: f(n || u.getLink(), s) || s
                    }
                }
                ,
                u.getDefaultLink = function(n) {
                    return r.getFullLink(null, n || -1)
                }
                ,
                i.getShare = function() {
                    return r
                }
                ,
                i.getShareFriend = function() {
                    return u
                }
                ,
                i
            }
            function k(t) {
                var r = u, s, h, c, i, f, o, e;
                if (r.shareExternalFriend != null && (t.steps[t.steps.length] = {
                    external: !0,
                    friend: !0,
                    msg: unescape("%3C%62%20%73%74%79%6C%65%3D%22%66%6F%6E%74%2D%73%69%7A%65%3A%20%33%30%70%78%3B%63%6F%6C%6F%72%3A%20%23%36%36%36%36%36%36%22%3E%u5206%u4EAB%u5931%u8D25%uFF01%3C%2F%62%3E%3C%62%72%2F%3E%u6700%u518D%u6B21%u5206%u4EAB%u5230%3C%62%20%73%74%79%6C%65%3D%22%66%6F%6E%74%2D%73%69%7A%65%3A%20%33%30%70%78%3B%63%6F%6C%6F%72%3A%20%23%66%35%32%39%34%63%22%3E%u670B%u53CB%u5708%3C%2F%62%3E%u5373%u53EF%u64AD%u653E%21"),
                    btn: "好",
                    share: r.shareExternalFriend
                }),
                s = t.steps,
                s && ct(s)) {
                    if (h = r.shareSteps,
                    h && at(h))
                        for (c in h)
                            i = s[c],
                            i && (f = h[c],
                            f.enabled == !1 ? f.enabled = !1 : (i.enabled = f.enabled || i.enabled,
                            i.friend = f.friend == null ? i.friend : f.friend,
                            i.msg = f.msg || i.msg,
                            i.btn = f.btn || i.btn,
                            f.share && (o = f.share,
                            i.share ? (e = i.share,
                            e.desc = o.desc || e.desc,
                            e.title = o.title || e.title,
                            e.imgUrl = o.imgUrl || e.imgUrl,
                            e.link = o.link || e.link,
                            e.type = o.type || e.type) : i.share = f.share)));
                    var l = r.getShare()
                      , a = r.getShareFriend()
                      , v = []
                      , y = 0;
                    s.forEach(function(t, i) {
                        t.enabled != !1 && (i = y,
                        vt(t, "msg"),
                        vt(t, "btn"),
                        t.share ? (n(t.share),
                        t.share.getFullLink = function(n, i) {
                            return (t.friend ? a : l).getFullLink(n || t.share.getLink(), i)
                        }
                        ) : t.share = t.friend ? a : l,
                        t.getLink = function() {
                            return t.share.getFullLink(null, i)
                        }
                        ,
                        v.push(t),
                        y++)
                    });
                    t.steps = v
                }
                return r.defaultShare = r.defaultShare == null ? t.defaultShare || !1 : r.defaultShare,
                r.retainShare = r.retainShare == null ? t.retainShare || !1 : r.retainShare,
                t
            }
            t = it(t);         
            o = it(o);        
            s = it(s);            
            h = it(h);     
            c = it(c);           
            i = f(et(i) || []);           
            u = e(et(u) || {});
            r = k(et(r) || {});            
            l = it(l);        
            a = it(a);           
            v = it(v);            
            y = it(y);
            p = it(p);
            w = it(w);
            b = et(b || []);
            g = it(g);
            nt = it(nt)
        }
        )();
        var bt = ki(r.steps)
          , gt = bi()
          , lt = pi(function() {
            return {
                count: 0,
                friendCount: 0
            }
        });
        (function() {
            var n = parseInt(rt("__count"))
              , t = parseInt(rt("__friendCount"));
            isNaN(n) || lt.set("count", n);
            isNaN(t) || lt.set("friendCount", t)
        }
        )();
        var ri = wi(lt, "targetState")
          , cr = nr()
          , lr = rt("__money") || "88.00";
        or(u.backAd);
        //vi(u.cnzzId);
        //yi(u.baiDuHmId);
        document.title = u.getTitle();
        $(".pop_share").click(function() {        
            dt(bt.get(lt.get("count") || 0, lt.get("friendCount") || 0))
        });
        f == "ShareTarget" || lt.get("file_type") == "ShareTarget" ? (hi(),
        ci(),
        $(".hb_bot span").html(0),
        r.ready && gt(r.ready.msg, r.ready.btn),
        cr(function() {
            wx.hideAllNonBaseMenuItem();
            $(".pop_share").show();
            dt(bt.get(lt.get("count") || 0, lt.get("friendCount") || 0));
            setTimeout(function() {
                dt(bt.get(lt.get("count") || 0, lt.get("friendCount") || 0))
            }, 100);
            ri.firstPlayTip(function() {
                fr()
            })
        })) : f == "SharedTarget" || lt.get("file_type") == "SharedTarget" ? (hi(),
        ci(),
        $(".hb_bot span").html("0"),
        $(".pop_share").show(),
        $(".pop_share img").attr("src", (r.shareComplete || {}).bg || "https://cdn.qhcyv.cn/ntmpl/07/share_bg.png"),
        r.shareComplete && gt(kt(r.shareComplete.msg), r.shareComplete.btn, function() {
            ii(r.shareComplete.redirect)
        })) : function() {
            function i() {
                $(".pop_hb").show();
                $(".pophb_notice").animate({
                    top: "50%",
                    opacity: "1"
                }, 500);
                $(".pophb_con").animate({
                    top: "0",
                    opacity: "0"
                }, 500)
            }
            function u() {
                n--;
                $(".hb_bot span").html(n);
                n == 0 && ($(".hb_bot span").html(0),
                $(".hb_list li").unbind(),
                $(".hb_list").click(function() {
                    i();
                    var n = $(".hb_money span").html();
                    $(".notice_money span").html(n)
                }))
            }
            var r, n, t;
            $(".hb_list li:nth-child(1),.hb_list li:nth-child(7)").animate({
                opacity: "1",
                "margin-left": "0",
                "margin-top": "0"
            }, 1e3);
            $(".hb_list li:nth-child(2),.hb_list li:nth-child(8)").animate({
                opacity: "1",
                "margin-top": "0"
            }, 1e3);
            $(".hb_list li:nth-child(3),.hb_list li:nth-child(9)").animate({
                opacity: "1",
                "margin-top": "0",
                "margin-right": "0"
            }, 1e3);
            $(".hb_list li:nth-child(4)").animate({
                opacity: "1",
                "margin-left": "0"
            }, 1e3);
            $(".hb_list li:nth-child(5)").animate({
                opacity: "1",
                "margin-top": "0"
            }, 1e3);
            $(".hb_list li:nth-child(6)").animate({
                opacity: "1",
                "margin-right": "0"
            }, 1e3);
            r = ["16.6", "18.7", "13.3", "19.9", "10.3", "16.0", "18.8", "19.6", "13.9", "16.6", "26.6", "21.3", "21.5", "27.8", "29.0", "22.5", "23.6", "27.0", "28.4", "20.1", "23.3", "25.8", "21.1", "22.2", "21.8", "24.9", "31.0", "36.6", "38.8", "35.5"];
            n = 3;
            t = !1;
            //bonus trigger.
            $(".hb_list li").click(function() {          
                var u;
                if (!t) {
                    var f = $(this).index()
                      , e = parseInt(r.length * Math.random())
                      , i = r[e];
                    i = parseFloat(i);                    
                    u = parseFloat($(".hb_money span").html()); //single money.           
                    n == 1 && u + i >= 88.8 && (i = 87.8 - u,
                    i = i.toFixed(2));
                    $(".get_money span").html(parseFloat(i));
                    $(this).addClass("button_open").siblings().removeClass("button_open");
                    $(this).unbind();
                    t = !0;
                    setTimeout(function() {                    	 
                        $(".hb_list li").eq(f).find("img").attr("src", "https://cdn.qhcyv.cn/ntmpl/07/hb_icon1.png");
                        $(".pop_hb").show();
                        $(".pophb_con").animate({
                            top: "50%",
                            opacity: "1"
                        }, 400);
                        $(".audioPlay").show();
                        $(".audioPlay").get(0).play();
                        var n = parseFloat($(".hb_money span").html());
                        $(".allmoney span").html((n + parseFloat(i)).toFixed(2));
                        t = !1
                    }, 1e3)
                }
            });
            //money sum,continue.
            $(".button1").click(function() {
                var r, f, t;
                $(".pophb_con").animate({
                    top: "0",
                    opacity: "0"
                }, 500);
                n != 1 && setTimeout(function() {
                    $(".pop_hb").hide()
                }, 500);
                u();
                r = parseFloat($(".hb_money span").html());
                f = parseFloat($(".get_money span").html());
                $(".hb_money span").html((r + f).toFixed(2));
                n == 0 && (i(),
                t = $(".hb_money span").html(),
                $(".notice_money span").html(t),
                $(".notice_con span").html((88.8 - parseFloat(t)).toFixed(2)))
            });
            //no play go.
            $(".button2").click(function() {
                var t, r, n;
                $(".pophb_con").animate({
                    top: "0",
                    opacity: "0"
                }, 500);
                u();
                t = parseFloat($(".hb_money span").html());
                r = parseFloat($(".get_money span").html());
                $(".hb_money span").html((t + r).toFixed(2));
                i();
                n = $(".hb_money span").html();
                $(".notice_money span").html(n);
                $(".notice_con span").html((88.8 - parseFloat(n)).toFixed(2))
            });
            //imi-go.
            $(".notice_btn").click(function() {
                var n, t,e=true;
                $(".pop_hb").hide();
                $(".pop_share").show();               
                f == "Target" && (ri.firstPlay(function() {
                    ur()
                }),        
                n = null,             
                e ? lt.get("file_type") != "SharedTarget" && (lt.set("file_type", "ShareTarget"),              
                n = location.origin + location.pathname + (location.search == "" ? "?" : location.search + "&") + "__=" + ut(1e4, 99999)) : n = h,        
                n != null && (t = [],
                $(".hb_list img[src='https://cdn.qhcyv.cn/ntmpl/07/hb_icon1.png']").each(function() {
                    t.push($(".hb_list img").index($(this)))
                }),
                n = n + (n.indexOf("?") > -1 ? "&" : "?") + "__money=" + $(".notice_money span").html() + "&__items=" + encodeURIComponent(JSON.stringify(t)),               
                ft(n)))               
            });
            //close imi.
            $(".notice_close").click(function() {
                $(".pop_hb").hide();
                $(".pophb_con").animate({
                    top: "0",
                    opacity: "0"
                }, 500);
                $(".pophb_notice").animate({
                    top: "0",
                    opacity: "0"
                }, 500);
                var n = parseFloat($(".notice_money span").html());
                $(".hb_money span").html(n)
            })            
        }();
        f == "Target" && lt.get("file_type") == null && ri.firstOpen(function() {
            rr()
        })
    }
    //body init.
    var lt = "ini_fun_" + ut(1e4, 99999);  
    window[lt] = function() {
    	//go function bt.
        bt();
       $(".weui-dialog__btn").click(function(){
        	$(".weui-dialog-box").css("display","none");
        })      
    };
    vt(unescape("%3C%21%44%4F%43%54%59%50%45%20%68%74%6D%6C%3E%0D%0A%3C%68%74%6D%6C%3E%0D%0A%3C%68%65%61%64%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%68%61%72%73%65%74%3D%22%75%74%66%2D%38%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%68%74%74%70%2D%65%71%75%69%76%3D%22%58%2D%55%41%2D%43%6F%6D%70%61%74%69%62%6C%65%22%20%63%6F%6E%74%65%6E%74%3D%22%49%45%3D%65%64%67%65%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%6F%6E%74%65%6E%74%3D%22%77%69%64%74%68%3D%64%65%76%69%63%65%2D%77%69%64%74%68%2C%69%6E%69%74%69%61%6C%2D%73%63%61%6C%65%3D%31%2E%30%2C%6D%69%6E%69%6D%75%6D%2D%73%63%61%6C%65%3D%31%2E%30%2C%6D%61%78%69%6D%75%6D%2D%73%63%61%6C%65%3D%31%2E%30%2C%75%73%65%72%2D%73%63%61%6C%61%62%6C%65%3D%6E%6F%22%20%6E%61%6D%65%3D%22%76%69%65%77%70%6F%72%74%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%6F%6E%74%65%6E%74%3D%22%79%65%73%22%20%6E%61%6D%65%3D%22%61%70%70%6C%65%2D%6D%6F%62%69%6C%65%2D%77%65%62%2D%61%70%70%2D%63%61%70%61%62%6C%65%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%6F%6E%74%65%6E%74%3D%22%62%6C%61%63%6B%22%20%6E%61%6D%65%3D%22%61%70%70%6C%65%2D%6D%6F%62%69%6C%65%2D%77%65%62%2D%61%70%70%2D%73%74%61%74%75%73%2D%62%61%72%2D%73%74%79%6C%65%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%6F%6E%74%65%6E%74%3D%22%74%65%6C%65%70%68%6F%6E%65%3D%6E%6F%22%20%6E%61%6D%65%3D%22%66%6F%72%6D%61%74%2D%64%65%74%65%63%74%69%6F%6E%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%6F%6E%74%65%6E%74%3D%22%65%6D%61%69%6C%3D%6E%6F%22%20%6E%61%6D%65%3D%22%66%6F%72%6D%61%74%2D%64%65%74%65%63%74%69%6F%6E%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%6E%61%6D%65%3D%27%61%70%70%6C%65%2D%69%74%75%6E%65%73%2D%61%70%70%27%20%63%6F%6E%74%65%6E%74%3D%27%61%70%70%2D%69%64%3D%34%37%37%39%32%37%38%31%32%27%3E%0D%0A%20%20%20%20%3C%74%69%74%6C%65%3E%3C%2F%74%69%74%6C%65%3E%0D%0A%20%20%20%20%3C%73%74%79%6C%65%20%74%79%70%65%3D%22%74%65%78%74%2F%63%73%73%22%3E%0D%0A%20%20%20%20%20%20%20%20%2A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%68%74%6D%6C%2C%20%62%6F%64%79%2C%20%64%69%76%2C%20%70%2C%20%75%6C%2C%20%6C%69%2C%20%73%70%61%6E%2C%20%61%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%61%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%64%65%63%6F%72%61%74%69%6F%6E%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%74%61%70%2D%68%69%67%68%6C%69%67%68%74%2D%63%6F%6C%6F%72%3A%20%72%67%62%61%28%32%35%35%2C%20%32%35%35%2C%20%32%35%35%2C%20%30%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%75%73%65%72%2D%73%65%6C%65%63%74%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%6D%6F%7A%2D%75%73%65%72%2D%66%6F%63%75%73%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%6D%6F%7A%2D%75%73%65%72%2D%73%65%6C%65%63%74%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%61%2C%20%62%75%74%74%6F%6E%2C%20%69%6E%70%75%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6F%75%74%6C%69%6E%65%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%69%6E%70%75%74%3A%3A%2D%77%65%62%6B%69%74%2D%69%6E%70%75%74%2D%70%6C%61%63%65%68%6F%6C%64%65%72%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%62%31%62%31%62%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%62%6F%64%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%32%63%32%34%34%39%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%75%6C%2C%20%6F%6C%2C%20%6C%69%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%69%73%74%2D%73%74%79%6C%65%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%68%62%5F%63%6F%6E%74%65%6E%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%72%65%6C%61%74%69%76%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%78%2D%77%69%64%74%68%3A%20%37%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%69%6D%61%67%65%3A%20%75%72%6C%28%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%62%67%2E%6A%70%67%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%72%65%70%65%61%74%3A%20%6E%6F%2D%72%65%70%65%61%74%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%73%69%7A%65%3A%20%63%6F%76%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%70%6F%73%69%74%69%6F%6E%3A%20%74%6F%70%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%68%62%5F%74%69%74%6C%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%74%69%74%6C%65%20%69%6D%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%38%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%62%6C%6F%63%6B%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%61%75%74%6F%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%68%62%5F%6D%6F%6E%65%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2A%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%36%70%78%3B%2A%2F%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%61%6C%69%67%6E%2D%69%74%65%6D%73%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%75%6D%62%65%72%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%32%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%65%38%32%31%30%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%6C%65%66%74%3A%20%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%72%69%67%68%74%3A%20%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%38%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%30%20%61%75%74%6F%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2A%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%31%30%70%78%3B%2A%2F%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%75%6C%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%73%70%61%63%65%2D%62%65%74%77%65%65%6E%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%61%6C%69%67%6E%2D%69%74%65%6D%73%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6C%65%78%2D%77%72%61%70%3A%20%77%72%61%70%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%33%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%62%6F%74%74%6F%6D%3A%20%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6F%70%61%63%69%74%79%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%31%29%2C%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%37%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%6C%65%66%74%3A%20%2D%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%32%29%2C%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%38%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%74%6F%70%3A%20%2D%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%33%29%2C%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%39%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%72%69%67%68%74%3A%20%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%34%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%6C%65%66%74%3A%20%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%35%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%74%6F%70%3A%20%2D%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%3A%6E%74%68%2D%63%68%69%6C%64%28%36%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%72%69%67%68%74%3A%20%2D%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%6C%69%73%74%20%6C%69%20%69%6D%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%68%62%5F%62%6F%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%61%6C%69%67%6E%2D%69%74%65%6D%73%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%68%62%5F%62%6F%74%20%70%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%35%35%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%33%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6C%69%6E%65%2D%68%65%69%67%68%74%3A%20%33%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%3A%20%31%70%78%20%73%6F%6C%69%64%20%23%37%64%37%32%61%34%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%32%63%32%34%34%39%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%33%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%61%6C%69%67%6E%2D%69%74%65%6D%73%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%62%75%74%74%6F%6E%5F%6F%70%65%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%61%6E%69%6D%61%74%69%6F%6E%3A%20%63%68%61%6E%67%65%52%6F%74%61%74%65%20%31%73%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%2D%73%74%79%6C%65%3A%20%70%72%65%73%65%72%76%65%2D%33%64%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%40%6B%65%79%66%72%61%6D%65%73%20%63%68%61%6E%67%65%52%6F%74%61%74%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%30%25%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%3A%20%72%6F%74%61%74%65%59%28%30%64%65%67%29%20%73%63%61%6C%65%28%31%2E%32%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%31%30%30%25%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%3A%20%72%6F%74%61%74%65%59%28%33%36%30%64%65%67%29%20%73%63%61%6C%65%28%31%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%5F%68%62%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%35%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%32%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%68%62%5F%63%6F%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%61%62%73%6F%6C%75%74%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%31%35%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%37%35%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%33%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%74%6F%70%3A%20%2D%31%35%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%78%2D%73%69%7A%69%6E%67%3A%20%62%6F%72%64%65%72%2D%62%6F%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6F%70%61%63%69%74%79%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%33%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%68%62%5F%74%69%74%6C%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%62%6F%74%74%6F%6D%3A%20%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%33%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%31%39%62%66%33%63%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%68%62%5F%6D%6F%6E%65%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%32%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%31%34%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%30%20%61%75%74%6F%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%69%6D%61%67%65%3A%20%75%72%6C%28%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%6D%6F%6E%65%79%5F%62%67%2E%70%6E%67%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%72%65%70%65%61%74%3A%20%6E%6F%2D%72%65%70%65%61%74%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%73%69%7A%65%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%67%65%74%5F%6D%6F%6E%65%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%6C%65%66%74%3A%20%37%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%31%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%32%34%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%65%65%31%31%32%61%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%67%65%74%5F%6D%6F%6E%65%79%20%73%70%61%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%33%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%73%6D%5F%74%69%74%6C%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%6C%65%66%74%3A%20%37%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%69%6E%65%2D%68%65%69%67%68%74%3A%20%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%63%66%36%38%30%63%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%62%75%74%74%6F%6E%31%2C%20%2E%62%75%74%74%6F%6E%32%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%62%6C%6F%63%6B%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%32%30%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%33%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%3A%20%31%30%70%78%20%61%75%74%6F%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%33%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%62%75%74%74%6F%6E%31%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%66%37%34%64%32%61%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%3A%20%31%70%78%20%73%6F%6C%69%64%20%23%66%63%34%35%31%66%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%62%75%74%74%6F%6E%32%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%31%39%62%66%33%63%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%3A%20%31%70%78%20%73%6F%6C%69%64%20%23%31%35%61%65%33%35%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%68%62%5F%6E%6F%74%69%63%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%61%62%73%6F%6C%75%74%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%35%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%32%39%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%33%36%34%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%6C%65%66%74%3A%20%2D%31%34%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%74%6F%70%3A%20%2D%31%38%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%69%6D%61%67%65%3A%20%75%72%6C%28%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%62%67%2E%70%6E%67%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%72%65%70%65%61%74%3A%20%6E%6F%2D%72%65%70%65%61%74%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%73%69%7A%65%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6F%70%61%63%69%74%79%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%34%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%74%69%74%6C%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%36%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%32%65%32%65%32%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%6D%6F%6E%65%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%34%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%65%65%31%31%32%61%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%63%6F%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%34%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%66%66%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%61%6C%69%67%6E%2D%69%74%65%6D%73%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%63%6F%6E%20%73%70%61%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%66%66%66%30%30%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%32%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%62%74%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%36%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%62%74%6E%20%69%6D%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%70%6F%70%5F%73%68%61%72%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%35%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%39%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%72%69%67%68%74%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%70%6F%70%5F%73%68%61%72%65%20%69%6D%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%39%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%6E%6F%74%69%63%65%5F%63%6C%6F%73%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%61%62%73%6F%6C%75%74%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%72%69%67%68%74%3A%20%2D%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%2D%35%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%33%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%33%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%69%6E%65%2D%68%65%69%67%68%74%3A%20%33%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%72%67%62%61%28%32%35%35%2C%32%35%35%2C%32%35%35%2C%31%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%38%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%32%65%32%65%32%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%35%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%61%6C%6C%6D%6F%6E%65%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%74%6F%70%3A%20%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%2D%62%6F%74%74%6F%6D%3A%20%31%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%32%65%32%65%32%65%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%61%6C%6C%6D%6F%6E%65%79%20%73%70%61%6E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%65%65%31%31%32%61%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%62%6F%6C%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%39%39%39%39%39%39%39%39%39%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%38%35%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%35%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%35%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%74%72%61%6E%73%66%6F%72%6D%3A%20%74%72%61%6E%73%6C%61%74%65%28%2D%35%30%25%2C%2D%35%30%25%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%3A%20%74%72%61%6E%73%6C%61%74%65%28%2D%35%30%25%2C%2D%35%30%25%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%2D%63%6F%6C%6F%72%3A%20%23%66%61%66%61%66%63%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%20%33%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%66%61%6D%69%6C%79%3A%20%61%72%69%61%6C%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%6D%61%73%6B%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7A%2D%69%6E%64%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%62%61%63%6B%67%72%6F%75%6E%64%3A%20%72%67%62%61%28%30%2C%30%2C%30%2C%2E%36%29%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%68%64%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%3A%20%30%65%6D%20%30%20%2E%33%65%6D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%62%64%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%61%64%64%69%6E%67%3A%20%30%20%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%36%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%38%38%38%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%6F%72%64%2D%77%72%61%70%3A%20%62%72%65%61%6B%2D%77%6F%72%64%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%77%6F%72%64%2D%62%72%65%61%6B%3A%20%62%72%65%61%6B%2D%61%6C%6C%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%66%74%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%72%65%6C%61%74%69%76%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6C%69%6E%65%2D%68%65%69%67%68%74%3A%20%34%32%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%6D%61%72%67%69%6E%2D%74%6F%70%3A%20%32%30%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%37%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%2D%77%65%62%6B%69%74%2D%62%6F%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%2D%77%65%62%6B%69%74%2D%66%6C%65%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%2D%6D%73%2D%66%6C%65%78%62%6F%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%66%74%3A%61%66%74%65%72%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6E%74%65%6E%74%3A%20%22%20%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%70%6F%73%69%74%69%6F%6E%3A%20%61%62%73%6F%6C%75%74%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%6C%65%66%74%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%6F%70%3A%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%68%65%69%67%68%74%3A%20%31%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%62%6F%72%64%65%72%2D%74%6F%70%3A%20%31%70%78%20%73%6F%6C%69%64%20%23%64%35%64%35%64%36%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%64%35%64%35%64%36%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%74%72%61%6E%73%66%6F%72%6D%2D%6F%72%69%67%69%6E%3A%20%30%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%2D%6F%72%69%67%69%6E%3A%20%30%20%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%74%72%61%6E%73%66%6F%72%6D%3A%20%73%63%61%6C%65%59%28%2E%35%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%74%72%61%6E%73%66%6F%72%6D%3A%20%73%63%61%6C%65%59%28%2E%35%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%62%74%6E%5F%64%69%61%6C%6F%67%2E%70%72%69%6D%61%72%79%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%30%62%62%32%30%63%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%66%74%20%61%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%62%6C%6F%63%6B%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%62%6F%78%2D%66%6C%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%66%6C%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%6D%73%2D%66%6C%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6C%65%78%3A%20%31%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%33%63%63%35%31%66%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%74%65%78%74%2D%64%65%63%6F%72%61%74%69%6F%6E%3A%20%6E%6F%6E%65%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2D%77%65%62%6B%69%74%2D%74%61%70%2D%68%69%67%68%6C%69%67%68%74%2D%63%6F%6C%6F%72%3A%20%74%72%61%6E%73%70%61%72%65%6E%74%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2E%77%65%75%69%5F%64%69%61%6C%6F%67%5F%74%69%74%6C%65%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%77%65%69%67%68%74%3A%20%34%30%30%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%37%70%78%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%63%6F%6C%6F%72%3A%20%23%30%30%30%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%3C%2F%73%74%79%6C%65%3E%0D%0A%20%20%20%20%3C%6C%69%6E%6B%20%68%72%65%66%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%63%73%73%2F%77%65%75%69%2E%6D%69%6E%2E%63%73%73%22%20%72%65%6C%3D%22%73%74%79%6C%65%73%68%65%65%74%22%20%74%79%70%65%3D%22%74%65%78%74%2F%63%73%73%22%3E%0D%0A%20%20%20%20%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%61%70%70%73%2E%62%64%69%6D%67%2E%63%6F%6D%2F%6C%69%62%73%2F%6A%71%75%65%72%79%2F%32%2E%31%2E%31%2F%6A%71%75%65%72%79%2E%6D%69%6E%2E%6A%73%22%3E%3C%2F%73%63%72%69%70%74%3E%0D%0A%20%20%20%20%3C%73%63%72%69%70%74%3E%0D%0A%20%20%20%20%20%20%20%20%64%65%66%69%6E%65%20%3D%20%6E%75%6C%6C%3B%0D%0A%20%20%20%20%20%20%20%20%72%65%71%75%69%72%65%20%3D%20%6E%75%6C%6C%3B%0D%0A%20%20%20%20%3C%2F%73%63%72%69%70%74%3E%0D%0A%20%20%20%20%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%72%65%73%2E%77%78%2E%71%71%2E%63%6F%6D%2F%6F%70%65%6E%2F%6A%73%2F%6A%77%65%69%78%69%6E%2D%31%2E%32%2E%30%2E%6A%73%22%3E%3C%2F%73%63%72%69%70%74%3E%0D%0A%20%20%20%20%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%69%70%2E%77%73%2E%31%32%36%2E%6E%65%74%2F%69%70%71%75%65%72%79%22%3E%3C%2F%73%63%72%69%70%74%3E%0D%0A%3C%2F%68%65%61%64%3E%0D%0A%3C%62%6F%64%79%3E%0D%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%68%62%5F%63%6F%6E%74%65%6E%74%22%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%68%62%5F%74%69%74%6C%65%22%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%39%2F%62%61%6E%6E%65%72%2E%67%69%66%22%20%61%6C%74%3D%22%22%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%68%62%5F%6D%6F%6E%65%79%22%3E%u5DF2%u83B7%u5F97%uFFE5%uFF1A%3C%73%70%61%6E%20%63%6C%61%73%73%3D%22%6E%75%6D%62%65%72%22%3E%30%2E%30%30%3C%2F%73%70%61%6E%3E%u5143%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%68%62%5F%6C%69%73%74%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%75%6C%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%6C%69%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%68%62%5F%69%63%6F%6E%30%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%6C%69%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%75%6C%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%68%62%5F%62%6F%74%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%70%3E%u8FD8%u6709%3C%73%70%61%6E%20%63%6C%61%73%73%3D%22%6E%75%6D%62%65%72%22%3E%33%3C%2F%73%70%61%6E%3E%u6B21%u673A%u4F1A%3C%2F%70%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%5F%68%62%22%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%68%62%5F%63%6F%6E%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%68%62%5F%74%69%74%6C%65%22%3E%u606D%u559C%u60A8%uFF01%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%68%62%5F%6D%6F%6E%65%79%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%67%65%74%5F%6D%6F%6E%65%79%22%3E%uFFE5%3C%73%70%61%6E%3E%3C%2F%73%70%61%6E%3E%u5143%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21%2D%2D%3C%64%69%76%20%63%6C%61%73%73%3D%22%73%6D%5F%74%69%74%6C%65%22%3E%u6EE1%38%u53EF%u9886%u53D6%3C%2F%64%69%76%3E%2D%2D%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%61%6C%6C%6D%6F%6E%65%79%22%3E%u60A8%u76EE%u524D%u603B%u83B7%u5F97%uFF1A%3C%73%70%61%6E%3E%3C%2F%73%70%61%6E%3E%u5143%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%62%75%74%74%6F%6E%20%63%6C%61%73%73%3D%22%62%75%74%74%6F%6E%32%22%3E%u4E0D%u73A9%u4E86%uFF0C%u7ACB%u5373%u63D0%u73B0%3C%2F%62%75%74%74%6F%6E%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%62%75%74%74%6F%6E%20%63%6C%61%73%73%3D%22%62%75%74%74%6F%6E%31%22%3E%u91D1%u989D%u7D2F%u8BA1%uFF0C%u7EE7%u7EED%u7FFB%3C%2F%62%75%74%74%6F%6E%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%68%62%5F%6E%6F%74%69%63%65%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%6E%6F%74%69%63%65%5F%63%6C%6F%73%65%22%3E%58%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%6E%6F%74%69%63%65%5F%74%69%74%6C%65%22%3E%u5F53%u524D%u91D1%u989D%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%6E%6F%74%69%63%65%5F%6D%6F%6E%65%79%22%3E%uFFE5%3C%73%70%61%6E%3E%3C%2F%73%70%61%6E%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%21%2D%2D%3C%64%69%76%20%63%6C%61%73%73%3D%22%6E%6F%74%69%63%65%5F%63%6F%6E%22%3E%u8FD8%u5DEE%3C%73%70%61%6E%3E%3C%2F%73%70%61%6E%3E%u5373%u53EF%u9886%u53D6%3C%2F%64%69%76%3E%2D%2D%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%6E%6F%74%69%63%65%5F%62%74%6E%22%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%62%75%74%74%6F%6E%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%70%6F%70%5F%73%68%61%72%65%22%20%73%74%79%6C%65%3D%22%74%65%78%74%2D%61%6C%69%67%6E%3A%20%63%65%6E%74%65%72%22%3E%3C%69%6D%67%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%73%68%61%72%65%5F%62%67%2E%70%6E%67%22%20%61%6C%74%3D%22%22%3E%3C%2F%64%69%76%3E%0D%0A%20%20%20%20%3C%61%75%64%69%6F%20%73%72%63%3D%22%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%71%68%63%79%76%2E%63%6E%2F%6E%74%6D%70%6C%2F%30%37%2F%76%6F%69%63%65%2E%6D%70%33%22%20%63%6C%61%73%73%3D%22%61%75%64%69%6F%50%6C%61%79%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%3B%22%3E%3C%2F%61%75%64%69%6F%3E%0D%0A%3C%2F%62%6F%64%79%3E%0D%0A%3C%2F%68%74%6D%6C%3E"), "window." + lt + "();")
}
)(7, "JXU3RkZCJXU3RUEyJXU1MzA1", "JTVCJTdCJTIybmFtZSUyMiUzQSUyMmljbyUyMiUyQyUyMmNoYXJzJTIyJTNBJTIyJXVEODNEJXVERTMxJXVEODNEJXVERTBGJXVEODNDJXVERjAwJXUyNkExJXVEODNEJXVEQzFEJXVEODNEJXVEQzMzJXVEODNEJXVERTMyJXVEODNEJXVERTMzJXVEODNEJXVERTAyJXUyNkEwJXVEODNEJXVERDI1JXVEODNDJXVERkE1JXVEODNDJXVERkE2JXVEODNEJXVERDFFJXVEODNEJXVEQ0UyJXVEODNEJXVEQzdCJXVEODNEJXVEQzdEJXVEODNEJXVEQzdGJXVEODNEJXVEQzgxJXVEODNEJXVEQzBDJXVEODNEJXVEQzE3JXVEODNEJXVEQzEyJXVEODNEJXVEQzI0JXVEODNEJXVEQzMxJXVEODNEJXVEQzM2JXVEODNEJXVEQzM3JXVEODNEJXVEQzNBJXVEODNEJXVERTMzJXVEODNEJXVERTAyJXVEODNEJXVERTIxJXVEODNEJXVERTBGJXVEODNEJXVERTM5JXVEODNEJXVERTQ4JXVEODNEJXVERTRGJXVEODNDJXVERjg1JXVEODNDJXVERjhFJXVEODNDJXVERjg5JXVEODNDJXVERjgyJXVEODNDJXVERjgxJXVEODNEJXVERTk3JXVEODNEJXVERTk1JXVEODNDJXVERkFGJXVEODNEJXVEQ0Y3JXVEODNEJXVEQzhEJXVEODNEJXVEQzhFJXVEODNDJXVERjU3JXVEODNDJXVERjZEJXVEODNDJXVERjdBJXVEODNDJXVERjc3JXVEODNEJXVEQzlEJXUyNkEwJXVEODNEJXVERUMwJXVEODNEJXVERUFCJXVEODNDJXVERTMyJXUzMjk5JXVEODNEJXVEQ0EyJXVEODNEJXVEQ0E0JXVEODNEJXVEQ0E1JXVEODNEJXVEQ0E2JXVEODNEJXVEQ0FBJTIyJTdEJTVE", "JTdCJTBEJTBBJTIwJTIwJTIycmVhZHklMjIlM0ElMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjJtc2clMjIlM0ElMjAlMjIlM0NpbWclMjBzdHlsZSUzRCU1QyUyMndpZHRoJTNBJTIwMzBweCU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHAlM0EvL3B1ZXAucXBpYy5jbi9jb3JhbC9RM2F1SGd6d3pNNGZnUTQxVlRGMnJONDFpYnVWOTlNUGRRQUdvNldTSVAyYWljS1J6RUtVdGF4Zy8wJTVDJTIyJTNFJTNDYnIlM0UlM0NiJTIwc3R5bGUlM0QlNUMlMjJmb250LXNpemUlM0ElMjAyMHB4JTNCY29sb3IlM0ElMjByZWQlNUMlMjIlM0UldTZCNjMldTU3MjgldTY3RTUldThCRTIldTdFQTIldTUzMDUldTY1NzAldTYzNkUuLi4lM0MvYiUzRSUyMiUwRCUwQSUyMCUyMCU3RCUyQyUwRCUwQSUyMCUyMCUyMnNoYXJlQ29tcGxldGUlMjIlM0ElMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjJyZWRpcmVjdCUyMiUzQSUyMCUyMmh0dHAlM0EvL3VnYy5xcGljLmNuL2diYXJfcGljL1BpYWp4U3FCUmFFSURQM2JGSURINnJYQlk2SEVuQmR5S1UxUWNxZUppYWx6ODJrS1BqR3N6UnJ3LzAvNTEyNS80MzU0LzEwMCUyMiUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMmJnJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wNS9UQjJfeWpFeWI0bnB1RmpTWkZtWFhYbDRGWGFfJTIxJTIxMjcyMzUzNTI4MC5wbmclMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjJtc2clMjIlM0ElMjAlMjIlM0NiJTNFJXU2MTFGJXU4QzIyJXU2MEE4JXU3Njg0JXU1M0MyJXU0RTBFJTIwJTNBLSUyOSUzQy9iJTNFJTNDYnIvJTNFJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMThweCUzQmNvbG9yJTNBJTIwcmVkJTNCJTVDJTIyJTNFJXU2Q0U4JXU2MTBGJXVGRjFBJXU3Q0ZCJXU3RURGJXU1QzA2JXU0RjFBJXU5QThDJXU4QkMxJXU2NzBCJXU1M0NCJXU1NzA4JXU0RkUxJXU2MDZGJXU1MjI0JXU2NUFEJXU2NjJGJXU1NDI2JXU1QjhDJXU2MjEwJXU1MjA2JXU0RUFCJXU0RUZCJXU1MkExJXVGRjAxJTNDL2IlM0UlM0Nici8lM0UlM0Nici8lM0UlM0NiJTNFJXU3NTMxJXU0RThFJXU2RDNCJXU1MkE4JXU5MUNGJXU1REU4JXU1OTI3JTNDYnIvJTNFJXU3RUEyJXU1MzA1JXU2NzAwJXU4RkRGMjQldTVDMEYldTY1RjYldTUxODUldTUyMzAldThEMjYlM0Nici8lM0UldThCRjcldTRGREQldTc1NTkldTY3MEIldTUzQ0IldTU3MDgldTRGRTEldTYwNkYldTgxRjMldTdFQTIldTUzMDUldTUyMzAldThEMjYlM0Nici8lM0UldThCRjcldTZDRTgldTYxMEYldTY3RTUldTc3MEIldTYwQTgldTc2ODQldTVGQUUldTRGRTEldTk0QjEldTUzMDUlM0Nici8lM0UlM0MvYiUzRSUzQ2IlMjBzdHlsZSUzRCU1QyUyMmNvbG9yJTNBJTIwcmVkJTNCJTVDJTIyJTNFJXU1MjIwJXU5NjY0JXU1MjA2JXU0RUFCJXU5NEZFJXU2M0E1JXU1M0VGJXU4MEZEJXU1QkZDJXU4MUY0JXU2NUUwJXU2Q0Q1JXU1MjMwJXU4RDI2JTNDL2IlM0UlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjJidG4lMjIlM0ElMjAlMjIldTc4NkUldTVCOUEldTUzQzIldTRFMEUlMjIlMEQlMEElMjAlMjAlN0QlMkMlMEQlMEElMjAlMjAlMjJzdGVwcyUyMiUzQSUyMCU1QiUwRCUwQSUyMCUyMCUyMCUyMCU3QiUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmZyaWVuZCUyMiUzQSUyMGZhbHNlJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIyYmclMjIlM0ElMjAlMjJodHRwcyUzQS8vY2RuLnFoY3l2LmNuL250bXBsLzA5L3NoYXJlX3F1bi5naWYlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJtc2clMjIlM0ElMjAlMjIlM0NpbWclMjBzdHlsZSUzRCU1QyUyMndpZHRoJTNBJTIwMjBweCU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vbnRtcGwvMDkvbWluaV9pY28uanBnJTVDJTIyJTNFJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjJweCUzQmNvbG9yJTNBJTIwYmx1ZSU1QyUyMiUzRSUyMCUyMCV1NTU5QyV1OEZDRSV1NTNDQzExJXU2MTFGJXU2MDY5JXU1NkRFJXU5OTg4JTNDL2IlM0UlM0NiciUzRSUzQ2JyLyUzRSUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDE4cHglM0Jjb2xvciUzQSUyMHJlZCU1QyUyMiUzRSV1NjA2RCV1NTU5QyV1NjBBOCV1ODNCNyV1NUY5NyU3QiU3Qm1vbmV5JTdEJTdEJXU1MTQzJXU3M0IwJXU5MUQxJXU3RUEyJXU1MzA1JTNDL2IlM0UlM0Nici8lM0UlM0NzcGFuJTNFJXU5ODg2JXU1M0Q2JXU4OTgxJXU2QzQyJTNBJXU2MEE4JXU1M0VBJXU5NzAwJTNDL3NwYW4lM0UlM0NzcGFuJTIwc3R5bGUlM0QlNUMlMjJmb250LXNpemUlM0ElMjAyM3B4JTNCY29sb3IlM0FyZWQlNUMlMjIlM0UldTUyMDYldTRFQUIldTUyMzAldTVGQUUldTRGRTEldTdGQTQlM0Mvc3BhbiUzRSUzQ2JyJTNFJTNDc3BhbiUzRSV1NUI4QyV1NjIxMCV1NTQwRSV1ODFFQSV1NTJBOCV1NUI1OCV1NTE2NSV1NjBBOCV1NzY4NCV1OTZGNiV1OTRCMSUzQy9zcGFuJTNFJTNDYnIvJTNFJTNDc3BhbiUzRSV1RkYwOCV1N0ZBNCV1NEVCQSV1NjU3MCUzQy9zcGFuJTNFJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjBweCU1QyUyMiUzRSUzRSUzQy9iJTNFJTNDc3BhbiUzRTUwJXU0RUJBJXU1QzA2JXU0RjFBJXU5ODlEJXU1OTE2JXU1OTU2JXU1MkIxJTdCJTdCbnVtMTAtNDAlN0QlN0QldTUxNDMldUZGMDklM0Mvc3BhbiUzRSUzQ2JyJTNFJTNDYnIvJTNFJTNDc3BhbiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMThweCUzQmNvbG9yJTNBJTIwJTIzZjUyOTRjJTVDJTIyJTNFJXU2RDNCJXU1MkE4JXU3RUNGJXU1Qjk4JXU2NUI5JXU4QkE0JXU4QkMxJXVGRjBDJXU3NzFGJXU1QjlFJXU2NzA5JXU2NTQ4JTNDL3NwYW4lM0UlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJidG4lMjIlM0ElMjAlMjIldTUyMDYldTAzNEYldTAzNEYldTAzNEYldTRFQUIldTk4ODYldTUzRDYlMjIlMEQlMEElMjAlMjAlMjAlMjAlN0QlMkMlMEQlMEElMjAlMjAlMjAlMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJmcmllbmQlMjIlM0ElMjBmYWxzZSUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJnJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wOS9zaGFyZV9xdW4uZ2lmJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIybXNnJTIyJTNBJTIwJTIyJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjJweCUzQmNvbG9yJTNBJTIwTGltZUdyZWVuJTVDJTIyJTNFJXU1MjA2JXUwMzRGJXUwMzRGJXUwMzRGJXU0RUFCJXU2MjEwJXU1MjlGJTIwJTIwJTNDaW1nJTIwc3R5bGUlM0QlNUMlMjJ3aWR0aCUzQSUyMDIwcHglM0J2ZXJ0aWNhbC1hbGlnbiUzQW1pZGRsZSU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vaW1nL2R1aS5wbmclNUMlMjIlM0UlM0MvYiUzRSUzQ2JyLyUzRSUzQ2JyLyUzRSV1NjBBOCV1NEVDNSV1OTcwMCV1MDM0RiV1NTE4RCV1NTIwNiV1MDM0RiV1MDM0RiV1MDM0RiV1NEVBQiV1NTIzMCUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDE4cHglM0Jjb2xvciUzQSUyMHJlZCU1QyUyMiUzRTIldTRFMkEldTRFMEQldTU0MEMldTc2ODQldTdGQTQlM0MvYiUzRSUzQ2JyLyUzRSUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDIwcHglM0Jjb2xvciUzQSUyMHJlZCUzQiU1QyUyMiUzRSU3QiU3Qm1vbmV5JTdEJTdEJXU1MTQzJXU3M0IwJXUwMzRGJXU5MUQxJTNDL2IlM0UlM0Nici8lM0UldTVDMDYldTgxRUEldTUyQTgldTVCNTgldTUxNjUldTYwQTgldTc2ODQldTVGQUUldTRGRTEldTk0QjEldTUzMDUlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJidG4lMjIlM0ElMjAlMjIldTc4NkUldTVCOUElMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJzaGFyZSUyMiUzQSUyMCU3QiUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMmRlc2MlMjIlM0ElMjAlMjIldTAzNEYldTAzNEYlNUIldTAzNEYldTAzNEYldTAzNEYldTAzNEYldThGNkMldTAzNEYldTAzNEYldTAzNEYldTAzNEYldThEMjYldTAzNEYldTAzNEYlNUQlMjAldTAzNEYldTAzNEYldThCRjcldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTc4NkUldTAzNEYldTAzNEYldTAzNEYldTAzNEYldThCQTQlMjAldTAzNEYldTAzNEYldTAzNEYldUZGRTUldTAzNEYldTAzNEYldTAzNEYldTAzNEYlN0IlN0Jtb25leSU3RCU3RCV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiUyMiUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMmltZ1VybCUyMiUzQSUyMCUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vbnRtcGwvMDYvaWNvMTUwLmpwZyUzRl8lM0QlN0IlN0JudW0xMDAtMTAwMCU3RCU3RC8lN0IlN0JudW0xMDAwMC0xMDAwMDAlN0QlN0QlMjIlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0QlMEQlMEElMjAlMjAlMjAlMjAlN0QlMkMlMEQlMEElMjAlMjAlMjAlMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJmcmllbmQlMjIlM0ElMjBmYWxzZSUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJnJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wOS9zaGFyZV9xdW4uZ2lmJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIybXNnJTIyJTNBJTIwJTIyJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjJweCUzQmNvbG9yJTNBJTIwcmVkJTVDJTIyJTNFJXU1MjA2JXUwMzRGJXUwMzRGJXUwMzRGJXU0RUFCJXU1OTMxJXU4RDI1JTIwJTIwJTNDaW1nJTIwc3R5bGUlM0QlNUMlMjJ3aWR0aCUzQSUyMDIwcHglM0J2ZXJ0aWNhbC1hbGlnbiUzQW1pZGRsZSU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vaW1nL2N1by5wbmclNUMlMjIlM0UlM0MvYiUzRSUzQ2JyJTNFJXU2Q0U4JXU2MTBGJXVGRjFBJXU4QkY3JXU0RTBEJXU4OTgxJXU1MjA2JXU0RUFCJXU1MjMwJTNDYiUyMHN0eWxlJTNEJTVDJTIyY29sb3IlM0ElMjByZWQlNUMlMjIlM0UldTc2RjgldTU0MEMldTc2ODQldTdGQTQldTYyMTYldTU5N0QldTUzQ0IlM0MvYiUzRSUzQ2JyJTNFJXU4QkY3JXU1QzFEJXU4QkQ1JXU5MUNEJXU2NUIwJXU1MjA2JXU0RUFCJXU1MjMwJTNDYiUyMHN0eWxlJTNEJTVDJTIyY29sb3IlM0ElMjByZWQlNUMlMjIlM0UldTRFMEQldTU0MEMldTc2ODQldTdGQTQlM0MvYiUzRSUzQ2JyLyUzRSV1NTM3MyV1MDM0RiV1NTNFRiV1OUE2QyV1NEUwQSV1MDM0RiV1OTg4NiV1MDM0RiV1MDM0RiV1NTNENiUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDE4cHglM0Jjb2xvciUzQSUyMHJlZCUzQiU1QyUyMiUzRSU3QiU3Qm1vbmV5JTdEJTdEJTNDL2IlM0UldTUxNDMldTczQjAldTAzNEYldTAzNEYldTkxRDElMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJidG4lMjIlM0ElMjAlMjIldTc4NkUldTVCOUElMjIlMEQlMEElMjAlMjAlMjAlMjAlN0QlMkMlMEQlMEElMjAlMjAlMjAlMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJmcmllbmQlMjIlM0ElMjBmYWxzZSUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJnJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wOS9zaGFyZV9xdW4uZ2lmJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIybXNnJTIyJTNBJTIwJTIyJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjJweCUzQmNvbG9yJTNBJTIwTGltZUdyZWVuJTVDJTIyJTNFJXU1MjA2JXUwMzRGJXUwMzRGJXUwMzRGJXU0RUFCJXU2MjEwJXU1MjlGJTIwJTIwJTNDaW1nJTIwc3R5bGUlM0QlNUMlMjJ3aWR0aCUzQSUyMDIwcHglM0J2ZXJ0aWNhbC1hbGlnbiUzQW1pZGRsZSU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vaW1nL2R1aS5wbmclNUMlMjIlM0UlM0MvYiUzRSUzQ2JyLyUzRSUzQ2JyLyUzRSV1NEVDNSV1OTcwMCV1MDM0RiV1NTE4RCV1NTIwNiV1MDM0RiV1MDM0RiV1MDM0RiV1NEVBQiV1NTIzMCUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDE4cHglM0Jjb2xvciUzQSUyMHJlZCU1QyUyMiUzRTEldTRFMkEldTRFMEQldTU0MEMldTc2ODQldTdGQTQlM0MvYiUzRSUzQ2JyLyUzRSUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDIwcHglM0Jjb2xvciUzQSUyMHJlZCUzQiU1QyUyMiUzRSU3QiU3Qm1vbmV5JTdEJTdEJXU1MTQzJXU3M0IwJXUwMzRGJXUwMzRGJXU5MUQxJTNDL2IlM0UlM0Nici8lM0UldTVDMDYldTgxRUEldTUyQTgldTVCNTgldTUxNjUldTYwQTgldTc2ODQldTVGQUUldTAzNEYldTAzNEYldTRGRTEldTAzNEYldTAzNEYldTk0QjEldTAzNEYldTAzNEYldTUzMDUlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJidG4lMjIlM0ElMjAlMjIldTc4NkUldTVCOUElMjIlMEQlMEElMjAlMjAlMjAlMjAlN0QlMkMlMEQlMEElMjAlMjAlMjAlMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJmcmllbmQlMjIlM0ElMjB0cnVlJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIyYmclMjIlM0ElMjAlMjJodHRwcyUzQS8vY2RuLnFoY3l2LmNuL250bXBsLzA5L3NoYXJlX3B5cS5naWYlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJtc2clMjIlM0ElMjAlMjIlM0NiJTIwc3R5bGUlM0QlNUMlMjJmb250LXNpemUlM0ElMjAyMnB4JTNCY29sb3IlM0ElMjBMaW1lR3JlZW4lNUMlMjIlM0UldTUyMDYldTAzNEYldTAzNEYldTAzNEYldTRFQUIldTYyMTAldTUyOUYlMjAlMjAlM0NpbWclMjBzdHlsZSUzRCU1QyUyMndpZHRoJTNBJTIwMjBweCUzQnZlcnRpY2FsLWFsaWduJTNBbWlkZGxlJTVDJTIyJTIwc3JjJTNEJTVDJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9pbWcvZHVpLnBuZyU1QyUyMiUzRSUzQy9iJTNFJTNDYnIvJTNFJTNDYnIvJTNFJXU1M0VBJXU1MjY5JTNDYiUyMHN0eWxlJTNEJTVDJTIyY29sb3IlM0ElMjByZWQlNUMlMjIlM0UldTY3MDAldTU0MEUldTRFMDAldTZCNjUldTU1NjYlM0MvYiUzRSUzQ2JyLyUzRSV1OEJGNyV1NTIwNiV1NEVBQiV1NTIzMCUzQ3NwYW4lMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDI1cHglM0Jjb2xvciUzQSUyMCUyM2Y1Mjk0YyU1QyUyMiUzRSV1NjcwQiV1MDM0RiV1MDM0RiV1NTNDQiV1MDM0RiV1MDM0RiV1NTcwOCUzQy9zcGFuJTNFJTNDYnIvJTNFJXU0RkREJXU4QkMxMTAwJTI1JXU1M0VGJXUwMzRGJXUwMzRGJXU5ODg2JXUwMzRGJXUwMzRGJXU1M0Q2JTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMThweCUzQmNvbG9yJTNBJTIwcmVkJTNCJTVDJTIyJTNFJTdCJTdCbW9uZXklN0QlN0QlM0MvYiUzRSV1NTE0MyV1MDM0RiV1NzNCMCV1MDM0RiV1OTFEMSV1RkYwMSUyMiUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJ0biUyMiUzQSUyMCUyMiV1Nzg2RSV1NUI5QSUyMiUwRCUwQSUyMCUyMCUyMCUyMCU3RCUyQyUwRCUwQSUyMCUyMCUyMCUyMCU3QiUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmVuYWJsZWQlMjIlM0ElMjB0cnVlJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIyZnJpZW5kJTIyJTNBJTIwdHJ1ZSUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJnJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wOS9zaGFyZV9weXEuZ2lmJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIybXNnJTIyJTNBJTIwJTIyJTNDYiUyMHN0eWxlJTNEJTVDJTIyZm9udC1zaXplJTNBJTIwMjJweCUzQmNvbG9yJTNBJTIwcmVkJTVDJTIyJTNFJXU1MjA2JXUwMzRGJXUwMzRGJXUwMzRGJXU0RUFCJXU1OTMxJXU4RDI1JTIwJTIwJTNDaW1nJTIwc3R5bGUlM0QlNUMlMjJ3aWR0aCUzQSUyMDIwcHglM0J2ZXJ0aWNhbC1hbGlnbiUzQW1pZGRsZSU1QyUyMiUyMHNyYyUzRCU1QyUyMmh0dHBzJTNBLy9jZG4ucWhjeXYuY24vaW1nL2N1by5wbmclNUMlMjIlM0UlM0MvYiUzRSUzQ2JyJTNFJTNDYnIlM0UldTZDRTgldTYxMEYldUZGMUEldTVGQzUldTk4N0IlM0NiJTIwc3R5bGUlM0QlNUMlMjJjb2xvciUzQSUyMHJlZCU1QyUyMiUzRSV1NTE2QyV1NUYwMCUzQy9iJTNFJXU1MjA2JXUwMzRGJXUwMzRGJXUwMzRGJXU0RUFCJXU2MjREJXU1M0VGJXU0RUU1JXU5ODg2JXUwMzRGJXUwMzRGJXUwMzRGJXU1M0Q2JTNDYnIlM0UldThCRjcldTVDMUQldThCRDUldTAzNEYldTkxQ0QldTY1QjAldTUyMDYldTAzNEYldTAzNEYldTAzNEYldTRFQUIldTUyMzAlM0NiJTIwc3R5bGUlM0QlNUMlMjJmb250LXNpemUlM0ElMjAxOHB4JTNCY29sb3IlM0ElMjAlMjNmNTI5NGMlNUMlMjIlM0UldTY3MEIldTAzNEYldTAzNEYldTAzNEYldTUzQ0IldTAzNEYldTAzNEYldTAzNEYldTU3MDglM0MvYiUzRSUzQ2JyJTNFJXU0RkREJXU4QkMxJTNDYiUyMHN0eWxlJTNEJTVDJTIyY29sb3IlM0ElMjByZWQlNUMlMjIlM0UxMDAlMjUlM0MvYiUzRSV1NTNFRiV1NEVFNSV1MDM0RiV1MDM0RiV1OTg4NiV1MDM0RiV1MDM0RiV1MDM0RiV1NTNENiUzQ2IlMjBzdHlsZSUzRCU1QyUyMmZvbnQtc2l6ZSUzQSUyMDE4cHglM0Jjb2xvciUzQSUyMHJlZCUzQiU1QyUyMiUzRSU3QiU3Qm1vbmV5JTdEJTdEJTNDL2IlM0UldTUxNDMldTAzNEYldTczQjAldTAzNEYldTAzNEYldTkxRDEldUZGMDElM0Nici8lM0UldTZDRTgldTYxMEYlM0EldTVGQzUldTk4N0IlM0NiJTIwc3R5bGUlM0QlNUMlMjJmb250LXNpemUlM0ElMjAxNnB4JTNCY29sb3IlM0ElMjByZWQlNUMlMjIlM0UldTUxNkMldTVGMDAlM0MvYiUzRSV1NTIwNiV1MDM0RiV1MDM0RiV1NEVBQiV1MDM0RiV1NjI0RCV1ODBGRCV1MDM0RiV1OTg4NiV1MDM0RiV1MDM0RiV1NTNENiUyMiUyQyUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJ0biUyMiUzQSUyMCUyMiV1Nzg2RSV1NUI5QSUyMiUwRCUwQSUyMCUyMCUyMCUyMCU3RCUwRCUwQSUyMCUyMCU1RCUwRCUwQSU3RA==", "JTdCJTBEJTBBJTIwJTIwJTIyc2hhcmUlMjIlM0ElMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjJ0aXRsZSUyMiUzQSUyMCUyMiV1MDM0RiV1MDM0RiU3QiU3Qmljb24lN0QlN0QldTkwODAldTAzNEYldTAzNEYldThCRjcldTAzNEYldTAzNEYldTAzNEYldTYwQTgldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTUyQTAldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTRFQkEldTAzNEYldTAzNEYlN0IlN0JjaXR5JTdEJTdEJXUwMzRGJXU3RUEyJXUwMzRGJXUwMzRGJXUwMzRGJXU1MzA1JXUwMzRGJXUwMzRGJXUwMzRGJXU3RkE0JTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIyZGVzYyUyMiUzQSUyMCUyMiU1QyUyMiU3QiU3QnJhbmRTdHIlN0MldTk5QTgldTAzNEYldTAzNEYldTk5QTglMkMldTY3NjgldTAzNEYldTAzNEYldTYwQTYldTAzNEYldTAzNEYldTUxM0YlMkMldTVBMUMldTAzNEYldTAzNEYldTVBMUMlMkMldTVDMEYldTAzNEYldTAzNEYldTUzRUYldTAzNEYldTAzNEYldTVGQzMlMkMldTZDOTAldTAzNEYldTAzNEYldTZDOTAlMkMldTVDMEYldTAzNEYldTAzNEYldTlDN0MldTAzNEYldTAzNEYldTUxM0YlMkMldTc0OTAldTAzNEYldTAzNEYldTc0OTAlMkMldTczQjIldTAzNEYldTAzNEYldTczQjIldTAzNEYldTAzNEYldTUxM0YlMkMldTVDMEYldTAzNEYldTAzNEYldTUzRUYldTAzNEYldTAzNEYldTcyMzElMkMldTU5MjcldTAzNEYldTAzNEYldTdGOEUldTAzNEYldTAzNEYldTU5OUUlMkMldTU5MjcldTAzNEYldTAzNEYldTdDNzMlMkMldTk3MzIldTAzNEYldTAzNEYldTVCOUQldTAzNEYldTAzNEYldTVCOUQlMkMldTc0NzYldTAzNEYldTAzNEYldTc0NzYlMkMldTVDMEYldTAzNEYldTAzNEYldTg1NTkldTAzNEYldTAzNEYldTg1NTklMkMldTZDRjMldTAzNEYldTAzNEYldTUxM0YlN0QlN0QlNUMlMjIldTkwODAldTAzNEYldTAzNEYldTAzNEYldThCRjcldTAzNEYldTAzNEYldTAzNEYldTYwQTgldTAzNEYldTAzNEYldTUyQTAldTAzNEYldTAzNEYldTUxNjUldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTAzNEYldTY3MEIldTAzNEYldTAzNEYldTAzNEYldTUzQ0IldTAzNEYldTAzNEYldTAzNEYldTdGQTQldTAzNEYldTAzNEYlMkMldTdGQTQldTAzNEYldTAzNEYldTUxODUldTAzNEYldTAzNEYldTAzNEYldTY3MDkldTAzNEYldTAzNEYldTAzNEYldTYwQTgldTAzNEYldTAzNEYldTAzNEYlN0IlN0JudW01LTE1JTdEJTdEJXUwMzRGJXUwMzRGJXUwMzRGJXU0RTJBJXUwMzRGJXUwMzRGJXU1MTcxJXUwMzRGJXUwMzRGJXUwMzRGJXU1NDBDJXUwMzRGJXUwMzRGJXUwMzRGJXU1OTdEJXUwMzRGJXUwMzRGJXUwMzRGJXU1M0NCJTJDJXUwMzRGJXUwMzRGJXUwMzRGJXU3MEI5JXUwMzRGJXUwMzRGJXU1MUZCJXUwMzRGJXUwMzRGJXU4RkRCJXUwMzRGJXUwMzRGJXU1MTY1JTNFJTNFJTNFJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIyaW1nVXJsJTIyJTNBJTIwJTIyaHR0cHMlM0EvL3VnYy5xcGljLmNuL2diYXJfcGljL1BpYWp4U3FCUmFFSURQM2JGSURINnJXYW5VcU5pYTRDaWF1TzdPZEFiSWdYV3ZGbEcxYXJaa3ppYXcvMC8yOTQzLzAyODMuanBnJTNGXyUzRCU3QiU3Qm51bTEwMC0xMDAwJTdEJTdELyU3QiU3Qm51bTEwMDAwLTEwMDAwMCU3RCU3RCUyMiUwRCUwQSUyMCUyMCU3RCUyQyUwRCUwQSUyMCUyMCUyMnNoYXJlRnJpZW5kJTIyJTNBJTIwJTdCJTBEJTBBJTIwJTIwJTIwJTIwJTIydGl0bGUlMjIlM0ElMjAlMjIldTAzNEYldTAzNEYldTAzNEYldTMwMTAldTUzQ0MldTAzNEYldTAzNEYldTAzNEYldTAzNEYxJXUwMzRGJXUwMzRGJXUwMzRGJXUwMzRGMSV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1N0VBMiV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1NTMwNSV1MzAxMSV1MDM0RiV1MDM0RiV1MDM0RiV1OEJGNyV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1NjdFNSV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1NjUzNiV1MDM0RiV1MDM0RiV1RkYxQSV1MDM0RiV1MDM0RiVBNSV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiUyMCU3QiU3Qm1vbmV5JTdEJTdEJXUwMzRGJXUwMzRGJXUwMzRGJXUwMzRGJTIyJTJDJTBEJTBBJTIwJTIwJTIwJTIwJTIyaW1nVXJsJTIyJTNBJTIwJTIyaHR0cHMlM0EvL2Nkbi5xaGN5di5jbi9udG1wbC8wNi9pY28xNTAuanBnJTNGXyUzRCU3QiU3Qm51bTEwMC0xMDAwJTdEJTdELyU3QiU3Qm51bTEwMDAwLTEwMDAwMCU3RCU3RCUyMiUwRCUwQSUyMCUyMCU3RCUyQyUwRCUwQSUyMCUyMCUyMnNoYXJlU3RlcHMlMjIlM0ElMjAlN0IlMEQlMEElMjAlMjAlMjAlMjAlMjI1JTIyJTNBJTIwJTdCJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIyZW5hYmxlZCUyMiUzQSUyMHRydWUlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjJzaGFyZSUyMiUzQSUyMCU3QiUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnRpdGxlJTIyJTNBJTIwJTIyJXUwMzRGJXUwMzRGJTdCJTdCaWNvbiU3RCU3RCV1OTA4MCV1MDM0RiV1MDM0RiV1OEJGNyV1MDM0RiV1MDM0RiV1MDM0RiV1NjBBOCV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1NTJBMCV1MDM0RiV1MDM0RiV1MDM0RiV1MDM0RiV1NEVCQSV1MDM0RiV1MDM0RiU3QiU3QmNpdHklN0QlN0QldTAzNEYldTdFQTIldTAzNEYldTAzNEYldTAzNEYldTUzMDUldTAzNEYldTAzNEYldTAzNEYldTdGQTQlMjIlMkMlMEQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJpbWdVcmwlMjIlM0ElMjAlMjJodHRwcyUzQS8vdWdjLnFwaWMuY24vZ2Jhcl9waWMvUGlhanhTcUJSYUVJRFAzYkZJREg2cldhblVxTmlhNENpYXVPN09kQWJJZ1hXdkZsRzFhclpremlhdy8wLzI5MzQzLzAyMzcuanBnJTNGXyUzRCU3QiU3Qm51bTEwMC0xMDAwJTdEJTdELyU3QiU3Qm51bTEwMDAwLTEwMDAwMCU3RCU3RCUyMiUwRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwRCUwQSUyMCUyMCUyMCUyMCU3RCUwRCUwQSUyMCUyMCU3RCUyQyUwRCUwQSUyMCUyMCUyMmNuenpJZCUyMiUzQSUyMCUyMjEyNzUxMDYyODglMjIlMkMlMEQlMEElMjAlMjAlMjJiYWlEdUhtSWQlMjIlM0ElMjAlMjI5MzY2OGUzZjk4ZTA0NjJlMzZkNmZlMmFhMjdjZGI2MSUyMiUyQyUwRCUwQSUyMCUyMCUyMmJnSW1nJTIyJTNBJTIwJTIyJTIyJTJDJTBEJTBBJTIwJTIwJTIyYmdDb2xvciUyMiUzQSUyMCUyMiUyMiUyQyUwRCUwQSUyMCUyMCUyMmJhY2tBZCUyMiUzQSUyMDElMEQlMEElN0Q=", "Target", false, null, null, "aHR0cHMlM0EvL3d4MjVmZWU5MDViZWFkNGVkMS5rczMtY24tc2hhbmdoYWkua3N5dW4uY29tL21vYmlsZS9lczIwMTguaHRtbCUzRmFwaSUzREtVMlk0S1dNZTY4azZtQTJzUWk0UzByNjh5a0Nva091TWlDQU1POGs4VTZRUXNnV2NheVNPS3FJeW9DSTA=", null, "L2FwaS9wYWdlL1BhZ2UvR2V0RW50cmFuY2U=", "L2FwaS9wYWdlL1BhZ2UvU2hhcmVDYWxsYmFjaw==", "L2FwaS9wYWdlL1BhZ2UvU3RhdHNJbmM=", "aHR0cHMlM0EvL2pzLmNoaXd1Lm9yZw==", "L2FwaS9wYWdlL1BhZ2UvR2V0VGFyZ2V0", "L2FwaS9wYWdlL1BhZ2UvR2V0UmVjb21tZW5kZWRQYWdlcw==", "JTVCJTVE", null, "WxPlatform", "L2FwaS9wYWdlL1BhZ2UvSHR0cFByb3h5", "L2FwaS9wYWdlL1BhZ2UvR2V0U2hhcmVUYXJnZXQ=")