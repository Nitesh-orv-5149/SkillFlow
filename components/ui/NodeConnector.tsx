import { useEffect, useState } from "react";

interface AutoConnectorProps {
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  color?: string;
  strokeWidth?: number;
}

export default function NodeConnector({
  fromRef,
  toRef,
  containerRef,
  color = "#22c55e",
  strokeWidth = 4,
}: AutoConnectorProps) {
  const [coords, setCoords] = useState<{ x1: number; y1: number; x2: number; y2: number }>({
    x1: 0, y1: 0, x2: 0, y2: 0,
  });

  const update = () => {
    if (!fromRef.current || !toRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    setCoords({
      x1: fromRect.left + fromRect.width / 2 - containerRect.left,
      y1: fromRect.top + fromRect.height / 2 - containerRect.top,
      x2: toRect.left + toRect.width / 2 - containerRect.left,
      y2: toRect.top + toRect.height / 2 - containerRect.top,
    });
  };

  console.log(coords);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <line
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
