document.addEventListener('DOMContentLoaded', function() 
{
    const hiddenMessage = document.getElementById('hiddenMessage');
    if (hiddenMessage)
    {
        hiddenMessage.classList.remove('hidden');
        startplease();
    }
});

function startplease() 
{
    const pleaseCanvas = document.getElementById('pleaseCanvas');
    const ctx = pleaseCanvas.getContext('2d');
    const pleasePieces = 100;
    const please = [];
    const emoji = '🙏';

    pleaseCanvas.width = innerWidth;
    pleaseCanvas.height = innerHeight;

    for (let i = 0; i < pleasePieces; i++) 
    {
        please.push({
            x: Math.random() * pleaseCanvas.width,
            y: Math.random() * pleaseCanvas.height - pleaseCanvas.height,
            size: Math.random() * 25 + 10,
            speed: Math.random() * 3 + 1,
        });
    }

    function drawplease() 
    {
        ctx.clearRect(0, 0, pleaseCanvas.width, pleaseCanvas.height);

        please.forEach(piece => {
            ctx.font = `${piece.size}px serif`;
            ctx.fillText(emoji, piece.x, piece.y);
            piece.y += piece.speed;

            if (piece.y > pleaseCanvas.height) 
            {
                piece.y = -piece.size;
            }
        });

        requestAnimationFrame(drawplease);
    }

    drawplease();
}