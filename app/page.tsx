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

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart]);

  function addToCart(item: { id: string; name: string; price: number; emoji: string }) {
    setCart((prev) => {
      const existing = prev.find((x) => x.id === item.id);
      if (existing) {
        return prev.map((x) => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, quantity: x.quantity + delta } : x)).filter((x) => x.quantity > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{background:"#1A120B",color:"#FDF6E9"}}>
      <div className="decor-layer" aria-hidden="true" />
      <div className="extra-decors" aria-hidden="true" dangerouslySetInnerHTML={{__html: `<span style="left:8%;top:0%;animation-delay:0.0s">🍁</span><span style="left:20%;top:17%;animation-delay:1.1s">🍂</span><span style="left:32%;top:34%;animation-delay:2.2s">🦃</span><span style="left:44%;top:51%;animation-delay:3.3s">🥧</span><span style="left:56%;top:68%;animation-delay:4.4s">🌽</span><span style="left:68%;top:10%;animation-delay:5.5s">🍁</span><span style="left:80%;top:27%;animation-delay:6.6s">🍂</span><span style="left:92%;top:44%;animation-delay:7.7s">🧡</span>`}} />

      <div className="relative z-20 text-center text-sm font-semibold py-2.5 px-4" style={{background:`linear-gradient(90deg,#E85D04,#E85D04aa,#E85D04)`,color:"#fff"}}>
        🦃 THANKSGIVING : Jusqu'à -50% + Livraison offerte avec le code THANKS26
        <span className="ml-3 inline-block bg-black/30 px-2 py-0.5 rounded text-xs">Code: THANKS26</span>
      </div>

      <header className="sticky top-0 z-30 backdrop-blur-md border-b border-white/10" style={{background:"#2A1F14ee"}}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tight"><span>AuraGlow</span><span className="text-lg">🦃</span></div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
            <a href="#catalogue" className="hover:opacity-100">Catalogue</a>
            <a href="#offres" className="hover:opacity-100">Offres</a>
            <a href="#avis" className="hover:opacity-100">Avis</a>
            <a href="#faq" className="hover:opacity-100">FAQ</a>
          </nav>
          <button onClick={() => setCartOpen(true)} className="relative p-2 rounded-lg hover:bg-white/10 transition" aria-label="Panier">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold text-black" style={{background:"#E85D04"}}>{cartCount}</span>
            )}
          </button>
        </div>
      </header>

      <main className="relative z-10 pb-20 md:pb-0">
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 border" style={{background:"#E85D0422",color:"#E85D04",borderColor:"#E85D0455"}}>🦃 THANKSGIVING ÉDITION</div>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-70 mb-2">LA TABLE PARFAITE SANS Y PASSER LA JOURNÉE</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Illuminez votre Thanksgiving <span style={{color:"#E85D04"}}>d'une chaleur automnale inoubliable.</span></h1>
            <p className="text-base md:text-lg opacity-80 mb-6 leading-relaxed">Guirlandes LED feuilles d'érable, centres de table lumineux et ambiance cocooning pour un repas de famille réussi.</p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm"><span>✅ Livraison avant le 26 nov.</span><span>🛡️ Garantie 2 ans</span><span>🔄 Retours 30j</span></div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#catalogue" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition hover:scale-[1.02]" style={{background:"#E85D04",color:"#fff"}}>VOIR LE CATALOGUE THANKSGIVING</a>
              <div className="text-sm opacity-70 flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />⚡ Stocks limités : livraison garantie avant le 26 nov.</div>
            </div>
          </div>
          <div className="relative ">
            <div className="aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center text-8xl md:text-9xl relative overflow-hidden" style={{background:`linear-gradient(135deg,#2A1F14,#1A120B)`,boxShadow:`0 0 60px #E85D0433`}}>
              <div className="absolute inset-0 opacity-30" style={{background:`radial-gradient(circle at 30% 30%,#E85D0466,transparent 60%)`}} />
              <span className="relative z-10">✨💡</span>
              <div className="absolute top-4 right-4 text-4xl">🦃</div>
            </div>
            <p className="text-center text-sm opacity-60 mt-3">Thanksgiving · Ambiance automne · Cadeaux famille</p>
          </div>
        </section>

        <section id="catalogue" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Best-sellers Thanksgiving 2026</h2>
          <p className="text-center opacity-60 mb-8 text-sm">Tout pour un repas de famille inoubliable</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E85D04"}}>BEST-SELLER</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🍂</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Déco table</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Centre de Table Automne LED</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Feuilles LED · Timer · USB</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>29.99€</span>
                <span className="text-xs line-through opacity-40">54.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-45%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg1", name: "Centre de Table Automne LED", price: 29.99, emoji: "🍂" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E85D04"}}>TOP VENTES</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🍁</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Déco</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Guirlande Feuilles d'Érable</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">3m · LED chaudes · Intérieur/extérieur</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>19.90€</span>
                <span className="text-xs line-through opacity-40">34.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-43%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg2", name: "Guirlande Feuilles d'Érable", price: 19.9, emoji: "🍁" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🎃</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Table</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Set 6 Photophores Citrouille</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Céramique · Bougies LED incluses</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>24.90€</span>
                <span className="text-xs line-through opacity-40">39.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-38%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg3", name: "Set 6 Photophores Citrouille", price: 24.9, emoji: "🎃" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🧺</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Linge de table</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Nappe Automne + Chemin de Table</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Coton · Motifs récolte</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>34.90€</span>
                <span className="text-xs line-through opacity-40">59.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-42%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg4", name: "Nappe Automne + Chemin de Table", price: 34.9, emoji: "🧺" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E85D04"}}>CADEAU</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🧴</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Personnalisé</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Gourde Isotherme Gravée Famille</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Gravure prénoms · 500ml</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>27.90€</span>
                <span className="text-xs line-through opacity-40">49.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-44%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg5", name: "Gourde Isotherme Gravée Famille", price: 27.9, emoji: "🧴" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🥧</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Cuisine</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Coffret Épices Thanksgiving</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Cannelle · Muscade · Clou de girofle</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>22.90€</span>
                <span className="text-xs line-through opacity-40">36.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-38%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg6", name: "Coffret Épices Thanksgiving", price: 22.9, emoji: "🥧" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">🦃</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Maison</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Coussins Automne x2</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">Velours · Orange & doré</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>29.90€</span>
                <span className="text-xs line-through opacity-40">49.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-40%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg7", name: "Coussins Automne x2", price: 29.9, emoji: "🦃" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group relative" style={{background:"#2A1F14"}}>
            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-black z-10" style={{background:"#E85D04"}}>AMBIANCE</span>
            <div className="aspect-square flex items-center justify-center text-5xl md:text-6xl relative" style={{background:`linear-gradient(145deg,#2A1F14,#1A120B)`}}>
              <span className="group-hover:scale-110 transition-transform duration-300">✨</span>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Lumière</div>
              <div className="font-semibold text-sm mb-1 leading-snug">Projecteur Feuilles d'Automne</div>
              <div className="text-xs opacity-60 mb-3 line-clamp-2">360° · 6 thèmes automne</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black" style={{color:"#E85D04"}}>34.90€</span>
                <span className="text-xs line-through opacity-40">59.90€</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-42%</span>
              </div>
              <button
                onClick={() => addToCart({ id: "tg8", name: "Projecteur Feuilles d'Automne", price: 34.9, emoji: "✨" })}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition hover:opacity-90 active:scale-95"
                style={{background:"#E85D04",color:"#fff"}}
              >Ajouter</button>
            </div>
          </div></div>
        </section>

        <section id="offres" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Offres spéciales pack</h2>
          <p className="text-center opacity-60 mb-8 text-sm">Offre valable jusqu'au 26 novembre 2026</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#2A1F14",borderColor:"#E85D0455",}}>
            
            <div className="text-sm font-medium opacity-80 mb-1">Cocon Solo (1 Rideau)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E85D04"}}>29.99€</span>
              <span className="text-sm line-through opacity-50">59.99€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-50%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 1× Rideau LED AuraGlow 3×3m</li><li>✓ Télécommande tactile rose pastel</li><li>✓ Pochette de rangement en velours</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-1", name: "Cocon Solo (1 Rideau)", price: 29.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E85D04",color:"#fff"}}
            >Choisir cette offre</button>
          </div>
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#2A1F14",borderColor:"#E85D0455",boxShadow:"0 0 30px #E85D0433"}}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-black" style={{background:"#E85D04"}}>COUP DE CŒUR 11.11 💖</div>
            <div className="text-sm font-medium opacity-80 mb-1">Duo Chambre & Salon (2 Rideaux)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E85D04"}}>49.99€</span>
              <span className="text-sm line-through opacity-50">119.98€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-58%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 2× Rideaux LED (600 micro-LEDs)</li><li>✓ 1 pour soi + 1 à offrir à sa meilleure amie</li><li>✓ Livraison Offerte Immédiate</li><li>✓ Garantie Sérénité 2 Ans</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-2", name: "Duo Chambre & Salon (2 Rideaux)", price: 49.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E85D04",color:"#fff"}}
            >Choisir cette offre</button>
          </div>
          <div className="relative rounded-2xl p-5 border transition-all hover:scale-[1.02]" style={{background:"#2A1F14",borderColor:"#E85D0455",}}>
            
            <div className="text-sm font-medium opacity-80 mb-1">Ambiance Totale Loft (3 Rideaux)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black" style={{color:"#E85D04"}}>64.99€</span>
              <span className="text-sm line-through opacity-50">179.97€</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{background:"#E85D0422",color:"#E85D04"}}>-64%</span>
            </div>
            <ul className="text-xs space-y-1.5 mb-4 opacity-80"><li>✓ 3× Rideaux LED complets</li><li>✓ Télécommandes interconnectables</li><li>✓ Livraison Express Prioritaire</li><li>✓ Accès membre Club VIP Lumina</li></ul>
            <button
              onClick={() => addToCart({ id: "pack-3", name: "Ambiance Totale Loft (3 Rideaux)", price: 64.99, emoji: "✨💡" })}
              className="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 active:scale-95"
              style={{background:"#E85D04",color:"#fff"}}
            >Choisir cette offre</button>
          </div></div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Pourquoi commander ici</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="text-2xl mb-2">✨</div>
            <div className="font-semibold mb-1">Qualité premium</div>
            <div className="text-sm opacity-70">Matériaux sélectionnés pour durer toute la saison</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="text-2xl mb-2">🛡️</div>
            <div className="font-semibold mb-1">Garantie 2 ans</div>
            <div className="text-sm opacity-70">Remplacement gratuit en cas de défaut</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="text-2xl mb-2">🚚</div>
            <div className="font-semibold mb-1">Livraison avant le 26</div>
            <div className="text-sm opacity-70">Expédition prioritaire pour arriver à temps</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="text-2xl mb-2">❤️</div>
            <div className="font-semibold mb-1">Satisfait ou remboursé</div>
            <div className="text-sm opacity-70">30 jours pour changer d'avis</div>
          </div></div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-8">
          <div className="rounded-2xl p-6 text-center border" style={{background:"#2A1F14",borderColor:"#E85D0444"}}>
            <h3 className="text-xl font-bold mb-2">Dernières pièces avant Thanksgiving</h3>
            <p className="text-sm opacity-75 mb-4">Les stocks fondent pour le 26 novembre. Commandez maintenant pour être livré à temps.</p>
            <div className="w-full h-3 rounded-full bg-black/30 overflow-hidden mb-2"><div className="h-full rounded-full" style={{width:"72%",background:"#E85D04"}} /></div>
            <p className="text-xs opacity-60">Plus que 34 packs · 48h restantes sur l'offre flash</p>
          </div>
        </section>

        <section id="avis" className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8"><div className="text-4xl font-black" style={{color:"#E85D04"}}>4.9</div><div className="text-amber-400 text-lg">★★★★★</div><p className="text-sm opacity-60">1284 avis · 97% recommandent</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black">S</div>
              <div>
                <div className="text-sm font-medium">Sophie M.</div>
                <div className="text-xs opacity-60">Lyon · ★★★★★</div>
              </div>
            </div>
            <div className="text-sm font-medium mb-1">Parfait pour notre table</div>
            <div className="text-xs opacity-75">Les guirlandes ont transformé notre salon. Tout le monde a adoré l'ambiance automne.</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black">M</div>
              <div>
                <div className="text-sm font-medium">Marc D.</div>
                <div className="text-xs opacity-60">Bordeaux · ★★★★★</div>
              </div>
            </div>
            <div className="text-sm font-medium mb-1">Gravure impeccable</div>
            <div className="text-xs opacity-75">Gourde reçue en 48h, gravure magnifique. Cadeau parfait pour ma sœur.</div>
          </div>
          <div className="rounded-xl p-4" style={{background:"#2A1F14"}}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black">J</div>
              <div>
                <div className="text-sm font-medium">Julie R.</div>
                <div className="text-xs opacity-60">Nantes · ★★★★★</div>
              </div>
            </div>
            <div className="text-sm font-medium mb-1">Top qualité</div>
            <div className="text-xs opacity-75">Centre de table LED superbe. On le ressortira chaque année.</div>
          </div></div>
        </section>

        <section id="faq" className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
          <div className="space-y-3">
          <details className="rounded-xl p-4 group" style={{background:"#2A1F14"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Livraison avant Thanksgiving ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">Oui, commande avant le 22 novembre = livraison garantie avant le 26.</p>
          </details>
          <details className="rounded-xl p-4 group" style={{background:"#2A1F14"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              La gravure est-elle incluse ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">Oui sur les gourdes avec le code promo en cours. Délai +24h.</p>
          </details>
          <details className="rounded-xl p-4 group" style={{background:"#2A1F14"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Retours possibles ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">30 jours, même après le repas. Remboursement intégral.</p>
          </details>
          <details className="rounded-xl p-4 group" style={{background:"#2A1F14"}}>
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              Les LED sont-elles sûres ?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-sm opacity-75">USB 5V basse tension, sans risque pour enfants et nappes.</p>
          </details></div>
        </section>

        <footer className="border-t border-white/10 mt-8" style={{background:"#2A1F14"}}>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
              <div><div className="font-bold mb-2">Paiement sécurisé</div><div className="opacity-60">Visa · Mastercard · PayPal · Apple Pay</div></div>
              <div><div className="font-bold mb-2">Garantie 2 ans</div><div className="opacity-60">Remplacement gratuit en cas de défaut</div></div>
              <div><div className="font-bold mb-2">Livraison</div><div className="opacity-60">Avant le 26 nov. garantie</div></div>
              <div><div className="font-bold mb-2">Contact</div><div className="opacity-60">support@boutique-event.fr</div></div>
            </div>
            <div className="text-center text-xs opacity-40 pt-6 border-t border-white/5">© 2026 AuraGlow · Thanksgiving 2026 · Panier fonctionnel</div>
          </div>
        </footer>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 border-t border-white/10 backdrop-blur-lg" style={{background:"#2A1F14f2"}}>
        <div className="flex gap-2">
          <a href="#catalogue" className="flex-1 text-center py-3.5 rounded-xl font-bold" style={{background:"#E85D04",color:"#fff"}}>Catalogue</a>
          <button onClick={() => setCartOpen(true)} className="px-5 py-3.5 rounded-xl font-bold border border-white/20 relative">
            🛒 {cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold text-black" style={{background:"#E85D04"}}>{cartCount}</span>}
          </button>
        </div>
      </div>

      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-md h-full flex flex-col shadow-2xl" style={{background:"#2A1F14",color:"#FDF6E9"}}>
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-bold">Panier ({cartCount})</h2>
              <button onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-xl">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 opacity-60">
                  <div className="text-4xl mb-3">🛒</div>
                  <p>Votre panier est vide</p>
                  <button onClick={() => setCartOpen(false)} className="mt-4 text-sm underline" style={{color:"#E85D04"}}>Continuer vos achats</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 rounded-xl border border-white/10">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl shrink-0" style={{background:"#1A120B"}}>{item.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{item.name}</div>
                      <div className="text-sm font-bold mt-0.5" style={{color:"#E85D04"}}>{item.price.toFixed(2)}€</div>
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
                <div className="flex justify-between text-sm opacity-70"><span>Sous-total</span><span>{cartTotal.toFixed(2)}€</span></div>
                <div className="flex justify-between text-sm opacity-70"><span>Livraison</span><span className="text-green-400">Offerte</span></div>
                <div className="flex justify-between text-lg font-black"><span>Total</span><span style={{color:"#E85D04"}}>{cartTotal.toFixed(2)}€</span></div>
                <button
                  onClick={() => { alert("Commande simulée ! Total : " + cartTotal.toFixed(2) + "€"); clearCart(); setCartOpen(false); }}
                  className="w-full py-4 rounded-xl font-bold text-base transition hover:opacity-90 active:scale-[0.98]"
                  style={{background:"#E85D04",color:"#fff"}}
                >Commander · {cartTotal.toFixed(2)}€</button>
                <button onClick={clearCart} className="w-full text-xs opacity-50 hover:opacity-80 py-1">Vider le panier</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
