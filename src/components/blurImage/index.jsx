import { Blurhash } from "react-blurhash";
import { useState } from "react";
import React from "react";
const BlurImage = ({ children, hash, width = 400, height = 300 }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <>
            {!isImageLoaded && (
                <Blurhash
                    hash={hash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}

            {React.cloneElement(children, {
                onLoad: () => setIsImageLoaded(true),
                style: { display: isImageLoaded ? "inline" : "none" },
            })}
        </>
    );
};

export default BlurImage;
