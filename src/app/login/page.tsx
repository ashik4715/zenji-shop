import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-zenji-dark border border-zenji-border rounded-sm p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="font-display text-3xl uppercase tracking-tight text-white">
              ZENJI
            </Link>
          </div>

          {/* Heading */}
          <h1 className="font-display text-2xl uppercase tracking-tight text-center mb-2">
            BEGIN YOUR JOURNEY
          </h1>
          <p className="text-sm text-zenji-gray text-center mb-8">
            Sign in to personalize your experience
          </p>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 bg-zenji-black border border-zenji-border text-white py-3 text-xs font-mono uppercase tracking-widest hover:border-white transition-colors rounded-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.53-3.23 0-1.44.67-2.2.48-3.06-.4C3.79 16.17 4.36 9.02 8.93 8.78c1.28.07 2.17.74 2.91.78.89-.18 1.76-.88 2.76-.8 1.17.1 2.06.61 2.62 1.55-2.37 1.42-1.81 4.56.53 5.49-.64 1.65-1.47 3.28-2.27 4.5zM12.05 8.67c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.55 4.3-3.74 4.25z" />
              </svg>
              CONTINUE WITH APPLE
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-zenji-black border border-zenji-border text-white py-3 text-xs font-mono uppercase tracking-widest hover:border-white transition-colors rounded-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              CONTINUE WITH GOOGLE
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-zenji-border" />
            <span className="text-xs font-mono text-zenji-gray uppercase">or</span>
            <div className="flex-1 h-px bg-zenji-border" />
          </div>

          {/* Email Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-zenji-black border border-zenji-border text-white py-3 text-xs font-mono uppercase tracking-widest hover:border-white transition-colors rounded-sm mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            CONTINUE WITH EMAIL
          </button>

          {/* Guest */}
          <div className="text-center">
            <Link
              href="/"
              className="text-xs font-mono text-zenji-gray uppercase underline hover:text-white transition-colors"
            >
              BROWSE AS GUEST
            </Link>
          </div>

          {/* Terms */}
          <p className="text-[10px] text-zenji-gray text-center mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white transition-colors">
              Terms
            </Link>{" "}
            &{" "}
            <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
