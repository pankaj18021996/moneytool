"use client";
import { useEffect } from "react";

declare global {
  interface Window { adsbygoogle: any[]; }
}

export default function AdSenseUnit() {
  useEffect(() => {
    const pushAd = () => {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        // Ignore ad injection errors so the page remains usable.
      }
    };

    const timer = window.setTimeout(pushAd, 400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div style={{ margin: "32px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3150789625391215"
        data-ad-slot="1393534376"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
