const express = require("express");
const multer = require("multer");
const os = require("os");
const router = express.Router();
const { getFileDetails } = require("../controllers/upload-controller");

const storage = multer.diskStorage({ destination: os.tmpdir(), filename: (req, file, callback) => callback(null, `${file.originalname}`) });
const upload = multer({ storage: storage });

router.post("/uploadToDrive", upload.single("drive_file"), getFileDetails);

module.exports = router;
