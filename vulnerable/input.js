const { exec } = require('child_process');

function deleteFolder(folderName) {
  // 🔥 Código inseguro: sin validación
  exec(`rm -rf ${folderName}`, (err, stdout, stderr) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("Deleted:", stdout);
  });
}

deleteFolder(process.argv[2]);
