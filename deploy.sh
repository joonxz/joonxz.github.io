echo "--removing contents of public folder--"
rm -r public/*

echo "--compiling roots--"
roots compile

echo "--create temp folder--"
mkdir ~/Desktop/temp

echo "--copy public dir contents to temp dir--"
cp -r public/. ~/Desktop/temp

echo "--switch to master branch--"
git checkout master

echo "--copy from temp and paste to current dir--"
cp -r ~/Desktop/temp/. .

echo "--git add--"
git add -A

echo "--git commit--"
git commit -m "'date'"

echo "--git push--"
git push

echo "--switch back to dev branch--"
git checkout dev
