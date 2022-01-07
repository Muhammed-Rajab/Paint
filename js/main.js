'use strict';

import { colors, canvas, ctx, colorBtns, toolBox, toolBoxArrow, restoreBtn }
from './Configurations/VariablesAndEventListeners.js';
import { startPostition, finishedPosition, draw, drawing } from './Draw/Draw.js';

// Window event listener
window.addEventListener('load', () => {

    // Adds grid
    // grid(ctx, window.innerWidth, window.innerHeight, 25, 25);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // grid(ctx, window.innerWidth, window.innerHeight, 25, 25);
    });

    restoreBtn.addEventListener('click', () => {
        console.log("Restoring!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // grid(ctx, window.innerWidth, window.innerHeight, 25, 25);
    });

    canvas.addEventListener('mousedown', (e) => startPostition(e, ctx));
    canvas.addEventListener('mouseup', () => finishedPosition(ctx));
    canvas.addEventListener('mousemove', (e) => draw(e, ctx));
});