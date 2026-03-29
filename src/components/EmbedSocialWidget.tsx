import { useEffect } from "react";

const EmbedSocialWidget = () => {
  useEffect(() => {
    if (document.getElementById("EmbedSocialHashtagScript")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="embedsocial-hashtag" data-ref="c9f9de6e323815e0237dc7dd231126ed0cc9eb15" data-dynamicload="yes" data-lazyload="yes">
      <a className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/google-reviews-widget/" target="_blank" title="Embed Google reviews">
        <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
      </a>
    </div>
  );
};

export default EmbedSocialWidget;