var 功德 = document.getElementById('sp').innerHTML;
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
            document.getElementById("mym").src = 'https://s1.aigei.com/pvaud/aud/mp3/bb/bb8df72d914041858a3402d6a9b820e4.mp3?e=1667095740&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mjZsTgbvWN3MFQqGvyaACk8N_AU=';
            break;
        case 2:
            document.getElementById('sp1').innerHTML = "功德数：";
            document.getElementById("mym").src = 'https://s1.aigei.com/pvaud/aud/mp3/8d/8da615ef750e421788240f4632ccc29c.mp3?e=1667095320&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:K305w02pYNGFExSbZR8Aqlvn6PA=';
            break;
        case 3:
            document.getElementById('sp1').innerHTML = "功德数：";
            document.getElementById("mym").src = 'https://s1.aigei.com/pvaud/aud/mp3/5e/5e07de5af336480b90e69588e1174327.mp3?e=1667095320&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:xAqTBIULuXuYBCowfAsozXUKzGM=';
            break;
        case 4:
            document.getElementById('sp1').innerHTML = "只因数：";
            document.getElementById("mym").src = 'https://s1.aigei.com/src/aud/mp3/11/112ad54a897743b6957a68c030bc259b.mp3?e=1667095320&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:5v7IclJaiq5K7Om0bFaIHBnp6mQ=';
            break;
        default:
            document.getElementById("mym").src = 'https://s1.aigei.com/pvaud/aud/mp3/93/93227b35092f4d07a10c9e38e0abfb8b.mp3?e=1667092740&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:UfdH7NH5haeTyfND2gpUr8FyX9s=';
            break;
    }
}
