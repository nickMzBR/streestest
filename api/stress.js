// api/stress.js
export default function handler(req, res) {
  const startTime = Date.now();

  // Simula um processamento no servidor da Vercel
  let count = 0;
  for (let i = 0; i < 50000; i++) {
    count += Math.sqrt(i);
  }

  const duration = Date.now() - startTime;

  // Retorna métricas da execução da função Serverless
  res.status(200).json({
    status: 'ok',
    executionTimeMs: duration,
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || 'edge'
  });
}
