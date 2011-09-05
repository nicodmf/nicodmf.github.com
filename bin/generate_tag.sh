#!/bin/bash
cd ../pages/tags/_posts
tag=$1
function stringfile(){
	lang=$1
	echo "---"
	echo "layout: default"
	echo "title: Posts in "$tag""
	echo "permalink: /pages/tags/"$tag"_"$lang""
	echo "lang: "$lang""
	echo "translation: auto"
	echo "tag: tagpage"
	echo "tagtodraw: "$tag""
	echo "---"
	echo "{% include page_tags.html %}"
}
function input(){
	echo "Tag à créer - rien pour sortir"
	read tag	
}
input
while [[ $tag != "" ]]
do
	stringfile "fr" > "2001-01-01-"$tag"_fr.html"
	stringfile "en" > "2001-01-01-"$tag"_en.html"
	echo "fichier créés"
	input
done
