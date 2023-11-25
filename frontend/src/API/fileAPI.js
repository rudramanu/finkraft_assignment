const baseURL = "http://localhost:9800";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${baseURL}/file/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("File upload failed");
    }

    return response.json();
  } catch (error) {
    throw new Error(`File upload error: ${error.message}`);
  }
};

export const getFiles = async () => {
  try {
    const response = await fetch(`${baseURL}/file/files`);

    if (!response.ok) {
      throw new Error("Failed to fetch files");
    }

    return response.json();
  } catch (error) {
    throw new Error(`File fetch error: ${error.message}`);
  }
};

export const deleteFile = async (fileId) => {
  try {
    const response = await fetch(`${baseURL}/file/delete/${fileId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("File deletion failed");
    }

    return response.json();
  } catch (error) {
    throw new Error(`File deletion error: ${error.message}`);
  }
};
