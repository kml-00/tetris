let game=document.querySelector('.game-grid');
function init()
{
    for(let i=0;i<200;i++)
    {
        let div = document.createElement("div");
        game.appendChild(div);
    }
}
init();

let gameSquers = Array.from(document.querySelectorAll('.game-grid div'));
console.log(gameSquers)




