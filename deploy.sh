echo "--run npm install--"
npm install

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

echo "--remove temp dir from desktop--"
rm -R ~/Desktop/temp/

echo "--git add--"
git add -A

echo "--add message to git commit--"
git commit 

echo "--git push--"
git push

echo "--switch back to dev branch--"
git checkout dev

echo "--run npm install--"
npm install
