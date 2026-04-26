/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ExternalLink, 
  Leaf, 
  Clock, 
  ShieldCheck, 
  UtensilsCrossed, 
  Instagram, 
  MessageCircle,
  ChevronRight,
  Star,
  AlertCircle,
  MapPin,
  Phone,
  ChefHat,
  Heart
} from "lucide-react";

const LOGO_URL = "https://i.imgur.com/rLmBLm6.png";
const MENU_URL = "https://instadelivery.com.br/kibdul";
const IFOOD_URL = "https://www.ifood.com.br/delivery/belo-horizonte-mg/kibdul-comida-arabe-concordia/215cacb8-b5db-46bd-818f-cd6d24b170ef";
const WHATSAPP_URL = "https://wa.me/5531933006290";
const INSTAGRAM_URL = "https://instagram.com/kibdul_arabe/";


const CTAButtons = ({ centered = false }: { centered?: boolean }) => (
  <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
    <a href={MENU_URL} target="_blank" className="btn-primary group shadow-kibdul-primary/20 shadow-lg">
      <ShoppingBag size={20} />
      Ver Cardápio Digital
      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
    <a href={IFOOD_URL} target="_blank" className="btn-secondary shadow-kibdul-secondary/20 shadow-lg">
      <ExternalLink size={20} />
      Pedir pelo iFood
    </a>
  </div>
);

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-pattern font-sans selection:bg-kibdul-primary selection:text-white sand-texture pt-[52px] lg:pt-[56px]">
      {/* Fixed Top Banner */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-kibdul-highlight text-white shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3">
          <AlertCircle size={16} className="text-kibdul-sand-light shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-0.5 text-[10px] lg:text-xs font-bold leading-tight text-center sm:text-left">
            <span className="opacity-90">Primeiro Pedido no cardápio digital?</span>
            <span className="flex items-center gap-1.5 justify-center sm:justify-start">
              Use o cupom: 
              <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono tracking-wider text-[9px] lg:text-[10px]">
                meuprimeiropedido
              </span> 
              (R$ 5,00 OFF)
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[52px] lg:top-[56px] z-50 bg-white/60 backdrop-blur-md border-b border-kibdul-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Kibdul Logo" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tight text-kibdul-primary leading-none">Kibdul</span>
                <span className="text-[10px] uppercase tracking-widest text-kibdul-accent font-bold">Lanche Árabe</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#produtos" className="hover:text-kibdul-primary transition-colors">Produtos</a>
              <a href="#diferenciais" className="hover:text-kibdul-primary transition-colors">Diferenciais</a>
              <a href="#sobre" className="hover:text-kibdul-primary transition-colors">Sobre Nós</a>
              <a href={MENU_URL} target="_blank" className="bg-kibdul-primary text-white px-6 py-2.5 rounded-full hover:bg-kibdul-secondary transition-all shadow-md">Pedir Agora</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-48 desert-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-kibdul-accent/10 text-kibdul-accent font-bold text-[10px] uppercase tracking-[0.3em]">
                  Delivery rápido e saudável
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl text-kibdul-primary mb-6 flex flex-col items-center lg:items-start leading-[0.85]">
                <span className="block">Kibdul</span>
                <span className="text-kibdul-accent italic relative block text-2xl lg:text-4xl xl:text-5xl whitespace-nowrap tracking-tight">
                  Lanche Árabe
                  <svg className="absolute -bottom-3 left-0 w-full h-3 text-kibdul-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-14 max-w-2xl mx-auto lg:mx-0 leading-snug font-medium">
                Descubra o melhor da culinária árabe com sanduíches e pratos feitos com paixão, que combinam brasilidade e frescor.
              </p>
              <CTAButtons centered={false} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.imgur.com/56XRp0l.png" 
                  alt="Kibdul Comida Árabe" 
                  className="w-full h-full object-contain bg-white p-12"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-kibdul-accent rounded-full blur-[80px] opacity-30"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-kibdul-primary rounded-full blur-[80px] opacity-20"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Dunes */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-kibdul-sand-dark dune-shape opacity-40 transform translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white dune-shape"></div>
      </header>

      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl text-kibdul-primary mb-6">Uma Explosão de Sabores</h2>
            <p className="max-w-2xl mx-auto text-lg lg:text-xl text-kibdul-secondary/70">Cada prato é uma obra de arte, preparada com os melhores ingredientes e muito carinho.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {[
              "https://i.imgur.com/bEfi9Sq.png",
              "https://i.imgur.com/PjY3Pek.png",
              "https://i.imgur.com/G9YVFod.png",
              "https://i.imgur.com/rU6QKhL.png"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl overflow-hidden shadow-lg h-64 md:h-96 ${idx % 2 !== 0 ? 'md:translate-y-12' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Prato Kibdul ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-16 lg:py-20 bg-kibdul-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-kibdul-accent/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kibdul-secondary/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: <Leaf className="text-kibdul-sand-light" />, title: "Ingredientes Frescos", desc: "Processos rigorosos para garantir frescor absoluto." },
              { icon: <ShieldCheck className="text-kibdul-sand-light" />, title: "Segurança Alimentar", desc: "Pós-graduação em Vigilância Sanitária na gestão." },
              { icon: <UtensilsCrossed className="text-kibdul-sand-light" />, title: "Árabe + Brasilidade", desc: "O equilíbrio perfeito entre tradição e paladar local." },
              { icon: <Clock className="text-kibdul-sand-light" />, title: "Delivery Rápido", desc: "Logística otimizada para você comer sempre quentinho." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 rounded-2xl lg:rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-kibdul-accent/30 transition-all border border-white/10">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl lg:text-2xl font-bold mb-3 text-kibdul-sand-light tracking-tight">{item.title}</h4>
                <p className="text-kibdul-sand-light/70 text-sm lg:text-base px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-kibdul-sand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-kibdul-accent/10 p-8 lg:p-16 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-kibdul-accent font-bold mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-kibdul-accent/10 p-1.5">
                  <img 
                    src={LOGO_URL} 
                    alt="Kibdul Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-10 h-10 bg-kibdul-accent/10 rounded-full flex items-center justify-center relative">
                  <Star size={20} fill="currentColor" className="relative z-10" />
                </div>
                <span className="uppercase tracking-[0.2em] text-[9px] font-bold">Famosa em toda a cidade</span>
              </div>
              <h2 className="text-3xl lg:text-6xl text-kibdul-primary mb-10">Nossa Pasta de Alho é Diferente</h2>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10">
                <div className="space-y-8 text-kibdul-secondary/80 text-left">
                  <p className="text-xl lg:text-3xl leading-tight font-medium">
                    Famosa por não conter <span className="text-kibdul-accent font-bold border-b-4 border-kibdul-accent/20">amido de milho</span>.
                  </p>
                  <div className="bg-kibdul-sand-light/50 p-6 lg:p-10 rounded-[2rem] border-2 border-dashed border-kibdul-accent/30 relative">
                    <p className="text-lg lg:text-2xl italic leading-relaxed text-kibdul-primary/80">
                      "Produzimos com clara de ovos desidratada, o que ajuda nas boas práticas e evita riscos como salmonela, mantendo a textura cremosa e o sabor marcante que você ama."
                    </p>
                  </div>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white aspect-square flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/w25zwwB.png" 
                    alt="Nossa famosa Pasta de Alho" 
                    className="w-full h-full object-contain p-6 lg:p-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a href={MENU_URL} target="_blank" className="btn-primary px-10 py-4 text-base lg:text-lg">
                  Pedir com Pasta de Alho
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="produtos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl text-kibdul-primary mb-6">O Que Temos de Melhor</h2>
            <p className="max-w-2xl mx-auto text-lg lg:text-xl">Receitas tradicionais com um toque de modernidade e frescor.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Sanduíches", 
                desc: "Beirute, Shawarma e Kebab com variações de complementos e carnes.",
                image: "https://i.imgur.com/SUb5GNb.png",
                bg: "bg-kibdul-sand-light"
              },
              { 
                title: "Boxes", 
                desc: "Refeições rápidas baseadas em Mjadara (arroz com lentilha e tempero árabe).",
                image: "https://i.imgur.com/rjtsk0W.png",
                bg: "bg-kibdul-sand-dark"
              },
              { 
                title: "Linha Vegetariana", 
                desc: "Opções leves e nutritivas para quem busca saúde sem abrir mão do sabor.",
                image: "https://i.imgur.com/5O98KBi.png",
                bg: "bg-kibdul-sand-light"
              },
              { 
                title: "Bebidas Geladas", 
                desc: "O acompanhamento perfeito para refrescar o seu dia.",
                image: "https://i.imgur.com/2AXq76o.png",
                bg: "bg-kibdul-sand-dark"
              }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`group cursor-pointer ${cat.bg} p-8 rounded-[2rem] hover:shadow-2xl transition-all border border-transparent hover:border-kibdul-accent/20 flex flex-col items-center text-center`}
              >
                <div className="mb-6 w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform relative bg-white">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-contain p-6"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl text-kibdul-primary mb-4">{cat.title}</h3>
                <p className="text-base lg:text-lg mb-6 px-4">{cat.desc}</p>
                <div className="h-1 w-12 bg-kibdul-accent/30 group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <CTAButtons centered />
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32 bg-kibdul-sand-light/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg border border-kibdul-accent/10 p-2">
                  <img 
                    src={LOGO_URL} 
                    alt="Kibdul Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-12 h-12 bg-kibdul-sand-light rounded-xl flex items-center justify-center text-kibdul-primary">
                  <ChefHat size={24} />
                </div>
              </div>
              <h2 className="text-4xl lg:text-7xl text-kibdul-primary mb-12">Quem Somos</h2>
              <div className="space-y-12 leading-relaxed text-lg lg:text-2xl">
                <p>
                  Somos a <strong className="text-kibdul-primary">Kibdul – Comida Árabe</strong>, um delivery de sanduíches árabes criado para levar até você o verdadeiro sabor da nossa cultura.
                </p>
                <p>
                  Por trás da marca estão <strong className="text-kibdul-primary">Nizar Abdul Samad</strong>, filho de libanês, Gestor de TI e pós-graduado em Vigilância Sanitária, e <strong className="text-kibdul-primary">Juliana Martins</strong>, Chef de Cozinha especialista em gastronomia árabe e gestão de alimentos.
                </p>
                <p>
                  Unimos tecnologia, segurança alimentar e excelência gastronômica para entregar experiências marcantes, com ingredientes frescos, processos rigorosos e muito amor pela culinária árabe.
                </p>
                <div className="pt-12 border-t border-kibdul-accent/20">
                  <p className="text-3xl lg:text-5xl font-display italic text-kibdul-primary leading-tight">
                    Kibdul – Tradição, qualidade e sabor no seu dia a dia.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl h-80 border-4 border-white">
                <img 
                  src="https://i.imgur.com/9K8U9lM.png" 
                  alt="Kibdul Lanche Árabe" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-kibdul-sand-light p-12 rounded-[3rem] border border-kibdul-accent/10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-kibdul-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">N</div>
                  <div>
                    <h4 className="text-2xl font-bold text-kibdul-primary">Nizar Abdul Samad</h4>
                    <p className="text-kibdul-accent font-medium">Gestão & Vigilância Sanitária</p>
                  </div>
                </div>
                <p className="text-kibdul-secondary/60 leading-relaxed">
                  Filho de libanês, traz a herança cultural e o rigor técnico da pós-graduação em Vigilância Sanitária para garantir processos impecáveis.
                </p>
              </div>
              
              <div className="bg-kibdul-primary p-12 rounded-[3rem] text-white shadow-2xl transform lg:translate-x-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-kibdul-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl">J</div>
                  <div>
                    <h4 className="text-2xl font-bold text-kibdul-sand-light">Juliana Martins</h4>
                    <p className="text-kibdul-sand-dark font-medium">Chef Especialista</p>
                  </div>
                </div>
                <p className="text-kibdul-sand-light/60 leading-relaxed">
                  Chef de Cozinha especialista em gastronomia árabe, responsável por traduzir tradição em sabores inesquecíveis e frescos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-32 bg-kibdul-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart size={32} className="text-kibdul-accent" />
            </div>
            <h2 className="text-4xl lg:text-8xl mb-8 leading-[0.8] tracking-tighter">Sua viagem começa aqui.</h2>
            <p className="text-kibdul-sand-light/70 mb-12 text-lg lg:text-3xl max-w-2xl mx-auto leading-tight">Peça agora o seu Kibdul e descubra por que somos referência em sabor e segurança alimentar.</p>
            <CTAButtons centered />
          </motion.div>
        </div>
      </section>

      <footer className="bg-kibdul-earth text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <img 
                  src={LOGO_URL} 
                  alt="Kibdul Logo" 
                  className="w-16 h-16 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">Kibdul</span>
                  <span className="text-[12px] uppercase tracking-[0.4em] text-kibdul-accent">Lanche Árabe</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
                Unindo tecnologia, tradição e segurança alimentar para entregar o melhor da culinária árabe em Belo Horizonte.
              </p>
              <div className="flex gap-6">
                <a href={INSTAGRAM_URL} target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-kibdul-primary transition-all border border-white/10">
                  <Instagram size={28} />
                </a>
                <a href={WHATSAPP_URL} target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-700 transition-all border border-white/10">
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-10 text-kibdul-accent">Contato</h4>
              <ul className="space-y-8 text-gray-400">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="text-kibdul-accent shrink-0 mt-1" />
                  <span className="text-lg">(31) 93300-6290</span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-kibdul-accent shrink-0 mt-1" />
                  <span className="text-lg">Belo Horizonte - MG</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-10 text-kibdul-accent">Links</h4>
              <ul className="space-y-6 text-gray-400 text-lg">
                <li><a href={MENU_URL} target="_blank" className="hover:text-white transition-colors">Cardápio Digital</a></li>
                <li><a href={IFOOD_URL} target="_blank" className="hover:text-white transition-colors">Loja iFood</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Nossos Pratos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kibdul Comida Árabe. Todos os direitos reservados.</p>
            <div className="flex items-center gap-3">
              <span>Feito com paixão</span>
              <Heart size={16} fill="currentColor" className="text-kibdul-accent" />
              <span>pela Kibdul</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (FAB) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3"
      >
        <a 
          href={MENU_URL} 
          target="_blank" 
          className="group relative flex items-center gap-3"
        >
          <span className="bg-kibdul-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-white/10">
            Peça Agora
          </span>
          <div className="w-16 h-16 bg-kibdul-highlight text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(122,45,34,0.5)] hover:scale-110 active:scale-95 transition-all relative overflow-hidden group">
            <ShoppingBag size={28} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-kibdul-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-kibdul-highlight animate-ping opacity-20 pointer-events-none"></div>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
