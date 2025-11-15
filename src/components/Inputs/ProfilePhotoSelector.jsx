import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);

      // Generate preview URL
      const generatedPreview = URL.createObjectURL(file);

      if (setPreview) setPreview(generatedPreview);
      setPreviewUrl(generatedPreview);
    }
  };

  const onChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);

    if (setPreview) setPreview(null);
  };

  return (
    <div className="">
      {/* Hidden Input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* If no image selected */}
      {!image ? (
        <div className="flex flex-col items-center gap-2">
          <LuUser className="text-4xl text-gray-600" />

          <button
            type="button"
            onClick={onChooseFile}
            className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        // Image preview section
        <div className="relative flex flex-col items-center gap-2">
          <img
            src={preview || previewUrl}
            alt="profile photo"
            className="w-24 h-24 rounded-full object-cover border"
          />

          <button
            type="button"
            onClick={handleRemoveImage}
            className="p-2 rounded bg-red-200 hover:bg-red-300"
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
