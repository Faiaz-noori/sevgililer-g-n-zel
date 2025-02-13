// Sürpriz butonu için fonksiyon
function showSurprise() {
    const surpriseText = document.getElementById('surprise-text');
    surpriseText.classList.remove('hidden');
    surpriseText.style.animation = 'fadeIn 2s';
}