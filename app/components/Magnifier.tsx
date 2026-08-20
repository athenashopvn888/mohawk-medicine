"use client";

import { useRef, useState } from "react";
import styles from "./magnifier.module.css";

const LENS_SIZE = 160;
const ZOOM = 2.5;

interface MagnifierProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Magnifier({ src, alt, className }: MagnifierProps) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 400, height: 400 });
  const imgRef = useRef<HTMLImageElement>(null);
  const [sourceState, setSourceState] = useState(() => ({ requested: src, current: src }));
  const currentSrc = sourceState.requested === src ? sourceState.current : src;

  const handleImageError = () => {
    if (currentSrc && (currentSrc.indexOf('r2.dev') !== -1 || currentSrc.indexOf('images.torontodispensaryhub.com') !== -1)) {
      const filename = currentSrc.split('/').pop();
      setSourceState({
        requested: src,
        current: `https://athena-cannabis-images.vercel.app/products/${filename}`,
      });
    }
  };

  function handleMouseMove(e: React.MouseEvent) {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  }

  function handleMouseEnter() {
    if (imgRef.current) {
      setImageSize({
        width: imgRef.current.offsetWidth || 400,
        height: imgRef.current.offsetHeight || 400,
      });
    }
    setShow(true);
  }

  function handleMouseLeave() {
    setShow(false);
  }

  // Background position for the zoomed lens
  const bgX = pos.x * ZOOM - LENS_SIZE / 2;
  const bgY = pos.y * ZOOM - LENS_SIZE / 2;

  return (
    <div
      className={styles.magnifierWrap}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={currentSrc}
        onError={handleImageError}
        alt={alt}
        className={className}
      />

      {/* Lens overlay */}
      {show && (
        <div
          className={styles.lens}
          style={{
            width: LENS_SIZE,
            height: LENS_SIZE,
            left: pos.x - LENS_SIZE / 2,
            top: pos.y - LENS_SIZE / 2,
            backgroundImage: `url(${currentSrc})`,
            backgroundSize: `${imageSize.width * ZOOM}px ${imageSize.height * ZOOM}px`,
            backgroundPosition: `-${bgX}px -${bgY}px`,
          }}
        />
      )}

      {/* Hint icon (hidden on hover) */}
      <span className={`${styles.hint} ${show ? styles.hintHidden : ""}`}>
        🔍
      </span>
    </div>
  );
}
