if (window.location.href.includes("/shorts/")) {
    const newUrl = window.location.href.replace("/shorts/", "/watch?v=");
    window.location.href = newUrl;
}
