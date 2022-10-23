// 按钮和内容
function tabMenu(a, b, c) {
    for (let i = 0; i < a.length; i++) {
        b[0].classList.add('on')
        a[0].classList.add('on')
        a[i].onmouseover = function () {
            b[c].classList.remove('on');
            a[c].classList.remove('on');
            c = i;
            b[i].classList.add('on')
            a[i].classList.add('on')
        }
    }
}

// 三个 按钮和2个内容
function tabMenu_3(a, b, c, d) {
    for (let i = 0; i < a.length; i++) {
        b[0].classList.add('on')
        a[0].classList.add('on')
        d[0].classList.add('on')
        a[i].onmouseover = function () {
            b[c].classList.remove('on');
            a[c].classList.remove('on');
            d[c].classList.remove('on');
            c = i;
            b[i].classList.add('on')
            a[i].classList.add('on')
            d[i].classList.add('on')
        }
    }
}
//a 变量 按钮
//b 变量 显示盒子
//c 计数index

// let newsBtn = document.querySelectorAll('.xinwen .left .title span'),
//     newsCon = document.querySelectorAll('.xinwen .left .con'),
//     newsNum = 0;
// tabMenu(newsBtn,newsCon,newsNum);