// Agregar funcionalidad para cambiar botón de color y estado mientras envía

export function setBtnLoadingView(btnElement) {
    btnElement.disabled = true;
    btnElement.classList.toggle("btn-loading");
    btnElement.textContent = "Enviando...";
}

export function setBtnOriginalView(btnElement, text) {
    btnElement.disabled = false;
    btnElement.classList.toggle("btn-loading");
    btnElement.textContent = text;
}
