---
layout: post
categories: [ coupdegueule, opensource, launchpad ]
published: true
title: Coup de gueule sur le launchpad
lang: fr
---

Aujourd'hui coup de gueule sur les systèmes de gestion de bug open source et les bases de connaissances open source.
J'en ai marre des wikis, marre des bugzilla et autres launchpad. 

Marre de cette pseudo horizontalité dans laquels nous serions tous à égalité. Avant c'était simple un problème, je consulte une base de connaissance fourni, si mon problème spécifique ne sitrouve pas je contacte le fournisseurs qui met à jour cette base de connaissance après m'avoir fait parvenir les instruction pour corriger les fonctionnalités inopérantes.

Ubuntu : le launchpad aveugle
-----------------------------
Maintenant, et bien un je regarde la base, et là première peur, ces développeurs font cela gratuitement, ne les dérange que si tu es sur du problème. Bon je revérifie, oui, il existe bien, bon, alors laissons un message. J'attends une réponse, non rien, deux jours passent, toujours rien, je délaisse le message, puis m'aperçois quelques jours plus tard, un que le problème est résolu, deux que j'ai une réponse. Bien, j'essaye de discuter avec un interlocuteur du launchpad qui est bah..., juste un nom, aucune fonction, bref, je discute, nous tombons d'accord pour dire que ce problème a été réglé par une mise à jour et il ferme le bug. Seulement il ne le ferme pas comme terminé, mais comme invalide. Je lui dit que ce cas a bien existé, mais il me réponds que ne pouvant détecter la cause du problème, il préfère le laisser en invalide.

Pour information, il s'agissait du paquet ssh-server qui était in-installable (le client étant installé en une version supérieur à celle disponible pour le serveur), j'ai résolu mon problème avec un downgrade du client (merci aptitude). C'était donc soit un problème de diffusion des versions, soit un problème de mise à disponibilité. Comme la plupart des utilisateurs installent le server dès l'origine ou ne l'installe pas, j'imagine que peu de personnes ont été affectées.

Néanmoins, Ce problème a été purement et simplement gommé par le launchpad, comme s'il n'avait pas existé.

Alors, raz le bol, de se sentir partie intégrante dans un processus "friendly", "human" mais qui a oublié que même si l'erreur est humaine, la masquer, ne permet que de la répéter.
