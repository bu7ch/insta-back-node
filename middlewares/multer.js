const path = require("path");
const multer = require("multer");

module.exports = (folderName) => {
  return multer({
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if (
        ext !== ".png" &&
        ext !== ".gif" &&
        ext !== ".jpg" &&
        ext !== ".jpeg"
      ) {
        return cb(new Error(`Only images are allowed`));
      }
      cb(null, true);
    },
    dest: `public/uploads/${folderName}/`,
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  });
};

// FIXME: check real name for originalname