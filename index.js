function btn() {
    document.getElementById('sp').innerText++;
    document.getElementById("mym").play();
    document.getElementById("img1").src = './电子木鱼1.png';
    setTimeout(cb, 100);
    if (document.getElementById('sp').innerHTML % 100 == 0) {
        document.getElementById("lau").play();
        document.getElementById("img1").src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F00%2F16%2F06%2F085757c3df566ae.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669652351&t=0fe15e5c1ee27b52269a1029dddc7ea6';
        alert("功德数满100圣诞老人陪你一起笑！");
        cb;
    }
}
function cb() {
    document.getElementById("img1").src = './电子木鱼.png';
}
function ys(x) {
    switch (x) {
        case 1:
            document.getElementById('sp1').innerHTML = "功德数：";
            document.getElementById("mym").src = './my1.mp3';
            break;
        case 2:
            document.getElementById('sp1').innerHTML = "功德数：";
            document.getElementById("mym").src = './my2.mp3';
            break;
        case 3:
            document.getElementById('sp1').innerHTML = "功德数：";
            document.getElementById("mym").src = './my3.mp3';
            break;
        case 4:
            document.getElementById('sp1').innerHTML = "只因数：";
            document.getElementById("mym").src = './zy.mp3';
            break;
        default:
            document.getElementById("mym").src = './my1.mp3';
            break;
    }
}
