import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const ProfilePic = styled("img")({
  marginTop: 10,
  width: 138,
  height: 138,
  borderRadius: "50%",
  marginLeft: "35%",
});
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 138px; /* Match the height of the image */
`;

function UserImage(props) {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0); // Add a state for the key

  const handleError = () => {
    setImageError(true);
    setLoading(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setImageError(false);

    const imageLoader = new Image();
    imageLoader.src = props.url;

    imageLoader.onload = () => {
      handleImageLoad();
    };

    imageLoader.onerror = () => {
      handleError();
    };

    // Cleanup the imageLoader to avoid memory leaks
    return () => {
      imageLoader.onload = null;
      imageLoader.onerror = null;
    };
  }, [props.url, key]); // Add key as a dependency

  useEffect(() => {
    // Update the key when props.url changes
    setKey((prevKey) => prevKey + 1);
  }, [props.url]);
  return (
    <div>
      {loading ? (
        <LoaderContainer>
          <TailSpin type="Oval" color="#00BFFF" height={30} width={30} />
        </LoaderContainer>
      ) : imageError ? (
        <>
          <p>Image not found in the database</p>
          <ProfilePic
            src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
            alt="Default User Profile"
          />
        </>
      ) : (
        <ProfilePic
          key={props.url}
          src={props.url}
          onError={handleError}
          onLoad={handleImageLoad}
          alt="User Profile"
        />
      )}
    </div>
  );
}
export default UserImage;
