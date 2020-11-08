let game=document.querySelector('.game-grid');
init=()=>
{
    for(let i=0;i<200;i++)
    {
        let div = document.createElement("div");
        game.appendChild(div);
    }
}
init();