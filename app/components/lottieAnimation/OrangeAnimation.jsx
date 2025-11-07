"use client";
import { useEffect } from "react";

export default function OrangeAnimation() {
  useEffect(() => {
    let anim; // store animation reference

    // if Lottie script already exists, don’t add it again
    if (!window.lottie) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js";
      script.onload = initAnimation;
      document.body.appendChild(script);
    } else {
      initAnimation();
    }

    function initAnimation() {
      const container = document.getElementById("lottie-container");
      if (!container) return;

      // clear any previous animation instance inside container
      container.innerHTML = "";

      anim = window.lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "/orange.json",
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) anim.play();
            else anim.pause();
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(container);
    }

    // cleanup on component unmount or hot reload
    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div
        id="lottie-container"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "900px",
        }}></div>
    </section>
  );
}
