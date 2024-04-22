document.addEventListener('DOMContentLoaded', function() {
    var statusText = document.getElementById('status');
    
    var sound = new Howl({
        src: ['Music/Come_Together.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.5, 
        html5: true, 
        onload: function() {
            statusText.textContent = 'Ready to play!';
            document.getElementById('playBtn').disabled = false; 
        },
        onplay: function() {
            document.getElementById('playBtn').style.display = 'none';
            document.getElementById('pauseBtn').style.display = 'inline';
            statusText.textContent = ''; 
        },
        onpause: function() {
            document.getElementById('playBtn').style.display = 'inline';
            document.getElementById('pauseBtn').style.display = 'none';
        },
        onplayerror: function(id, error) {
            console.log('Playback error:', error);
            sound.once('unlock', function() {
                sound.play();
            });
        },
        onloaderror: function(id, error) {
            console.log('Load error:', error);
            statusText.textContent = 'Failed to load audio.';
        }
    });

    document.getElementById('playBtn').addEventListener('click', function() {
        sound.play();
    });

    document.getElementById('pauseBtn').addEventListener('click', function() {
        sound.pause();
    });

    document.getElementById('playBtn').disabled = true;
});