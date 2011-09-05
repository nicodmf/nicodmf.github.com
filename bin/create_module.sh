#!/bin/bash
cd ../cat/module/_posts
tag=$1
function stringfile(){
	lang=$1
	echo "---"
	echo "layout: module"
	echo "title: "$name""
	echo "tags: [ "$tags" ]"
	echo "image: /docs/modules/images/"$name"_icon.png"
	echo "lang: "$lang""
	echo "translation: auto"
	if [[ "$lang" == "fr" ]]
	then
		echo "css: "$name""
		echo "free: "$free""
		echo "compatibilities: [ "$compatibilities" ]"
		echo "compliances: [ "$compliances" ]"
		echo "reference: true"
	fi
	echo "resume: "$resume""
	echo "---"

}
function input(){
	echo -n "    $1 : "
	eval "echo -en \"\\\"\$$2\\\" \t=> \""
	read input
	[[ "$input" != "" ]] && eval $2=\"$input\"
}

isok="non"

name=""
free="true"
tags="tag"
compliances="w3c"
compatibilities="mootools"
while [[ "$isok" != "o" ]]
do
	while [[ "$isok" != "o" ]]
	do
		input "Nom du module                        " "name"
		[[ $tags = "tag" ]] && tags=$name
		input "is Free - true or false              " "free"
		input "Tags - separé par des ,              " "tags"
		input "Règles respectées - separé par des , " "compliances"
		input "Compatibilités - separé par des ,    " "compatibilities"
		clear
		echo "Nom            : $name"
		echo "Libre          : $free"
		echo "Tags           : $tags"
		echo "Règles         : $compliances"
		echo "Compatibilités : $compatibilities"
		echo
		input "Valider - o pour valider " "isok"
		echo
	done

	ffr=$(date +%Y-%m-%d)"-"$name"_fr.markdown"
	fen=$(date +%Y-%m-%d)"-"$name"_en.markdown"

	stringfile "fr" > $ffr
	stringfile "en" > $fen

	gedit $fen &
	gedit $ffr &

	cp "../../../docs/modules/images/textmorph_icon.png" "../../../docs/modules/images/"$name"_icon.png"
	gimp --no-splash ../../../docs/modules/images/"$name"_icon.png

	echo "fichier créés"

	input "Finir " "isok"
	clear
done

read
