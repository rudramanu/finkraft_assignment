const { FileModel } = require("../models/file.model");
const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const fileRouter = express.Router();

fileRouter.get("/files", async (req, res) => {
  let files = await FileModel.findAll();
  res.send({ message: files });
});

fileRouter.post("/upload", upload.single("filename"), async (req, res) => {
  //   console.log(req.file);
  //output:
  // {
  //   fieldname: 'filename',
  //   originalname: 'rudra_code.txt',
  //   encoding: '7bit',
  //   mimetype: 'text/plain',
  // }
  if (!req.file) {
    return res.status(400).json({ message: "No file part" });
  }
  const allowedExtensions = ["pptx", "docx", "xlsx", "txt", "pdf"];
  const fileExtension = req.file.originalname.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) {
    return res.status(400).json({ message: "Invalid file type" });
  }
  try {
    const fileMetadata = {
      filename: req.file.originalname,
      upload_date: new Date().toISOString(),
      userId: req.userId,
    };
    console.log("filedata", fileMetadata);
    await FileModel.create(fileMetadata);
    return res.status(201).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

fileRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await FileModel.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: "File not found" });
    }
    await post.destroy();
    res.send("File deleted");
  } catch (err) {
    res.send({ error: "Internal Server Error" });
  }
});

module.exports = { fileRouter };
