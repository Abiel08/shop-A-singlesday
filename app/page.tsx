"use client";

import { useState, useMemo } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  quantity: number;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedFlash, setAddedFlash] = useState<string | null>(null);

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart]);

  function addToCart(item: { id: string; name: string; price: number; emoji: string }) {
    setCart((prev) => {
      const existing = prev.find((x) => x.id === item.id);
      if (existing) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setAddedFlash(item.id);
    setTimeout(() => setAddedFlash(null), 800);
    setCartOpen(true);
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, quantity: x.quantity + delta } : x))
        .filter((x) => x.quantity > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{background:"#0E0611",color:"#FFF0F5"}}>
      <div className="decor-layer" aria-hidden="true" />
      <div className="extra-decors" aria-hidden="true" dangerouslySetInnerHTML={{__html: `<span style="left:8%;top:0%;animation-delay:0.0s">💖</span><span style="left:22%;top:19%;animation-delay:1.2s">💗</span><span style="left:36%;top:38%;animation-delay:2.4s">💕</span><span style="left:50%;top:57%;animation-delay:3.6s">💘</span><span style="left:64%;top:1%;animation-delay:4.8s">💖</span><span style="left:78%;top:20%;animation-delay:6.0s">💗</span>`}} />

      <div className="relative z-20 text-center text-sm font-semibold py-2.5 px-4" style={{background:`linear-gradient(90deg,#E91E63,#E91E63aa,#E91E63)`,color:"#fff"}}>
        ✨ 11/11 SINGLES’ DAY : Faites-vous plaisir en premier. -55% + Câble de rallonge offert !
        <span className="ml-3 inline-block bg-black/30 px-2 py-0.5 rounded text-xs">Code: SELFCARE11</span>
      </div>

      <header className="sticky top-0 z-30 backdrop-blur-md border-b border-white/10" style={{background:"#1C0D22ee"}}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tight"><span>AuraGlow</span><span className="text-lg">💖</span></div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
            <a href="#catalogue" className="hover:opacity-100">Catalogue</a>
            <a href="#offres" className="hover:opacity-100">Offres</a>
            <a href="#avis" className="hover:opacity-100">Avis</a>
            <a href="#faq" className="hover:opacity-100">FAQ</a>
          </nav>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Panier"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold text-black animate-pulse" style={{background:"#E91E63"}}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="relative z-10 pb-20 md:pb-0">
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 border" style={{background:"#E91E6322",color:"#E91E63",borderColor:"#E91E6355"}}>💖 OFFREZ-VOUS DU BIEN-ÊTRE · 11/11</div>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-70 mb-2">PARCE QUE VOUS MÉRITEZ LE PLUS DOUX DES COCONS</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Offrez-vous un sanctuaire de lumière <span style={{color:"#E91E63"}}>pour vos soirées rien qu’à vous.</span></h1>
            <p className="text-base md:text-lg opacity-80 mb-6 leading-relaxed">Transformez votre chambre ou votre salon en havre de paix tamisé. 300 micro-LEDs soyeuses pour lire, chiller ou méditer dans un halo de douceur rose & or.</p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm"><span>✅ Plaisir garanti</span><span>🛡️ Garantie 2 ans</span><span>🔄 Retours 30j</span></div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#catalogue" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition hover:scale-[1.02]" style={{background:"#E91E63",color:"#fff"}}>Voir le catalogue 💖</a>
              <div className="text-sm opacity-70 flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />🌸 Offre exclusive 11.11 : seulement aujourd’hui avec le...</div>
            </div>
          </div>
          <div className="relative ">
            <div className="aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center text-8xl md:text-9xl relative overflow-hidden" style={{background:`linear-gradient(135deg,#1C0D22,#0E0611)`,boxShadow:`0 0 60px #E91E6333`}}>
              <div className="absolute inset-0 opacity-30" style={{background:`radial-gradient(circle at 30% 30%,#E91E6366,transparent 60%)`}} />
              <span className="relative z-10">✨💡</span>
              <div className="absolute top-4 right-4 text-4xl">💖</div>
            </div>
            <p className="text-center text-sm opacity-60 mt-3">300 micro-LEDs intelligentes · Télécommande 8 modes · Alimentation USB 5V sécuri</p>
          </div>
        </section>

        <section id="catalogue" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Célébrez-vous — Best-sellers 11.11</h2>
          <p className="text-center opacity-60 mb-8 text-sm">Les cadeaux solo les plus offerts (et s'offrir)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E91E63"}}>BEST-SELLER</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🧴</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Personnalisé</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Gourde Isotherme Gravée</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Gravure laser · 24h frais / 12h chaud</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>27.90€</span>
                <span className="text-xs line-through opacity-40">49.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-44%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s1", name: "Gourde Isotherme Gravée", price: 27.9, emoji: "🧴" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E91E63"}}>TOP CADEAU</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🎁</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Bien-être</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Coffret Self-Care Premium</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Masque · Bougie · Huile · Journal</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>39.90€</span>
                <span className="text-xs line-through opacity-40">64.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-39%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s2", name: "Coffret Self-Care Premium", price: 39.9, emoji: "🎁" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">💖</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Bijoux</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Bracelet Personnalisé Acier</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Gravure prénom · Boîte cadeau</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>24.90€</span>
                <span className="text-xs line-through opacity-40">39.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-38%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s3", name: "Bracelet Personnalisé Acier", price: 24.9, emoji: "💖" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E91E63"}}>TECH</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🎧</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Audio</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Casque Bluetooth Noise-Cancel</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">ANC · 40h autonomie · Pliable</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>49.90€</span>
                <span className="text-xs line-through opacity-40">89.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-44%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s4", name: "Casque Bluetooth Noise-Cancel", price: 49.9, emoji: "🎧" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🌸</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Maison</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Diffuseur d'Huiles Essentielles</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Ultrasonique · 7 couleurs · Timer</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>29.90€</span>
                <span className="text-xs line-through opacity-40">49.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-40%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s5", name: "Diffuseur d'Huiles Essentielles", price: 29.9, emoji: "🌸" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">📓</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Lifestyle</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Journal & Stylo Luxe</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Cuir vegan · 200 pages pointillées</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>19.90€</span>
                <span className="text-xs line-through opacity-40">32.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-40%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s6", name: "Journal & Stylo Luxe", price: 19.9, emoji: "📓" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">💡</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Maison</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Lampe de Lecture Connectée</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">USB-C · Intensité variable · Clip</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>34.90€</span>
                <span className="text-xs line-through opacity-40">54.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-36%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s7", name: "Lampe de Lecture Connectée", price: 34.9, emoji: "💡" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#1C0D22"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E91E63"}}>CONFORT</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#1C0D22,#0E0611)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🥿</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Mode</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Chaussons Mémoire de Forme</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Ultra doux · Antidérapants</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E91E63"}}>22.90€</span>
                <span className="text-xs line-through opacity-40">36.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-38%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "s8", name: "Chaussons Mémoire de Forme", price: 22.9, emoji: "🥿" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E91E63",color:"#fff"}}
              >
                Ajouter
              </button>
            </div>
          </div>
          </div>
        </section>

        <section id="offres" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Offres spéciales pack</h2>
          <p className="text-center opacity-60 mb-8 text-sm">Opération exclusive 11.11 uniquement</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#1C0D22",borderColor:"#E91E6355",}}>
            
            <div className="text-sm font-medium opacity-80 mb-1">Cocon Solo (1 Rideau)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E91E63"}}>29.99€</span>
              <span className="text-sm line-through opacity-50">59.99€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-50%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 1× Rideau LED AuraGlow 3×3m</li><li>✓ Télécommande tactile rose pastel</li><li>✓ Pochette de rangement en velours</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-1", name: "Cocon Solo (1 Rideau)", price: 29.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E91E63",color:"#fff"}}
            >
              Choisir cette offre
            </button>
          </div>
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#1C0D22",borderColor:"#E91E6355",boxShadow:"0 0 30px #E91E6333"}}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-black" style={{background:"#E91E63"}}>COUP DE CŒUR 11.11 💖</div>
            <div className="text-sm font-medium opacity-80 mb-1">Duo Chambre & Salon (2 Rideaux)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E91E63"}}>49.99€</span>
              <span className="text-sm line-through opacity-50">119.98€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-58%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 2× Rideaux LED (600 micro-LEDs)</li><li>✓ 1 pour soi + 1 à offrir à sa meilleure amie</li><li>✓ Livraison Offerte Immédiate</li><li>✓ Garantie Sérénité 2 Ans</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-2", name: "Duo Chambre & Salon (2 Rideaux)", price: 49.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E91E63",color:"#fff"}}
            >
              Choisir cette offre
            </button>
          </div>
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#1C0D22",borderColor:"#E91E6355",}}>
            
            <div className="text-sm font-medium opacity-80 mb-1">Ambiance Totale Loft (3 Rideaux)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E91E63"}}>64.99€</span>
              <span className="text-sm line-through opacity-50">179.97€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E91E6322",color:"#E91E63"}}>-64%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 3× Rideaux LED complets</li><li>✓ Télécommandes interconnectables</li><li>✓ Livraison Express Prioritaire</li><li>✓ Accès membre Club VIP Lumina</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-3", name: "Ambiance Totale Loft (3 Rideaux)", price: 64.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E91E63",color:"#fff"}}
            >
              Choisir cette offre
            </button>
          </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Pourquoi commander ici</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="text-2xl mb-2">❤️</div>
            <div className="font-semibold mb-1">Ambiance Cocooning & Sérénité</div>
            <div className="text-sm opacity-70">Lumière diffuse non agressive, parfaite pour décompresser après une longue journée.</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="text-2xl mb-2">🎛️</div>
            <div className="font-semibold mb-1">Variateur d’Intensité Douce</div>
            <div className="text-sm opacity-70">Ajustez de 10% à 100% de luminosité selon votre humeur du moment.</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold mb-1">Alimentation USB Silencieuse</div>
            <div className="text-sm opacity-70">Branchez-le sur un chargeur de téléphone, une prise secteur ou un powerbank nomade.</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="text-2xl mb-2">✨</div>
            <div className="font-semibold mb-1">300 LEDs Haut de Gamme</div>
            <div className="text-sm opacity-70">Fils de cuivre souples et argentés quasi invisibles de jour, magiques une fois allumés.</div>
          </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-8">
          <div className="rounded-2xl p-6 text-center border" style={{background:"#1C0D22",borderColor:"#E91E6344"}}>
            <h3 className="text-xl font-bold mb-2">ÉDITION SPÉCIALE 11.11 : DISPONIBILITÉ LIMITÉE</h3>
            <p className="text-sm opacity-75 mb-4">L’offre spéciale « Offrez-vous du bonheur » expire dès minuit. Profitez des frais de port offerts.</p>
            <div className="w-full h-3 rounded-full bg-black/30 overflow-hidden mb-2"><div className="h-full rounded-full" style={{width:"79%",background:"#E91E63"}} /></div>
            <p className="text-xs opacity-60">Plus que 23 unités · 11h restantes</p>
          </div>
        </section>

        <section id="avis" className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8"><div className="text-4xl font-black" style={{color:"#E91E63"}}>4.95</div><div className="text-amber-400 text-lg">★★★★★</div><p className="text-sm opacity-60">1892 avis · 99% recommandent</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-black">C</div>
              <div>
                <div className="text-sm font-medium">Camille V.</div>
                <div className="text-xs opacity-60">Bordeaux, FR · ★★★★★</div>
              </div>
            </div>
            <div className="text-sm font-medium mb-1">Le meilleur cadeau que je me sois fait !</div>
            <div className="text-xs opacity-75">La lumière rose poudrée le soir crée une ambiance tellement relaxante. C’est mon rituel lecture avant de dormir, je ne pourrais pl...</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#1C0D22"}}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-black">L</div>
              <div>
                <div className="text-sm font-medium">Léa D.</div>
                <div className="text-xs opacity-60">Strasbourg, FR · ★★★★★</div>
              </div>
            </div>
            <div className="text-sm font-medium mb-1">Rendu incroyable sur les rideaux blancs</div>
            <div className="text-xs opacity-75">Facile à installer avec les petits crochets. Mon salon ressemble à un hôtel boutique scandinave le soir venu....</div>
          </div>
          </div>
        </section>

        <section id="faq" className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
          <div className="space-y-3">
            
          <details className="rounded-xl p-4 group" style={{background:"#1C0D22"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Pourquoi profiter de l’offre Singles’ Day ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">Le 11.11 est la plus grande fête du shopping personnel dans le monde. Nous proposons nos tarifs les plus agressifs de la saison avec les frais de port offerts sur tous les packs.</p>
          </details>
          <details className="rounded-xl p-4 group" style={{background:"#1C0D22"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Les LEDs sont-elles agréables pour les yeux ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">Absolument, les micro-LEDs AuraGlow intègrent un filtre opalescent à diffusion douce sans scintillement (flicker-free), certifié sans fatigue oculaire.</p>
          </details>
          <details className="rounded-xl p-4 group" style={{background:"#1C0D22"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Peut-on régler une minuterie pour la nuit ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">Oui ! La télécommande propose un bouton Timer 6H ON / 18H OFF automatique : le rideau s’éteint tout seul après votre endormissement et se rallume le lendemain soir à la même heure.</p>
          </details>
          </div>
        </section>

        <footer className="border-t border-white/10 mt-8" style={{background:"#1C0D22"}}>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
              <div><div className="font-bold mb-2">Paiement sécurisé</div><div className="opacity-60">Visa · Mastercard · PayPal · Apple Pay</div></div>
              <div><div className="font-bold mb-2">30 Nuits d’Ambiance pour Tester Chez Vous</div><div className="opacity-60">Installez votre rideau tranquillement chez vous. Si vous n’êtes pas émerveillé(e</div></div>
              <div><div className="font-bold mb-2">Livraison</div><div className="opacity-60">24-48h en France métropolitaine</div></div>
              <div><div className="font-bold mb-2">Contact</div><div className="opacity-60">support@boutique-event.fr</div></div>
            </div>
            <div className="text-center text-xs opacity-40 pt-6 border-t border-white/5">© 2026 AuraGlow · Catalogue Singles' Day (11.11) · Panier fonctionnel</div>
          </div>
        </footer>
      </main>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 border-t border-white/10 backdrop-blur-lg" style={{background:"#1C0D22f2"}}>
        <div className="flex gap-2">
          <a href="#catalogue" className="flex-1 text-center py-3.5 rounded-xl font-bold" style={{background:"#E91E63",color:"#fff"}}>Catalogue</a>
          <button onClick={() => setCartOpen(true)} className="px-5 py-3.5 rounded-xl font-bold border border-white/20 relative">
            🛒 {cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold text-black" style={{background:"#E91E63"}}>{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* ========== CART DRAWER ========== */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-md h-full flex flex-col shadow-2xl" style={{background:"#1C0D22",color:"#FFF0F5"}}>
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-bold">Panier ({cartCount})</h2>
              <button onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-xl">×</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 opacity-60">
                  <div className="text-4xl mb-3">🛒</div>
                  <p>Votre panier est vide</p>
                  <button onClick={() => setCartOpen(false)} className="mt-4 text-sm underline" style={{color:"#E91E63"}}>Continuer vos achats</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 rounded-xl border border-white/10">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl shrink-0" style={{background:"#0E0611"}}>
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{item.name}</div>
                      <div className="text-sm font-bold mt-0.5" style={{color:"#E91E63"}}>{item.price.toFixed(2)}€</div>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-md border border-white/20 flex items-center justify-center text-sm hover:bg-white/10">−</button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-md border border-white/20 flex items-center justify-center text-sm hover:bg-white/10">+</button>
                        <button onClick={() => removeItem(item.id)} className="ml-auto text-xs opacity-50 hover:opacity-100">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-sm opacity-70">
                  <span>Sous-total</span>
                  <span>{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm opacity-70">
                  <span>Livraison</span>
                  <span className="text-green-400">Offerte</span>
                </div>
                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span style={{color:"#E91E63"}}>{cartTotal.toFixed(2)}€</span>
                </div>
                <button
                  onClick={() => { alert("Commande simulée ! Total : " + cartTotal.toFixed(2) + "€"); clearCart(); setCartOpen(false); }}
                  className="w-full py-4 rounded-xl font-bold text-base transition hover:opacity-90 active:scale-[0.98]"
                  style={{background:"#E91E63",color:"#fff"}}
                >
                  Commander · {cartTotal.toFixed(2)}€
                </button>
                <button onClick={clearCart} className="w-full text-xs opacity-50 hover:opacity-80 py-1">Vider le panier</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
