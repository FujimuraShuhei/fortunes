`use strict`;
//constにはid属性を記入か？//
const btn = document.getElementById(`btn`);
const result = document.getElementById(`result`);
//btnをクリックしたときどのような動きにしたいか？//
btn.addEventListener(`click`,() => {
    //ランダムで数字を選択,,（０～０．９９までの数字から）//
    const num = Math.random();
//数値よりnumが小さかったら文面表文面。。。elseifは継続でelseのみは終了//

    if (num < 0.2) {
        result.textContent = `ラッキー`;
    }else if (num < 0.5) {
        result.textContent = `まあまあ`;
    }else if (num < 0.8) {
        result.textContent = `ヤバいよ`;
    }else {
        result.textContent = `ヤバいよヤバいよ`;
    }
});