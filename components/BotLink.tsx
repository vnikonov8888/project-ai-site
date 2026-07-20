"use client";

import { useState, useEffect } from "react";
import { TELEGRAM_LESSON_BOT_URL } from "@/lib/config";
import {
  isTargetVisitor,
  getSessionId,
  postTrackEvent,
  firePixelEvent,
  markClickSent,
  wasClickSent,
  TARGET_BOT_URL,
} from "@/lib/target-tracking";

export default function BotLink() {
  // Start with the default URL so SSR and initial hydration match.
  // useEffect switches to the target deep-link when applicable.
  const [href, setHref] = useState(TELEGRAM_LESSON_BOT_URL);
  const [isTarget, setIsTarget] = useState(false);

  useEffect(() => {
    if (isTargetVisitor()) {
      setHref(TARGET_BOT_URL);
      setIsTarget(true);
    }
  }, []);

  function handleClick() {
    if (!isTarget) return;
    if (wasClickSent()) return;
    markClickSent();
    const sid = getSessionId();
    postTrackEvent("target_bot_click", sid);
    firePixelEvent("TargetBotClick");
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      onClick={handleClick}
    >
      Забрать бесплатный урок
    </a>
  );
}
