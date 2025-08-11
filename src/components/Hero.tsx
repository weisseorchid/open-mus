import { CTAButton } from '@/components/ui/ctabutton';
import { Stack } from '@/components/ui/stack';

const Hero = () => {
  // TODO: Add video loading
    // const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // useEffect(() => {
    // Simulate video loading - in production, you'd use actual video
  //   const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat responsive-bg"
          style={{ 
            backgroundImage: 'url("/images/202508_old_men_playing.png")',
            filter: 'brightness(0.4) contrast(1.2) saturate(0.9)',
          }}
        />
      </div>

      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/20 z-10" />

      {/* Navigation */}
      <nav className="relative z-30 y-10 flex items-center justify-between px-8 py-12 md:px-12 lg:px-16 xl:px-20 mx-[10%] mt-[5vh]">
        {/* Logo */}
        <div className="text-white font-light tracking-wider adaptive-logo">
          Open Mus ®
        </div>

        {/* CTA Button */}
        <CTAButton />
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center min-h-[90vh] mx-[10%]">
        <Stack as="div" direction="col" space="xl">
          <p className="max-w-md lg:max-w-xl text-white/70 font-light leading-relaxed adaptive-description animate-fade-in-up delay-100">
            ¿Preparado para echar un órdago?
          </p>
          <h1 className="adaptive-heading font-light">
            <span className="block text-white/80 font-bold animate-fade-in-up">
              Para ganar a lo grande...
            </span>
            <span className="block text-white/80 font-bold animate-fade-in-up">
              Tienes que estar dispuesto a jugártelo todo
            </span>
          </h1>
          <p className="max-w-md lg:max-w-xl text-white/70 font-light leading-relaxed adaptive-description animate-fade-in-up">
            Una nueva manera de vivir el mus. Desde cualquier parte. Para todos.
          </p>
        </Stack>
      </div>

      {/* Enhanced Ambient Effects */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900/20 via-amber-900/5 to-transparent z-15" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900/30 to-transparent z-15" />
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-900/40 z-15" />
    </section>
  );
};

export default Hero;