const a10_0x2b5da2=a10_0x4005;function a10_0x1093(){const _0x14ca5a=['2343270sTasOI','rows','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','DATABASE_URL','dotenv','connect','47110wdJQoh','log','1092468bnlUMF','Voici\x20toutes\x20les\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','7009864yfEfWM','../set','\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20mention\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20','La\x20table\x20\x27mention\x27\x20a\x20été\x20créée\x20avec\x20succès.','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27mention\x27:','Données\x20ajoutées\x20ou\x20mises\x20à\x20jour\x20dans\x20la\x20table\x20\x27mention\x27\x20avec\x20succès.','query','258NuppCB','release','error','1454202YmvgoW','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27mention\x27:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20mention\x20(id,\x20url,\x20type,\x20message)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20\x20url\x20=\x20excluded.url,\x20type\x20=\x20excluded.type\x20,\x20message\x20=\x20excluded.message;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20mention;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','305627fifYcq','151768JGRBlK'];a10_0x1093=function(){return _0x14ca5a;};return a10_0x1093();}function a10_0x4005(_0x41c825,_0x4dbd76){const _0x1093f7=a10_0x1093();return a10_0x4005=function(_0x40054a,_0x43103d){_0x40054a=_0x40054a-0x123;let _0x4447cb=_0x1093f7[_0x40054a];return _0x4447cb;},a10_0x4005(_0x41c825,_0x4dbd76);}(function(_0x397597,_0x2cb7d6){const _0x538630=a10_0x4005,_0x2accd8=_0x397597();while(!![]){try{const _0x3d0667=parseInt(_0x538630(0x12e))/0x1+-parseInt(_0x538630(0x12f))/0x2+parseInt(_0x538630(0x12a))/0x3+parseInt(_0x538630(0x138))/0x4+parseInt(_0x538630(0x130))/0x5+-parseInt(_0x538630(0x127))/0x6*(parseInt(_0x538630(0x136))/0x7)+-parseInt(_0x538630(0x13a))/0x8;if(_0x3d0667===_0x2cb7d6)break;else _0x2accd8['push'](_0x2accd8['shift']());}catch(_0x51bac1){_0x2accd8['push'](_0x2accd8['shift']());}}}(a10_0x1093,0x46f41),require(a10_0x2b5da2(0x134))['config']());const {Pool}=require('pg'),s=require(a10_0x2b5da2(0x13b));var dbUrl=s[a10_0x2b5da2(0x133)]?s[a10_0x2b5da2(0x133)]:a10_0x2b5da2(0x132);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function creerTableMention(){const _0x44a33d=a10_0x2b5da2,_0x44b829=await pool[_0x44a33d(0x135)]();try{await _0x44b829[_0x44a33d(0x126)](_0x44a33d(0x13c)),console[_0x44a33d(0x137)](_0x44a33d(0x123));}catch(_0x4509b1){console[_0x44a33d(0x129)](_0x44a33d(0x12b),_0x4509b1);}finally{_0x44b829['release']();}};creerTableMention();async function addOrUpdateDataInMention(_0x250c49,_0xd27349,_0xe0a516){const _0x735735=a10_0x2b5da2,_0x1e6ef0=await pool[_0x735735(0x135)]();try{const _0xf32a8b=_0x735735(0x12c),_0x1682ed=[_0x250c49,_0xd27349,_0xe0a516];await _0x1e6ef0[_0x735735(0x126)](_0xf32a8b,_0x1682ed),console[_0x735735(0x137)](_0x735735(0x125));}catch(_0x339dcc){console[_0x735735(0x129)](_0x735735(0x124),_0x339dcc);}finally{_0x1e6ef0[_0x735735(0x128)]();}};async function modifierStatusId1(_0x5cff92){const _0x2c486b=a10_0x2b5da2,_0xfd190c=await pool[_0x2c486b(0x135)]();try{const _0xb9d8ab='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20mention\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20status\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0x377fce=[_0x5cff92];await _0xfd190c['query'](_0xb9d8ab,_0x377fce),console['log']('Le\x20status\x20a\x20été\x20modifié\x20avec\x20succès\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27.');}catch(_0x743248){console[_0x2c486b(0x129)]('Erreur\x20lors\x20de\x20la\x20modification\x20du\x20status\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27:',_0x743248);}finally{_0xfd190c[_0x2c486b(0x128)]();}};async function recupererToutesLesValeurs(){const _0x402fee=a10_0x2b5da2,_0x5f112d=await pool[_0x402fee(0x135)]();try{const _0x4a7db5=_0x402fee(0x12d),_0x542b7a=await _0x5f112d[_0x402fee(0x126)](_0x4a7db5);return console[_0x402fee(0x137)](_0x402fee(0x139),_0x542b7a['rows']),_0x542b7a[_0x402fee(0x131)];}catch(_0x4868ba){console[_0x402fee(0x129)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:',_0x4868ba);}finally{_0x5f112d[_0x402fee(0x128)]();}};module['exports']={'addOrUpdateDataInMention':addOrUpdateDataInMention,'recupererToutesLesValeurs':recupererToutesLesValeurs,'modifierStatusId1':modifierStatusId1};