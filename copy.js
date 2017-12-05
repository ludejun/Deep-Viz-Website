const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const componets = path.resolve('./src/components/src');
const cwd = path.resolve('../Deep-Viz');
const desFilePath = path.resolve('../Deep-Viz/src');
const files = fs.readdirSync(componets);

files.forEach((filename) => {
  const address = path.join(componets, filename);
  const info = fs.statSync(address);
  if (info.isDirectory()) {
    console.log(filename);
    readFile(address, filename);
  }
  if (info.isFile() && getdir(filename) !== 'DS_Store') {
    const readable = fs.createReadStream(`${componets}/${filename}`);
    const writable = fs.createWriteStream(`${desFilePath}/${filename}`);
    readable.pipe(writable);
  }
});

function readFile(readurl, name) {
  const file = fs.readdirSync(readurl);
  file.forEach((filename) => {
    const address = path.join(readurl, filename);
    const infos = fs.statSync(address);
    if (infos.isFile() && getdir(filename) !== 'DS_Store') {
      const newUrl = address;
      const desArray = newUrl.split('components');
      const basefolder = desFilePath;
      const folders = desArray[1].split('/');
      folders.shift();
      folders.shift();
      const length = folders.length;
      let tempName = basefolder;
      for (let i = 0; i < length; i++) {
        if (folders[i].indexOf('.') === -1) {
          tempName += `/${folders[i]}`;
          if (!fsExistsSync(tempName)) {
            fs.mkdirSync(tempName);
          }
        }
      }
      console.log(newUrl, `${desFilePath}/${folders.join('/')}`);
      const readable = fs.createReadStream(newUrl);
      const writable = fs.createWriteStream(`${desFilePath}/${folders.join('/')}`);
      readable.pipe(writable);
      console.log(`${filename}复制成功`);
    } else if (infos.isDirectory()) {
      readFile(address, filename);
    }
  });
}
function getdir(url) {
  const arr = url.split('.');
  const len = arr.length;
  return arr[len - 1];
}
function fsExistsSync(fpath) {
  try {
    fs.accessSync(fpath, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}
try {
  execSync('git fetch upstream', { cwd });
} catch (e) {
  console.log('Deep-Viz没有fetch成功');
  process.exit(0);
}
try {
  execSync('git merge upstream/dev', { cwd });
} catch (e) {
  console.log('Deep-Viz没有mergec成功');
  process.exit(0);
}
try {
  execSync('npm run gulp', { cwd });
} catch (e) {
  console.log('Deep-Viz编译成功');
  process.exit(0);
}
try {
  execSync('git add .', { cwd });
} catch (e) {
  console.log('Deep-Viz没有add成功');
  process.exit(0);
}
try {
  const argument = process.argv.splice(2);
  execSync(`git commit -m "${argument.join(' ')}"`, { cwd });
} catch (e) {
  console.log(`Deep-Viz没有commit成功:${e}`);
  process.exit(0);
}
try {
  execSync('git push origin', { cwd });
} catch (e) {
  console.log('Deep-Viz没有push成功');
  process.exit(0);
}
process.exit(0);

