import React, { useState } from 'react';
import videoInicio from './assets/video_inicio_2.mp4';
import './VideoBackground.css';
      <video
        src={videoInicio}
        className="welcome-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        onCanPlayThrough={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          display: loaded ? 'block' : 'none',
        }}
      />
      {!loaded && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#fff',
          zIndex: 0,
        }} />
      )}
    </>
  );
}
