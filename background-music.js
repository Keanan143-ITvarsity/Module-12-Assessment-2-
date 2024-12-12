if (!localStorage.getItem('backgroundMusicInitialized')) {
    const audio = new Audio('y2mate.com - Coffee Break.mp3');
    audio.loop = true;
    audio.play().catch(err => {
        console.log("Music play failed: ", err);
    });
    localStorage.setItem('backgroundMusicInitialized', 'true');
}

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('backgroundMusicInitialized');
});
