#!/bin/bash

list=`ls ./blogs`
for i in ${list[@]};
do
	node bin/create.js templates/index.html ./blogs/${i} > ./html/${i%%.*}.html
done
