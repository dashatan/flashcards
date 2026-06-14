import { useMemo, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

import { contentKeys } from "@/lib/api";
import {
  getConceptStatusFromStore,
  progressStore,
} from "@/store/progressStore";
import { pushNav, setReturnContext, navigationStore } from "@/store/navigationStore";
import type { StudyReturnContext } from "@/types/content";

function conceptUrlTransform(url: string): string {
  if (url.startsWith("concept:")) return url;
  return defaultUrlTransform(url);
}

interface MarkdownContentProps {
  content: string;
  variant?: "question" | "answer" | "concept";
  onConceptHover?: (conceptId: string) => void;
}

function prepareConceptNavigation(conceptId: string, label: string) {
  const returnContext = navigationStore.state.returnContext;
  if (!returnContext) {
    const studyContext: StudyReturnContext = {
      cardId: 0,
      isFlipped: navigationStore.state.isFlipped,
      search: {
        part: "",
        section: "",
        shuffle: false,
        reviewOnly: false,
        status: "all",
        unreadConcepts: false,
        cardId: undefined,
      },
    };
    setReturnContext(studyContext);
  }
  pushNav({
    type: "concept",
    conceptId,
    label,
  });
}

function ConceptLink({
  conceptId,
  children,
  navLabel,
  unread,
  onHover,
}: {
  conceptId: string;
  children: ReactNode;
  navLabel: string;
  unread: boolean;
  onHover?: () => void;
}) {
  const navigate = useNavigate();

  return (
    <a
      href={`/concepts/${conceptId}`}
      data-concept-link=""
      className={`concept-link${unread ? " has-unread" : ""}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        prepareConceptNavigation(conceptId, navLabel);
        navigate({ to: "/concepts/$conceptId", params: { conceptId } });
      }}
    >
      {children}
    </a>
  );
}

export function MarkdownContent({
  content,
  variant = "question",
  onConceptHover,
}: MarkdownContentProps) {
  const conceptProgress = useStore(progressStore, (s) => s.concepts);
  const { data: conceptManifest } = useQuery({
    queryKey: contentKeys.conceptsIndex,
    queryFn: () => import("@/lib/api").then((m) => m.fetchConceptManifest()),
    staleTime: Infinity,
  });

  const conceptTitles = useMemo(() => {
    const map = new Map<string, string>();
    if (conceptManifest) {
      for (const c of conceptManifest.concepts) {
        map.set(c.id, c.title);
      }
    }
    return map;
  }, [conceptManifest]);

  const className =
    variant === "question"
      ? "text-lg leading-relaxed"
      : variant === "answer"
        ? "text-base leading-relaxed"
        : "text-base leading-relaxed markdown-content";

  const variantClass =
    variant === "answer"
      ? "markdown-content--answer"
      : variant === "question"
        ? "markdown-content--question"
        : "";

  return (
    <div className={`markdown-content ${variantClass} ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={conceptUrlTransform}
        components={{
          a: ({ href, children }) => {
            const conceptId = href?.startsWith("concept:")
              ? href.slice("concept:".length)
              : null;

            if (conceptId) {
              const status = conceptProgress[conceptId] ?? "unread";
              const unread = status === "unread";

              return (
                <ConceptLink
                  conceptId={conceptId}
                  navLabel={conceptTitles.get(conceptId) ?? conceptId}
                  unread={unread}
                  onHover={() => onConceptHover?.(conceptId)}
                >
                  {children}
                </ConceptLink>
              );
            }

            if (!href) {
              return <span>{children}</span>;
            }

            return (
              <a href={href} rel="noopener noreferrer" className="external-link">
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export function ConceptLinkButton({
  conceptId,
  label,
  onHover,
}: {
  conceptId: string;
  label: string;
  onHover?: () => void;
}) {
  const status = getConceptStatusFromStore(conceptId);
  const unread = status === "unread";

  return (
    <ConceptLink
      conceptId={conceptId}
      navLabel={label}
      unread={unread}
      onHover={onHover}
    >
      {label}
    </ConceptLink>
  );
}
