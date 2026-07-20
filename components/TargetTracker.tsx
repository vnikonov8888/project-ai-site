"use client";

import { useEffect } from "react";
import {
  isTargetVisitor,
  getSessionId,
  postTrackEvent,
  firePixelEvent,
  markVisitSent,
  wasVisitSent,
} from "@/lib/target-tracking";

export default function TargetTracker() {
  useEffect(() => {
    if (!isTargetVisitor()) return;
    if (wasVisitSent()) return;
    markVisitSent();
    const sid = getSessionId();
    postTrackEvent("target_site_visit", sid);
    firePixelEvent("TargetSiteVisit");
  }, []);

  return null;
}
