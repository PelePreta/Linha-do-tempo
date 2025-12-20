window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playPause = document.getElementById('play-pause');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');

  if (!audio) return;

  // Atualiza duração quando carregar
  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  // Atualiza progresso
  audio.addEventListener('timeupdate', () => {
    progress.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // Botão play/pause
  playPause.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPause.textContent = '⏸';
    } else {
      audio.pause();
      playPause.textContent = '▶';
    }
  });

  function formatTime(sec) {
    const min = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${min}:${s}`;
  }

  // --- Inicia silencioso
  audio.volume = 0;
  audio.muted = true;
  audio.play().then(() => {
    console.log("Áudio iniciado em modo mudo (permitido).");
  }).catch(() => {
    console.warn("Autoplay pode estar bloqueado, aguardando interação.");
  });

  // --- Cria o botão "Ativar som"
  const soundBtn = document.createElement('button');
  soundBtn.textContent = "🔊 Ativar Som";
  soundBtn.style.position = "fixed";
  soundBtn.style.bottom = "20px";
  soundBtn.style.right = "20px";
  soundBtn.style.padding = "10px 20px";
  soundBtn.style.background = "cyan";
  soundBtn.style.color = "black";
  soundBtn.style.fontFamily = "Orbitron, sans-serif";
  soundBtn.style.fontSize = "14px";
  soundBtn.style.border = "2px solid #00ffff";
  soundBtn.style.borderRadius = "10px";
  soundBtn.style.cursor = "pointer";
  soundBtn.style.zIndex = "9999";
  soundBtn.style.boxShadow = "0 0 15px cyan";
  document.body.appendChild(soundBtn);

  // --- Quando clicar, ativa o som com fade-in
  soundBtn.addEventListener('click', () => {
    audio.muted = false;
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 150);
    soundBtn.remove();
    console.log("Som ativado com fade-in!");
  });
});
// Força autoplay mutado com interação mínima
function tryAutoplay() {
  audio.muted = true;
  audio.volume = 0;
  audio.play().catch(() => {
    // se bloqueou, aguarda interação
    const startAudio = () => {
      audio.play();
      document.body.removeEventListener('click', startAudio);
    };
    document.body.addEventListener('click', startAudio);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  tryAutoplay();
});