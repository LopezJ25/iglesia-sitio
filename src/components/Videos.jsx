import { useState } from 'react';
import { Play } from 'lucide-react';
import { videos } from '../data/content.js';

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="rounded-2xl overflow-hidden bg-brown">
      <div className="aspect-video relative">
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="w-full h-full relative group"
            aria-label={`Reproducir: ${video.title}`}
          >
            <img src={thumbnail} alt={video.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cream/20 group-hover:scale-110 transition-transform">
                <Play size={22} color="#FBF3E7" fill="#FBF3E7" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold">{video.tag}</span>
        <h3 className="font-subheading italic text-base font-semibold mt-1 text-cream">{video.title}</h3>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-semibold mb-4 text-rust font-accent">Míranos y escúchanos</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-brown">Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
