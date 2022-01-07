'use strict';
import { ctx, lineWidth } from '../Configurations/VariablesAndEventListeners.js';

ctx.strokeStyle = 'rgb(33, 36, 44)';

export let drawing = false;

export function startPostition(e, ctx) {
    drawing = true;
    draw(ctx, e);
};

export function finishedPosition(ctx) {
    drawing = false;
    ctx.beginPath();
};

export function draw(e, ctx) {

    if (!drawing) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    // ctx.strokeStyle = 'red';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
};

export function changeColor(color, ctx) {
    ctx.strokeStyle = color;
}