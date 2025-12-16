import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 bg-background text-foreground font-sans">
      <main className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto w-full">

        {/* Main Title Section */}
        <div className="space-y-8 animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            <Image
              src="/milred-cloud.png"
              alt="Milred Cloud"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground tracking-[0.2em] uppercase">
            Coming Soon
          </p>
        </div>

        <Separator className="w-24 my-8 bg-primary/20" />

        {/* Partnership Section */}
        <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 delay-200">
          <p className="text-lg text-muted-foreground font-medium">
            Provided in partnership with
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8 w-full">
            {/* Luxxy Cloud */}
            <Link href="https://luxxy.cloud" target="_blank" className="group transition-all hover:scale-105 duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-48 h-48 bg-card/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/5 shadow-2xl shadow-blue-900/10 group-hover:shadow-blue-500/20 group-hover:border-blue-500/20 transition-all p-8">
                  <Image
                    src="/luxxycloud.png"
                    alt="Luxxy Cloud"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                </div>
                <span className="font-semibold text-xl group-hover:text-blue-400 transition-colors tracking-wide">Luxxy Cloud</span>
              </div>
            </Link>

            {/* LC Servers */}
            <Link href="https://lcservers.com" target="_blank" className="group transition-all hover:scale-105 duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-48 h-48 bg-card/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/5 shadow-2xl shadow-green-900/10 group-hover:shadow-green-500/20 group-hover:border-green-500/20 transition-all p-8">
                  <Image
                    src="/lc-servers.png"
                    alt="LC Servers"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                </div>
                <span className="font-semibold text-xl group-hover:text-green-400 transition-colors tracking-wide">LC Servers</span>
              </div>
            </Link>
          </div>
        </div>

      </main>

      <footer className="mt-auto py-8 text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()} Milred.cloud. All rights reserved.
      </footer>
    </div>
  );
}
