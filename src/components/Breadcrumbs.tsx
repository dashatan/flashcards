import { useStore } from "@tanstack/react-store";
import { useNavigate } from "@tanstack/react-router";

import { buildStudyNavigateTarget, mergeStudyLocation } from "@/lib/studyPath";
import { navigationStore, popNavTo } from "@/store/navigationStore";

export function Breadcrumbs() {
  const stack = useStore(navigationStore, (s) => s.stack);
  const navigate = useNavigate();

  if (stack.length === 0) {
    return (
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <span>Study</span>
      </nav>
    );
  }

  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm text-muted" aria-label="Breadcrumb">
      {stack.map((entry, index) => {
        const isLast = index === stack.length - 1;

        return (
          <span key={`${entry.type}-${index}`} className="flex items-center gap-1">
            {index > 0 && <span className="text-border">·</span>}
            {isLast ? (
              <span className="font-medium text-foreground">{entry.label}</span>
            ) : (
              <button
                type="button"
                className="hover:text-accent hover:underline"
                onClick={() => {
                  popNavTo(index);
                  if (entry.type === "study") {
                    const returnContext = navigationStore.state.returnContext;
                    navigate(
                      buildStudyNavigateTarget(
                        mergeStudyLocation(returnContext?.location ?? { part: "", section: "", cardId: undefined }, {
                          cardId: entry.cardId,
                        }),
                      ),
                    );
                  } else if (entry.type === "concept") {
                    navigate({
                      to: "/concepts/$conceptId",
                      params: { conceptId: entry.conceptId },
                    });
                  } else if (entry.type === "browse") {
                    navigate({ to: "/browse" });
                  } else {
                    navigate({ to: "/concepts" });
                  }
                }}
              >
                {entry.label}
              </button>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function ReturnToCardChip() {
  const returnContext = useStore(navigationStore, (s) => s.returnContext);
  const navigate = useNavigate();

  if (!returnContext || returnContext.cardId === 0) return null;

  return (
    <button
      type="button"
      className="rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent hover:bg-accent/10"
      onClick={() => {
        navigate(
          buildStudyNavigateTarget(
            mergeStudyLocation(returnContext.location, {
              cardId: returnContext.cardId,
            }),
          ),
        );
        navigationStore.setState((s) => ({
          ...s,
          isFlipped: returnContext.isFlipped,
        }));
      }}
    >
      ← Back to card #{returnContext.cardId}
    </button>
  );
}
