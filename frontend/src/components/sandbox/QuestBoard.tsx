
// src/components/sandbox/QuestBoard.tsx
import BlogCard from "./BlogCard";
import { Article } from '@/types/strapi';

interface QuestBoardProps {
  articles: Article[];
  strapiUrl: string;
}

function pick<T>(arr: T[], index: number): T {
  return arr[index % arr.length];
}

export default function QuestBoard({ articles = [], strapiUrl }: QuestBoardProps) {
  if (articles.length === 0) return null;

  const pairs: Article[][] = [];
  for (let i = 0; i < articles.length; i += 2) {
    pairs.push(articles.slice(i, i + 2));
  }

  // 🎯 Proporțiile matematice exacte pentru col-span-7 (58.333%) și col-span-5 (41.666%)
  const splits  = [58.333, 41.666]; 
  const offsets = [96, 144, 64, 176, 112, 80];
  const rowGaps = [80, 112, 64, 96, 128, 80];
  const hGaps   = [40, 64, 32, 80, 48, 56];
  const rotations = [0, -1, 1, 0, 0.5, -0.5];

  return (
    <section className="mt-16 flex flex-col w-full">
      <style>{`
        @media (max-width: 767px) {
          .qb-row {
            flex-direction: column !important;
            gap: 24px !important;
            margin-bottom: 24px !important;
          }
          .qb-card {
            width: 100% !important;
            margin-top: 0 !important;
            transform: none !important;
          }
        }
      `}</style>

      {pairs.map((pair, rowIndex) => {
        const isEvenRow  = rowIndex % 2 === 0;
        const leftPct    = pick(splits, rowIndex);
        const rightPct   = 100 - leftPct;
        const offset     = pick(offsets, rowIndex);
        const rowGap     = pick(rowGaps, rowIndex);
        const hGap       = pick(hGaps, rowIndex);
        const rotLeft    = pick(rotations, rowIndex);
        const rotRight   = pick(rotations, rowIndex + 2);

        return (
          <div
            key={rowIndex}
            className="qb-row flex"
            style={{ marginBottom: rowGap, gap: hGap }}
          >
            {pair.map((a, colIndex) => {
              const isLeft    = colIndex === 0;
              const isBig     = isEvenRow ? isLeft : !isLeft;
              const hasOffset = isEvenRow ? !isLeft : isLeft;
              const widthPct  = isBig
                ? Math.max(leftPct, rightPct)
                : Math.min(leftPct, rightPct);
              const rotate    = isLeft ? rotLeft : rotRight;

              return (
                <div
                  key={a.documentId || a.id}
                  className="qb-card"
                  style={{
                    width: `${widthPct}%`,
                    marginTop: hasOffset ? offset : 0,
                    transform: `rotate(${rotate}deg)`,
                    flexShrink: 0,
                  }}
                >
                  <BlogCard article={a} strapiUrl={strapiUrl} />
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

