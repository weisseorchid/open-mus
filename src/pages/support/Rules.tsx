import { CTAButton } from '@/components/ui/ctabutton';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';

const Rules: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMarkdown = async (): Promise<void> => {
      try {
        const response = await fetch('/docs/rules-es.md');
        if (!response.ok) {
          throw new Error(`Failed to load rules (status ${response.status})`);
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    void loadMarkdown();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="relative z-30 y-10 flex items-center justify-between px-8 py-12 md:px-12 lg:px-16 xl:px-20 mx-[10%] mt-[5vh]">
        <div 
          className="text-white font-light tracking-wider adaptive-logo"
          onClick={() => navigate('/')}
        >
            Open Mus ®
        </div>
        <CTAButton />
      </nav>

      {/* Content */}
      <div className="mx-[10%] pb-20 pt-20 mt-[5vh]">
        {isLoading && (
          <p className="text-white/70">Cargando reglas...</p>
        )}
        {errorMessage && (
          <p className="text-red-400">{errorMessage}</p>
        )}
        {!isLoading && !errorMessage && (
          <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-p:text-white/90 prose-strong:text-white prose-a:text-white underline-offset-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        )}
      </div>
    </section>
  );
};

export default Rules;
