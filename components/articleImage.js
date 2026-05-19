export function generateArticleImageUrl(id, title, pillar) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 800, 600);
  grad.addColorStop(0, '#1a1a1e');
  grad.addColorStop(0.5, '#0d0d0f');
  grad.addColorStop(1, '#000000');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 600);

  for (let x = 0; x < 800; x += 40) {
    for (let y = 0; y < 600; y += 40) {
      ctx.fillStyle = `rgba(57, 255, 20, ${0.02 + Math.random() * 0.03})`;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = 'rgba(57, 255, 20, 0.06)';
  ctx.font = 'bold 220px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(id.replace('ART ', ''), 400, 260);

  ctx.strokeStyle = 'rgba(57, 255, 20, 0.15)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 420);
  ctx.lineTo(700, 420);
  ctx.stroke();

  ctx.fillStyle = 'rgba(57, 255, 20, 0.3)';
  ctx.font = '12px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(pillar.toUpperCase(), 400, 440);

  return canvas.toDataURL('image/jpeg', 0.7);
}
