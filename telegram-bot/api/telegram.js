{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default async function handler(req, res) \{\
  if (req.method !== 'POST') return res.status(200).send('OK');\
\
  const update = req.body;\
  const chatId = update?.message?.chat?.id;\
  const text = update?.message?.text || '';\
\
  let reply = '\uc0\u50504 \u45397 \u54616 \u49464 \u50836 ! \u51200 \u45716  Vercel \u50948 \u50640 \u49436  \u46028 \u50500 \u44032 \u45716  \u53588 \u47112 \u44536 \u47016  \u48391 \u51060 \u50640 \u50836  \u55357 \u56908 ';\
  if (text === '/start') reply = '\uc0\u54872 \u50689 \u54633 \u45768 \u45796  \u55356 \u57225  /echo \u47484  \u51077 \u47141 \u54644 \u48372 \u49464 \u50836 !';\
  if (text.startsWith('/echo ')) reply = text.slice(6);\
\
  if (chatId) \{\
    await fetch(`https://api.telegram.org/bot$\{process.env.BOT_TOKEN\}/sendMessage`, \{\
      method: 'POST',\
      headers: \{ 'content-type': 'application/json' \},\
      body: JSON.stringify(\{ chat_id: chatId, text: reply \}),\
    \});\
  \}\
\
  return res.status(200).json(\{ ok: true \});\
\}\
}