import React from "react";

// 處理描述中的連結（使用特殊標記 [購票] 或 [tickets]）
export const renderDescriptionWithLinks = (
  text: string,
  ticketLink?: string
): React.ReactNode => {
  if (!ticketLink) {
    return text;
  }
  // 使用 split 但保留分隔符
  const parts = text.split(/(\[(?:購票|tickets|購票連結|ticket link)\])/gi);

  return (
    <>
      {parts.map((part, partIdx) => {
        // 檢查是否為標記（不區分大小寫）
        const isTicketMark = /\[(購票|tickets|購票連結|ticket link)\]/i.test(
          part
        );
        if (isTicketMark) {
          // 根據標記內容決定顯示文字
          const linkText = part.toLowerCase().includes("ticket")
            ? "Purchase tickets online"
            : "線上購票";
          return (
            <a
              key={partIdx}
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              {linkText}
            </a>
          );
        }
        return <span key={partIdx}>{part}</span>;
      })}
    </>
  );
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

