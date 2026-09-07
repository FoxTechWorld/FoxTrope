import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("comments", (shortname, url, identifier, title) => ({
  loaded: false,
  load() {
    if (this.loaded) return;

    window.disqus_config = function disqusConfig() {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    const script = document.createElement("script");
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.dataset.timestamp = String(Date.now());
    script.async = true;
    document.head.appendChild(script);
    this.loaded = true;
  },
}));

Alpine.start();
