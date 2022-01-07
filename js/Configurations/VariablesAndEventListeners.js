'use strict';

// Document elements
export const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');
export const colorBtns = document.querySelectorAll('.color-btn');
export const bgColorBtns = document.querySelectorAll('.bg-color-btn');
export const toolBox = document.querySelector('.tool-box');
export const openCloseBtn = document.querySelector('.open-close-wrapper');
export const toolBoxArrow = document.querySelector('.tool-box-arrow');
export const restoreBtn = document.querySelector('.reload-btn');
export const pencilBtn = document.querySelector('.pencil-btn');
export const pencilStylesWrapper = document.querySelector('.pencil-styles-wrapper');
export const pencilStylesLineWidthInput = document.querySelector('.pencil-style-linewidth-input');
export const pencilStylesApplyChangesBtn = document.querySelector('.pencil-styles-apply-changes');
export const backgroundColorBtn = document.querySelector('.background-color-btn');
export const canvasBackgroundColorWrapper = document.querySelector('.canvas-background-color-wrapper');

// Canvas configuration
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Colors for picker
export const colors = ['#ffffff', '#21242c', '#01a995', '#e84d39', '#74cf70', '#11accd', '#ffbe26', '#ca337c', '#1865f2'];
export const bgColors = ['#ffffff', '#21242c', '#01a995', '#e84d39', '#74cf70', '#11accd', '#ffbe26', '#ca337c', '#1865f2'];


// Loops to give color to colorBtns
colorBtns.forEach((btn, idx) => {
    colorBtns[idx].style.backgroundColor = colors[idx];
});

bgColorBtns.forEach((btn, idx) => {
    bgColorBtns[idx].style.backgroundColor = bgColors[idx];
});



// Event listener for hiding and showing colorBar
openCloseBtn.addEventListener('click', () => {
    toolBox.classList.toggle('tool-box-active');
    toolBoxArrow.classList.toggle('pointing-left');

    if (pencilStylesWrapper.classList.contains('wrapper-active') || canvasBackgroundColorWrapper.classList.contains('wrapper-active')) {
        pencilStylesWrapper.classList.remove('wrapper-active');
        canvasBackgroundColorWrapper.classList.remove('wrapper-active');
    }
});

// Eventlistener for hiding and showing line styles
pencilBtn.addEventListener('click', () => {
    pencilStylesWrapper.classList.toggle('wrapper-active');
});

// Event listener for changing linewidth
export let lineWidth = 4;
pencilStylesApplyChangesBtn.addEventListener('click', () => {
    lineWidth = pencilStylesLineWidthInput.value;
});

// Event listener for changing canvas background color
backgroundColorBtn.addEventListener('click', () => {
    canvasBackgroundColorWrapper.classList.toggle('wrapper-active');
});

// Changing pencil colors
colorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        ctx.strokeStyle = btn.style.backgroundColor;
    });
});

// Background color btns to change background
bgColorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = btn.style.backgroundColor;
    });
});