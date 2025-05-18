
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPreviewProps {
  videoUrl: string;
  thumbnailUrl: string;
  autoPlay?: boolean;
  className?: string;
}

const VideoPreview = ({ videoUrl, thumbnailUrl, autoPlay = false, className = "" }: VideoPreviewProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && autoPlay) {
            videoRef.current?.play();
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [autoPlay]);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${className}`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnailUrl}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-orange ml-1"></div>
          </div>
        </div>
      )}
      
      <Button 
        size="icon" 
        variant="ghost" 
        className="absolute bottom-2 right-2 h-8 w-8 bg-black/40 hover:bg-black/60 text-white rounded-full"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
      
      <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 36V12C0 5.373 5.373 0 12 0h24c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12C5.373 48 0 42.627 0 36z" 
            fill="#fff"
          />
          <path 
            d="M37.5 15.625a9.5 9.5 0 01-3.45.75c1.35-.8 2.25-2.15 2.7-3.7-.85.5-3.4 1.3-4.7 1.3a6.25 6.25 0 00-6.25-6.25c-3.45 0-6.25 2.8-6.25 6.25 0 .5 0 1 .15 1.5-5.2-.25-9.85-2.75-12.9-6.6-.55.95-.85 2-.85 3.3 0 2.2 1.1 4.1 2.8 5.25-1.05 0-2-.3-2.85-.8v.05c0 3.05 2.15 5.6 5 6.15-.5.15-1.05.2-1.65.2-.4 0-.8 0-1.2-.1.8 2.5 3.1 4.3 5.85 4.35-2.15 1.7-4.85 2.7-7.8 2.7-.5 0-1 0-1.5-.1 2.75 1.8 6.05 2.85 9.6 2.85 11.5 0 17.8-9.55 17.8-17.8v-.8c1.25-.9 2.35-2 3.2-3.3z" 
            fill="#000"
          />
        </svg>
        <span>TikTok</span>
      </div>
    </div>
  );
};

export default VideoPreview;
