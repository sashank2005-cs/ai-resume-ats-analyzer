import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Download,
  FileText,
  LoaderCircle,
} from "lucide-react";

import generateATSReport from "../../utils/generateATSReport";

function DownloadReport({ analysis }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    if (!analysis || downloading) return;

    try {
      setDownloading(true);
      setDownloaded(false);

      // Small delay allows the loading state to render
      // before PDF generation starts.
      await new Promise((resolve) =>
        setTimeout(resolve, 150)
      );

      generateATSReport(analysis);

      setDownloaded(true);

      setTimeout(() => {
        setDownloaded(false);
      }, 2500);
    } catch (error) {
      console.error(
        "Failed to generate ATS report:",
        error
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleDownload}
      disabled={!analysis || downloading}
      whileHover={
        !downloading
          ? {
              y: -2,
              scale: 1.015,
            }
          : {}
      }
      whileTap={
        !downloading
          ? {
              scale: 0.97,
            }
          : {}
      }
      className="
        group
        relative
        flex
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-indigo-400/20
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-indigo-600
        px-5
        py-3
        text-sm
        font-bold
        text-white
        shadow-[0_12px_35px_rgba(79,70,229,0.25)]
        transition
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-[130%]
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-[130%]
        "
      />

      {downloading ? (
        <>
          <LoaderCircle
            size={18}
            className="relative z-10 animate-spin"
          />

          <span className="relative z-10">
            Creating Report...
          </span>
        </>
      ) : downloaded ? (
        <>
          <Check
            size={18}
            className="relative z-10"
          />

          <span className="relative z-10">
            Report Downloaded
          </span>
        </>
      ) : (
        <>
          <FileText
            size={18}
            className="relative z-10"
          />

          <span className="relative z-10">
            Download ATS Report
          </span>

          <Download
            size={17}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:translate-y-0.5
            "
          />
        </>
      )}
    </motion.button>
  );
}

export default DownloadReport;