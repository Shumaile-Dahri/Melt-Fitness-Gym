/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X,
  Instagram,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-black text-black text-xl italic">
            M
          </div>
          <span className="font-display font-black text-2xl tracking-tighter italic uppercase">MELT <span className="text-brand-orange">FITNESS</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Results', 'Trainers', 'Pricing', 'Experience'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-brand-orange transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-white text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-brand-orange hover:text-white transition-all">
            Join The Elite
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-nav p-6 flex flex-col gap-6 md:hidden"
          >
            {['Results', 'Trainers', 'Pricing', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display font-medium border-b border-white/10 pb-2"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full shadow-none">Join Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105 opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/preview/720p/coverr-a-man-doing-a-workout-in-a-gym-2641.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-luxury-black/40 cinematic-gradient" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-brand-orange"></div>
            <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs">Elite Training Only</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-[84px] leading-[0.9] tracking-tighter uppercase mb-6 italic">
            Transform Your Body.<br />
            <span className="text-gradient">Command Your Life.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Experience the most supportive, high-energy transformation hub in the city. Led by Neel, Arun, and Shanu. Results are not an option—they are a requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Transformation
            </button>
            <a 
              href="https://www.google.com/maps/place/Melt+Fitness+Gym/@25.1497871,55.4020038,3a,75y,90t/data=!3m8!1e5!3m6!1sCIHM0ogKEICAgIDvsfChEw!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGwQiPQoTGFakp72-aQ8i10u9G6e2FR9qzTzU1YQOEX3aN0WSWb-n2ZJFWafbLkQxl8I5KTGmdLbfdW2vV_gYpm_Keg6QTNBHYoTkZZfgs_bpU4NN4Ug4jTsHWMAodbjdEKOH9s%3Dw203-h360-k-no!7i1080!8i1920!4m13!1m2!2m1!1sgym!3m9!1s0x3e5f637ca550f23b:0x8b7ffcc6a9558e91!8m2!3d25.1497888!4d55.4019996!10e5!14m1!1BCgIgARICCAQ!15sCgNneW2SAQNneW3gAQA!16s%2Fg%2F11rv5n78tb?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D#" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Watch Video Tour <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end border-t border-white/10 pt-8">
          {[
            { label: 'Elite Coaches', value: '12+' },
            { label: 'Modern Equipment', value: '80+' },
            { label: 'Happy Members', value: '1.2K+' }
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <p className="text-3xl font-display font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const reviews = [
    { name: "Rahul S.", text: "The atmosphere here is electric. Trainers like Neel and Arun truly care about your progress, not just your membership fee.", stars: 5 },
    { name: "Priya K.", text: "Hygienic, premium equipment, and a vibe that makes you want to push harder. Shanu is an incredible coach.", stars: 5 },
    { name: "Vikram m.", text: "I've seen real results in 3 months. The support you get even without PT is unheard of in most gyms.", stars: 5 },
  ];

  return (
    <section id="results" className="py-24 bg-luxury-black overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display font-black italic text-4xl md:text-5xl mb-4 leading-tight uppercase tracking-tighter">
              PROVEN BY <span className="text-brand-orange">STRENGTH.</span>
            </h2>
            <p className="text-neutral-500 text-lg">Don't take our word for it. Hear it from our elite community.</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="fill-brand-orange text-brand-orange w-5 h-5" />)}
            <span className="ml-2 font-black text-xl italic tracking-tighter">4.9/5 RATING</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-luxury relative group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-neutral-300 italic mb-6 leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-4 bg-brand-orange"></div>
                <p className="font-black text-[10px] uppercase tracking-[0.2em]">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      title: "Elite Membership",
      desc: "Full access to our premium facilities, including recovery zones and group classes.",
      icon: <CheckCircle2 className="w-8 h-8 text-brand-orange" />,
      benefits: ["24/7 Access", "Recovery Zone", "Modern Equipment"]
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching with expert trainers like Neel, Arun, and Shanu.",
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      benefits: ["Custom Meal Plans", "Bi-Weekly Progress Scans", "Lifestyle Management"]
    },
    {
      title: "Transformation Prep",
      desc: "Intensive 12-week program designed for maximum fat loss and muscle gain.",
      icon: <Trophy className="w-8 h-8 text-brand-orange" />,
      benefits: ["High Intensity", "Daily Accountability", "Guaranteed Results"]
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-luxury-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-luxury-black to-transparent" />
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">SERVICES BUILT FOR <span className="text-brand-orange">POWER.</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Luxury isn't just about the equipment. It's about the precision of the guidance you receive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-luxury-grey border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 mb-8 text-sm line-height-loose">{item.desc}</p>
                <ul className="space-y-3 mb-10">
                  {item.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium">
                      <ChevronRight className="w-4 h-4 text-brand-orange" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-4 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all font-bold text-sm uppercase tracking-widest">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ResultsSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);
  const results = [
    { label: "Fat Loss", value: "-12kg", time: "12 Weeks", desc: "Body recomposition focusing on lean muscle retention." },
    { label: "Strength", value: "+40kg", time: "8 Weeks", desc: "Deadlift progression using our elite strength protocols." },
    { label: "Confidence", value: "100%", time: "Ongoing", desc: "The mental shift from being a spectator to a competitor." }
  ];

  return (
    <div className="mt-16 p-1 bg-white/5 rounded-3xl">
      <div className="grid grid-cols-3 gap-1">
        {results.map((res, i) => (
          <button 
            key={i}
            onClick={() => setActiveTab(i)}
            className={`py-4 px-2 rounded-2xl transition-all duration-300 ${activeTab === i ? 'bg-brand-orange text-white' : 'hover:bg-white/5 text-white/40'}`}
          >
            <p className="text-[10px] uppercase font-bold tracking-widest mb-1">{res.label}</p>
            <p className="text-xl font-display font-black leading-none">{res.value}</p>
          </button>
        ))}
      </div>
      <div className="p-8">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center gap-8"
        >
          <div>
            <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">Duration: {results[activeTab].time}</p>
            <p className="text-white font-medium leading-relaxed">{results[activeTab].desc}</p>
          </div>
          <Trophy className="w-12 h-12 text-white/10 flex-shrink-0" />
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-luxury-black py-24">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-[1.1]">
              A LIFE UPGRADE,<br />
              <span className="text-brand-orange italic">NOT JUST A PLACE.</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Elite Coaching Professionals", desc: "Our trainers are certified experts who provide personal attention, ensuring you never feel ignored or lost." },
                { title: "Uncompromising Hygiene", desc: "A clean, well-maintained environment is non-negotiable at Melt. We pride ourselves on luxury standards." },
                { title: "Cutting Edge Arsenal", desc: "Top-tier, high-quality modern equipment curated for maximal mechanical tension and muscle isolation." }
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,87,34,0.8)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{point.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <ResultsSpotlight />
            
            <button className="btn-primary mt-12 flex items-center gap-2">Experience The Shift <ChevronRight className="w-5 h-5" /></button>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070" 
                alt="Gym Vibe" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 md:w-64 w-48 bg-brand-orange p-6 rounded-2xl shadow-2xl">
              <p className="text-white text-4xl font-display font-black mb-1 leading-none">100%</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-tight">Focus on Your Results. No Exceptions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-luxury-charcoal flex items-center justify-center relative overflow-hidden">
      <div className="glow-red absolute top-[-20%] right-[-20%] opacity-10" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="font-display font-black text-5xl md:text-[84px] leading-[0.9] italic mb-6 uppercase tracking-tighter">PREMIUM VALUE.<br />ELITE PRICING.</h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
          We believe luxury should be accessible to those willing to put in the work. 
          High-end training without the inflated price tags.
        </p>
        
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-sm p-1 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#FF5F1F]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left">
              <span className="text-brand-orange text-[10px] font-black tracking-[0.3em] uppercase">Limited Slots Available</span>
              <h3 className="text-4xl font-display font-black italic uppercase tracking-tighter mt-2">Executive Access</h3>
              <ul className="mt-6 space-y-3">
                {['Unlimited Access', 'Free Evaluation', 'Elite Recovery'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase line-through mb-1">Luxury Competitor: $299/mo</span>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-display font-black italic text-brand-orange tracking-tighter">$119</span>
                <span className="text-neutral-400 font-black italic tracking-tighter">/MO</span>
              </div>
              <button className="btn-primary mt-8 px-12 w-full">Secure Your Spot</button>
            </div>
          </div>
        </div>
        <p className="mt-12 text-neutral-600 text-[10px] font-black tracking-[0.3em] uppercase">No long-term contracts. Just pure commitment to excellence.</p>
      </motion.div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-luxury-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 1 }}
          whileInView={{ x: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute -top-10 left-0 text-[10rem] font-display font-black text-white/5 whitespace-nowrap select-none"
        >
          STEP INTO THE ELITE &bull; TRANSFORM NOW &bull; HIGHER STANDARDS &bull;
        </motion.div>
        
        <div className="relative z-10 text-center py-20">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">THIS IS WHERE YOUR<br /><span className="text-brand-orange italic underline-offset-8">OLD SELF ENDS.</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary px-16 text-lg">Join Melt Today</button>
            <button className="btn-outline px-16 text-lg">Talk to a Pro</button>
          </div>
          <div className="mt-12 flex justify-center items-center gap-6 text-white/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-widest">Premium Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-widest">Expert Support</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-black pt-12 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <Dumbbell className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">MELT<span className="text-brand-orange">FITNESS</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Melt is more than a gym. It's a commitment to elite performance and the highest standards of physical transformation.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/meltfitnessgym/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#results" className="hover:text-brand-orange transition-colors">Results</a></li>
              <li><a href="#trainers" className="hover:text-brand-orange transition-colors">Elite Trainers</a></li>
              <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a></li>
              <li><a href="#experience" className="hover:text-brand-orange transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Hours</h4>
             <ul className="space-y-4 text-sm text-white/40">
                <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">5AM - 11PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-white">7AM - 9PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-white">8AM - 8PM</span></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Find Us</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" /> 
                <a href="https://www.google.com/maps/place/Melt+Fitness+Gym/@25.1497888,55.2495643,26816m/data=!3m1!1e3!4m10!1m2!2m1!1sgym!3m6!1s0x3e5f637ca550f23b:0x8b7ffcc6a9558e91!8m2!3d25.1497888!4d55.4019996!15sCgNneW2SAQNneW3gAQA!16s%2Fg%2F11rv5n78tb?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-white transition-colors">
                  Warsan Fourth - International City Phase(2) - Dubai - UAE
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" /> 
                <a href="tel:+971586321990" className="hover:text-white transition-colors">+971 58 632 1990</a>
              </li>
              <li className="flex gap-3"><Clock className="w-5 h-5 text-brand-orange flex-shrink-0" /> 24/7 Virtual Support</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">
          <p>&copy; 2026 MELT FITNESS GYM.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans relative">
      {/* Background Decorative Glows */}
      <div className="glow-orange top-[-10%] right-[-10%] hidden md:block" />
      <div className="glow-red bottom-[0%] left-[-10%] hidden md:block opacity-5" />
      <div className="glow-orange top-[40%] left-[-20%] scale-75 opacity-5" />
      
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Experience />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
