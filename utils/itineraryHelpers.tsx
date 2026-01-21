import React from "react";

// 處理描述中的連結
// 移除可能存在的舊標記（向後兼容）
export const renderDescriptionWithLinks = (
  text: string
): React.ReactNode => {
  // 移除可能存在的舊標記
  return text.replace(/\[(?:購票|tickets|購票連結|ticket link)\]/gi, "");
};

export const getEmbedUrl = (url: string): string | null => {
  try {
    if (url.includes("/dir/")) {
      const dirPart = url.split("/dir/")[1];
      const cleanDirPart = dirPart.split("?")[0];
      const parts = cleanDirPart.split("/").filter((p) => p.length > 0);
      if (parts.length >= 2) {
        const saddr = parts[0];
        const daddr = parts.slice(1).join("+to:");
        return `https://maps.google.com/maps?saddr=${saddr}&daddr=${daddr}&output=embed`;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
};

