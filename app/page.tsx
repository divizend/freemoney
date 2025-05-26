"use client";

export default function Home() {
  const handleRegisterInterest = () => {
    const subject = encodeURIComponent(
      "Divizend Referral Program - Interest Registration"
    );
    const body = encodeURIComponent(`Hello,

[Please describe your background and why you're interested in our referral program]

Best regards,
[Your name]

---
Note: All candidates will be evaluated for precision and attention to detail.`);

    window.location.href = `mailto:referrals@divizend.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-6xl sm:text-8xl font-black text-white mb-4 drop-shadow-2xl animate-pulse">
            💰 FREE MONEY 💰
          </h1>
          <div className="bg-yellow-300 text-black px-6 py-3 rounded-full inline-block text-xl sm:text-2xl font-bold shadow-lg transform rotate-2">
            🚀 UNLIMITED EARNING POTENTIAL 🚀
          </div>
          <p className="text-white text-xl sm:text-2xl mt-6 font-semibold drop-shadow-lg">
            Join Divizend's Exclusive Referral Program
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-4xl font-black text-center mb-8 text-gray-800">
            🎯 HOW IT WORKS
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                icon: "📝",
                title: "Register at Divizend",
                description: "Create your account and get verified",
              },
              {
                step: "2",
                icon: "✍️",
                title: "Sign Your Referral Contract",
                description: "Lock in your commission structure",
              },
              {
                step: "3",
                icon: "🎯",
                title: "Find People with Stock Portfolios",
                description: "Target investors ready to grow their wealth",
              },
              {
                step: "4",
                icon: "🔗",
                title: "Share Your Referral Link",
                description: "Get them registered through your unique link",
              },
              {
                step: "5",
                icon: "💸",
                title: "Earn Cash Forever",
                description:
                  "Help them make money while you earn recurring commissions",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-black text-white rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-black text-center mb-6">
            ⚡ EXPLOSIVE BENEFITS ⚡
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black p-4 rounded-xl">
              <div className="text-2xl font-black">RECURRING INCOME</div>
              <div className="text-sm">Earn from every trade</div>
            </div>
            <div className="bg-gradient-to-b from-green-400 to-emerald-500 text-black p-4 rounded-xl">
              <div className="text-2xl font-black">NO LIMITS</div>
              <div className="text-sm">Unlimited referrals</div>
            </div>
            <div className="bg-gradient-to-b from-purple-400 to-pink-500 text-black p-4 rounded-xl">
              <div className="text-2xl font-black">PASSIVE WEALTH</div>
              <div className="text-sm">
                Money while you sleep, in fiat or crypto
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={handleRegisterInterest}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-2xl sm:text-3xl font-black px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
          >
            🔥 REGISTER YOUR INTEREST NOW! 🔥
          </button>

          <p className="text-white text-lg mt-4 font-semibold">
            Limited spots available - Act fast!
          </p>

          <p className="text-white/80 text-sm mt-6 italic">
            * All candidates will be evaluated for precision and attention to
            detail
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-white/60 text-sm">
          <p className="mb-2">
            Divizend Referral Program •
            <a
              href="/toc"
              className="text-white/80 hover:text-white underline underline-offset-2 ml-1"
            >
              Terms and conditions apply
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
