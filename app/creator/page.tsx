"use client";
import React, { useState } from "react";

interface Ad {
  id: number;
  title: string;
  description: string;
}

const ads: Ad[] = [
  { id: 1, title: "Ad 1", description: "Description for Ad 1" },
  { id: 2, title: "Ad 2", description: "Description for Ad 2" },
  { id: 3, title: "Ad 3", description: "Description for Ad 3" },
];

const Creator: React.FC = () => {
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);

  const handleAdClick = (ad: Ad) => {
    setSelectedAd(ad);
  };

  return (
    <div>
      <h1>Ad Panel</h1>
      <div>
        {ads.map((ad) => (
          <div key={ad.id} onClick={() => handleAdClick(ad)}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
      {selectedAd && (
        <div>
          <h2>Selected Ad</h2>
          <h3>{selectedAd.title}</h3>
          <p>{selectedAd.description}</p>
        </div>
      )}
    </div>
  );
};

export default Creator;
