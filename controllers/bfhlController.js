const atob = require("atob");

exports.processPost = (req, res) => {
  const { data, file_b64 } = req.body;

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));

  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase()
  );
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? [lowercaseAlphabets.sort().pop()]
    : [];

  let fileValid = false;
  let fileMimeType = "image/png";
  let fileSizeKB = 400;

  if (file_b64) {
    try {
      const fileBuffer = Buffer.from(file_b64, "base64");
      fileSizeKB = Math.ceil(fileBuffer.length / 1024);
      fileMimeType = getMimeType(fileBuffer);
      fileValid = true;
    } catch (err) {
      fileValid = false;
    }
  }

  res.status(200).json({
    is_success: true,
    user_id: "sharath@4621",
    email: "bb6610@srmist.edu.in",
    roll_number: "RA2111026010013",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: 400,
  });
};

exports.processGet = (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
};
