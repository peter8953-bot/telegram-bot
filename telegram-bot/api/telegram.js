{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default async function handler(req, res) \{\
  if (req.method !== "POST") return res.status(200).send("OK");\
\
  // body \uc0\u54028 \u49905 \
  const update = req.body || \{\};\
  const chatId = update?.message?.chat?.id;\
  const text = update?.message?.text || "";\
  const ADMIN_ID = 1007406034; // \uc0\u48376 \u51064  ID\u47196  \u49688 \u51221 \u54616 \u49464 \u50836 \
\
  let reply = "\uc0\u50504 \u45397 \u54616 \u49464 \u50836 ! \u51200 \u45716  Vercel \u50948 \u50640 \u49436  \u46028 \u50500 \u44032 \u45716  \u53588 \u47112 \u44536 \u47016  \u48391 \u51060 \u50640 \u50836  \u55357 \u56908 ";\
\
  // /start \uc0\u52376 \u47532 \
  if (text === "/start") \{\
    reply = `\uc0\u54872 \u50689 \u54633 \u45768 \u45796  \u55356 \u57225  \u50500 \u47000  \u47700 \u45684 \u47484  \u49440 \u53469 \u54644 \u51452 \u49464 \u50836 `;\
    await fetch(`https://api.telegram.org/bot$\{process.env.BOT_TOKEN\}/sendMessage`, \{\
      method: "POST",\
      headers: \{ "content-type": "application/json" \},\
      body: JSON.stringify(\{\
        chat_id: chatId,\
        text: reply,\
        reply_markup: \{\
          keyboard: [\
            [\{ text: "\uc0\u49472 \u54140 \u47092  \u44032 \u51077 \u48169 \u48277 " \}],\
            [\{ text: "\uc0\u54200 \u51648  \u45224 \u44592 \u44592 " \}],\
            [\{ text: "\uc0\u49345 \u45812 \u50896  \u50672 \u44208 " \}]\
          ],\
          resize_keyboard: true,\
        \},\
      \}),\
    \});\
    return res.status(200).json(\{ ok: true \});\
  \}\
\
  // \uc0\u48260 \u53948  \u52376 \u47532 \
  if (text === "\uc0\u49472 \u54140 \u47092  \u44032 \u51077 \u48169 \u48277 ") \{\
    reply = "\uc0\u55357 \u56393  \u49472 \u54140 \u47092  \u44032 \u51077  \u50504 \u45236 : https://www.notion.so/280ee3ec2d308058983aed4f111d31af";\
  \} else if (text === "\uc0\u54200 \u51648  \u45224 \u44592 \u44592 ") \{\
    reply = "\uc0\u51648 \u44552  \u50668 \u44592 \u50640  \u54200 \u51648 \u47484  \u45224 \u44200 \u51452 \u49464 \u50836 ! \u55357 \u56553 ";\
    await fetch(`https://api.telegram.org/bot$\{process.env.BOT_TOKEN\}/sendMessage`, \{\
      method: "POST",\
      headers: \{ "content-type": "application/json" \},\
      body: JSON.stringify(\{\
        chat_id: ADMIN_ID,\
        text: `\uc0\u55357 \u56549  [\u54200 \u51648 ] \u44256 \u44061 \u51060  \u54200 \u51648 \u47484  \u45224 \u44592 \u47140  \u54633 \u45768 \u45796 .`,\
      \}),\
    \});\
  \} else if (text === "\uc0\u49345 \u45812 \u50896  \u50672 \u44208 ") \{\
    reply = "\uc0\u55357 \u56907  \u49345 \u45812 \u50896 \u51012  \u50672 \u44208 \u54644 \u46300 \u47532 \u44192 \u49845 \u45768 \u45796 . \u51104 \u49884 \u47564  \u44592 \u45796 \u47140 \u51452 \u49464 \u50836 !";\
    await fetch(`https://api.telegram.org/bot$\{process.env.BOT_TOKEN\}/sendMessage`, \{\
      method: "POST",\
      headers: \{ "content-type": "application/json" \},\
      body: JSON.stringify(\{\
        chat_id: ADMIN_ID,\
        text: `\uc0\u55357 \u56549  [\u49345 \u45812 \u50836 \u52397 ] \u44256 \u44061 \u51060  \u49345 \u45812 \u50896  \u50672 \u44208 \u51012  \u50836 \u52397 \u54664 \u49845 \u45768 \u45796 .`,\
      \}),\
    \});\
  \}\
\
  // \uc0\u44592 \u48376  \u45813 \u48320 \
  if (chatId) \{\
    await fetch(`https://api.telegram.org/bot$\{process.env.BOT_TOKEN\}/sendMessage`, \{\
      method: "POST",\
      headers: \{ "content-type": "application/json" \},\
      body: JSON.stringify(\{ chat_id: chatId, text: reply \}),\
    \});\
  \}\
\
  return res.status(200).json(\{ ok: true \});\
\}\
}