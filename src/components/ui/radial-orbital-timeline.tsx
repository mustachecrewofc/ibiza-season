import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

function Badge({
  children,
  status,
}: {
  children: React.ReactNode;
  status: TimelineItem["status"];
}) {
  const styles =
    status === "completed"
      ? "bg-[#22C55E] text-[#060A06] border-[#22C55E]"
      : status === "in-progress"
      ? "bg-[#F5C842] text-[#060A06] border-[#F5C842]"
      : "bg-transparent text-[#F0EDE6]/50 border-[#F0EDE6]/20";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[1.5px] ${styles}`}
    >
      {children}
    </span>
  );
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulse[relId] = true;
        });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const statusLabel = (status: TimelineItem["status"]) =>
    status === "completed" ? "Done" : status === "in-progress" ? "Active" : "Next";

  return (
    <div
      className="w-full h-[620px] md:h-[680px] flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center node */}
          <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10"
            style={{ background: 'radial-gradient(circle, #F5C842 0%, #22C55E 60%, #166534 100%)' }}
          >
            <div className="absolute w-[72px] h-[72px] rounded-full border border-[#22C55E]/25 animate-ping opacity-60" />
            <div className="absolute w-[88px] h-[88px] rounded-full border border-[#22C55E]/12 animate-ping opacity-40" style={{ animationDelay: "0.6s" }} />
            <div className="w-7 h-7 rounded-full bg-[#060A06]/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#22C55E]/12" />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Glow halo */}
                <div
                  className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0) 70%)`,
                    width: `${item.energy * 0.4 + 48}px`,
                    height: `${item.energy * 0.4 + 48}px`,
                    left: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isExpanded
                      ? "bg-[#22C55E] border-[#22C55E] scale-150 shadow-lg"
                      : isRelated
                      ? "bg-[#22C55E]/25 border-[#22C55E] animate-pulse"
                      : "bg-[#060A06] border-[#F0EDE6]/30"
                  }`}
                  style={isExpanded ? { boxShadow: '0 0 20px rgba(34,197,94,0.4)' } : {}}
                >
                  <Icon size={15} color={isExpanded ? "#060A06" : isRelated ? "#22C55E" : "#F0EDE6"} />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase tracking-[1.5px] transition-all duration-300 ${
                    isExpanded ? "text-[#22C55E] scale-110" : "text-[#F0EDE6]/60"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-64 rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(6,10,6,0.96)',
                      border: '1px solid rgba(34,197,94,0.25)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,197,94,0.15)',
                    }}
                  >
                    {/* Connector line */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#22C55E]/40" />

                    <div className="p-4 pb-3 border-b border-[#F0EDE6]/08">
                      <div className="flex justify-between items-center mb-2">
                        <Badge status={item.status}>{statusLabel(item.status)}</Badge>
                        <span className="text-[10px] font-mono text-[#F0EDE6]/35">{item.date}</span>
                      </div>
                      <p className="font-bold text-[#F0EDE6] text-sm leading-snug">{item.title}</p>
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-[#F0EDE6]/65 leading-relaxed">{item.content}</p>

                      {/* Energy bar */}
                      <div className="mt-4 pt-3 border-t border-[#F0EDE6]/08">
                        <div className="flex justify-between items-center text-[10px] mb-1.5">
                          <span className="flex items-center gap-1 text-[#F0EDE6]/45">
                            <Zap size={9} />
                            Energy
                          </span>
                          <span className="font-mono text-[#22C55E]">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-[#F0EDE6]/08 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.energy}%`,
                              background: 'linear-gradient(to right, #22C55E, #F5C842)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Related nodes */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-[#F0EDE6]/08">
                          <div className="flex items-center gap-1 mb-2">
                            <Link size={9} className="text-[#F0EDE6]/40" />
                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#F0EDE6]/40">
                              Connected Steps
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relatedId) => {
                              const related = timelineData.find((i) => i.id === relatedId);
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center gap-1 px-2 py-1 text-[10px] rounded-lg border border-[#22C55E]/20 bg-[#22C55E]/05 text-[#F0EDE6]/70 hover:text-[#22C55E] hover:border-[#22C55E]/40 transition-colors cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {related?.title}
                                  <ArrowRight size={8} />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
