export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative bg-white/10 py-20 lg:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-4">
              ✨ নতুন সংস্করণ v4.0 এখন লাইভ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-none">
              আপনার আইডিয়াকে রূপ দিন{" "}
              <span className="text-blue-600">সহজ কোডিংয়ে</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              টেইলউইন্ড সিএসএস এবং রিয়্যাক্ট এর মাধ্যমে খুব দ্রুত এবং আকর্ষণীয়
              ইউজার ইন্টারফেস তৈরি করুন। কম্পোনেন্ট-বেসড আর্কিটেকচারে কোড লিখুন
              আরও সহজে।
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#trial"
                className="bg-gray-950 text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                ফ্রি ট্রায়াল শুরু করুন
              </a>
              <a
                href="#docs"
                className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
              >
                ডকুমেন্টেশন দেখুন
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-tr from-blue-600 to-indigo-700 aspect-square rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500 flex items-center justify-center p-8 text-white">
              <div className="space-y-4 w-full">
                <div className="h-4 w-1/3 bg-white/20 rounded"></div>
                <div className="h-8 w-3/4 bg-white/30 rounded"></div>
                <div className="h-4 w-full bg-white/20 rounded"></div>
                <div className="h-4 w-5/6 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
