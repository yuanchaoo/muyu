document.addEventListener('DOMContentLoaded', () => {
    const woodfish = document.getElementById('woodfish');
    const hammer = document.getElementById('hammer');
    const scoreElement = document.getElementById('score');
    const hitSound = document.getElementById('hitSound');
    let score = 0;

    woodfish.addEventListener('click', () => {
        // 播放音效
        hitSound.currentTime = 0;
        hitSound.play();

        // 更新分数
        score++;
        scoreElement.textContent = score;

        // 锤子动画
        hammer.style.transform = 'rotate(-25deg)';
        setTimeout(() => {
            hammer.style.transform = 'rotate(0deg)';
        }, 100);

        // 木鱼动画
        woodfish.style.transform = 'scale(1.1)';
        setTimeout(() => {
            woodfish.style.transform = 'scale(1)';
        }, 100);

        // 创建漂浮文字
        const floatingText = document.createElement('div');
        floatingText.className = 'floating-text';
        floatingText.textContent = '功德+1';
        floatingText.style.left = `${woodfish.offsetLeft + woodfish.offsetWidth / 2}px`;
        floatingText.style.top = `${woodfish.offsetTop}px`;
        document.body.appendChild(floatingText);

        // 移除漂浮文字
        setTimeout(() => {
            floatingText.remove();
        }, 400);
    });
}); 