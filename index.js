function btn() {
    document.getElementById('sp').innerText++;
    document.getElementById("mym").play();
    document.getElementById("img1").src = './dzmy.png';
    setTimeout(cb, 100);
    if (document.getElementById('sp').innerHTML % 100 == 0) {
        document.getElementById("lau").play();
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
            document.getElementById("mym").src = './my1.mp3';
            break;
        case 2:
            document.getElementById("mym").src = './my2.mp3';
            break;
        case 3:
            document.getElementById("mym").src = './my4.mp3';
            break;
        case 4:
            document.getElementById("mym").src = './my3.mp3';
            break;
        default:
            document.getElementById("mym").src = './my1.mp3';
            break;
    }
}
