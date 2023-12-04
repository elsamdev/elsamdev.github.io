const blurInput = document.getElementById("blur");
const transparencyInput = document.getElementById("transparency");
const colorInput = document.getElementById("color");
const outlineInput = document.getElementById("outline");
const cssResult = document.getElementById("css-code");
const glassRec = document.getElementById("glass-preview-rectangle");

/// set default values for the preview

blurInput.value = 1;
transparencyInput.value = 0.31;
colorInput.value = "#000";
outlineInput.value = 0;

//initialize the glass preview with deafault values
updateGlassPreview();

///// add event listeners to the range lsiders

blurInput.addEventListener("input", updateGlassPreview);
transparencyInput.addEventListener("input", updateGlassPreview)
outlineInput.addEventListener("input", updateGlassPreview)


/////////add event listener to the color input (color picker)
colorInput.addEventListener('input', () => {
    updateGlassPreview();
    updateCSSCode();

});


function updateGlassPreview(){
const blurValue = blurInput.value;
const transparencyValue = transparencyInput.value;
const colorValue = colorInput.value;
const outlineValue = outlineInput.value;

           // /update the glas preview rectangle
    glassRec.style.backdropFilter = `blur(${blurValue})px`;
    glassRec.style.backgroundColor = `$rgba(${hexToRgb(colorValue)}, ${transparencyValue})`
    glassRec.style.outline = `${outlineValue}px solid ${colorValue}`;
    updateCSSCode();
}
    
