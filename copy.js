const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const componets = path.resolve('./src/components/src');
const cwd = path.resolve('../Deep-Viz');
const desFilePath = path.resolve('../Deep-Viz/src');
fs.readdir(componets, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach((filename) => {
    fs.stat(path.join(componets, filename), (error, stats) => {
      if (error) throw err;
      if (stats.isDirectory()) {
        readFile(path.join(componets, filename), filename);
      }
    });
  });
});
function readFile(readurl, name) {
  fs.readdir(readurl, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((filename) => {
      fs.stat(path.join(readurl, filename), (errors, stats) => {
        if (errors) throw err;
        if (stats.isFile() && getdir(filename) !== 'DS_Store') {
          const newUrl = `${componets}/${name}/${filename}`;
          const desUrl = `${desFilePath}/${name}/${filename}`;
          const desArray = newUrl.split('src');
          const basefolder = desFilePath;
          const folders = desArray[1].split('/');
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
          const readable = fs.createReadStream(newUrl);
          const writable = fs.createWriteStream(desUrl);
          readable.pipe(writable);
          console.log(`${filename}复制成功`);
        } else if (stats.isDirectory()) {
          readFile(path.join(readurl, filename), `${name}/${filename}`);
        }
      });
    });
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
// const isConflictRegular = '^<<<<<<<\\s|^=======$|^>>>>>>>\\s';
try {
  execSync('git fetch upstream', { cwd });
} catch (e) {
  console.log('Deep-Viz没有fetch成功');
  process.exit(0);
}
// let results = null;
// try {
//   results = execSync(`git grep -n -P "${isConflictRegular}"`, { encoding: 'utf-8', cwd });
// } catch (e) {
//   console.log('没有发现冲突，等待 commit');
//   process.exit(0);
// }
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
  console.log('Deep-Viz没有commit成功');
  process.exit(0);
}
try {
  execSync('git merge upstream/dev', { cwd });
} catch (e) {
  console.log('Deep-Viz没有mergec成功');
  process.exit(0);
}
try {
  execSync('git push origin', { cwd });
} catch (e) {
  console.log('Deep-Viz没有push成功');
  process.exit(0);
}
process.exit(0);

