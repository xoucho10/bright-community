"use client"
import {useState,useEffect} from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

// DYNAMIC DATA - EDIT HERE - CONNECT TO CMS LATER
const SITE_DATA = {
  stats: [
    {label:"Families Supported",value:"12,000+"},
    {label:"Districts Reached",value:"14"},
    {label:"Water Points Installed",value:"156"},
    {label:"Funds To Field",value:"95%"},
  ],
  programs: [
    {id:"education",title:"Education Support",desc:"Scholastic materials, school fees and mentorship for children in rural districts.",image:"https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700"},
    {id:"water",title:"Clean Water Access",desc:"Construction of boreholes, shallow wells and water purification systems.",image:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=700"},
    {id:"skills",title:"Youth Livelihood Skills",desc:"Vocational training in tailoring, agriculture and digital skills for youth.",image:"https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700"},
    {id:"health",title:"Community Health",desc:"Health outreaches, hygiene training and maternal health support.",image:"https://images.unsplash.com/photo-1584515933487-779824d29309?w=700"},
  ],
  completed: [
    {title:"Kayunga Safe Water Point",district:"Kayunga District",category:"water",beneficiaries:"840 residents",date:"March 2025",image:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=600"},
    {title:"Mbale Primary Learning Center",district:"Mbale District",category:"education",beneficiaries:"320 pupils",date:"January 2025",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"},
    {title:"Gulu Youth Tailoring Hub",district:"Gulu District",category:"skills",beneficiaries:"60 youth trained",date:"February 2025",image:"https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600"},
    {title:"Jinja Community Health Outreach",district:"Jinja District",category:"health",beneficiaries:"1,200 people reached",date:"December 2024",image:"https://images.unsplash.com/photo-1584515933487-779824d29309?w=600"},
    {title:"Wakiso School Kit Distribution",district:"Wakiso District",category:"education",beneficiaries:"500 learners",date:"November 2024",image:"https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600"},
    {title:"Soroti Borehole Rehabilitation",district:"Soroti District",category:"water",beneficiaries:"950 residents",date:"October 2024",image:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=600"},
  ],
  upcoming: [
    {title:"Family Food Relief - Ramadan Program",goal:5000,raised:3850,days:5,image:"https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600",need:"500 families"},
    {title:"Deep Borehole for Mbale Community",goal:2500,raised:2100,days:12,image:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=600",need:"Clean water for 900 people"},
    {title:"Girls Education Scholarship Fund 2025",goal:6000,raised:2400,days:20,image:"https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600",need:"50 girls in secondary school"},
  ]
}

export default function Home(){
  const [amount,setAmount]=useState(50)
  const [freq,setFreq]=useState("once")
  const [filter,setFilter]=useState("all")
  const [slide,setSlide]=useState(0)
  const [showVideo,setShowVideo]=useState(false)

  const hero=[
    {img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1800",h:"Build Strong Communities Together",p:"To Build Strong Community Is Our Mission - we work with families in Uganda on education, clean water and livelihoods."},
    {img:"https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1800",h:"Clean Water Access For Rural Families",p:"156 water points built across 14 districts with community ownership and maintenance training."},
    {img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1800",h:"Education Support For Every Child",p:"Providing scholastic materials, fees and mentorship to keep children in school."},
  ]

  useEffect(()=>{const t=setInterval(()=>setSlide(s=>(s+1)%3),6000);return()=>clearInterval(t)},[])

  return(
  <main className="bg-[#FFFBF5] text-[#111827] overflow-x-hidden">
    <Navbar/>

    {/* HERO - USES LOGO IN TOP BAR VIA NAVBAR */}
    <section className="relative h-[88vh] md:h-[84vh] bg-black overflow-hidden">
      {hero.map((s,i)=>(
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${slide===i?'opacity-100':'opacity-0'}`}>
          <img src={s.img} className="w-full h-full object-cover" alt={s.h}/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"/>
          <div className="absolute inset-0 flex items-center">
            <div className="px-5 md:px-10 w-full max-w-[1400px] mx-auto grid md:grid-cols-[1.2fr_0.7fr] gap-8 items-center">
              <div>
                <span className="bg-[#F7941E] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest">BASED IN KAMPALA, UGANDA - EST 2021</span>
                <h1 className="text-[34px] md:text-[56px] font-black leading-[0.95] text-white mt-5">{s.h}</h1>
                <p className="text-white/80 mt-4 text-[13px] md:text-[15px] max-w-[500px] leading-6">{s.p}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/donate" className="bg-[#B91C2C] hover:bg-[#9e1725] text-white px-8 py-4 rounded-full font-black text-[13px] transition">Donate Now</Link>
                  <button onClick={()=>setShowVideo(true)} className="bg-white text-black px-8 py-4 rounded-full font-bold text-[13px]">Watch Our Work</button>
                </div>
                <div className="mt-5 flex items-center gap-3 text-white/70 text-[11px]">
                  <img src="/logo.png" alt="Bright Community Logo" className="w-8 h-8 bg-white rounded-full p-1 object-contain"/>
                  <span>Trusted by 12,000 families across Uganda</span>
                </div>
              </div>

              {/* DONATION CARD - DYNAMIC */}
              <div className="hidden md:block bg-white rounded-[24px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <h3 className="font-black text-[18px]">Support A Family Today</h3>
                <p className="text-[11px] opacity-60 mt-1">Secure donation - MTN MoMo, Airtel, Card, PayPal</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={()=>setFreq('once')} className={`flex-1 py-2.5 rounded-full border text-[11px] font-bold ${freq==='once'?'bg-[#111827] text-white border-[#111827]':'bg-white'}`}>One Time</button>
                  <button onClick={()=>setFreq('monthly')} className={`flex-1 py-2.5 rounded-full border text-[11px] font-bold ${freq==='monthly'?'bg-[#B91C2C] text-white border-[#B91C2C]':'bg-white'}`}>Monthly</button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">{[25,50,100,250].map(v=><button key={v} onClick={()=>setAmount(v)} className={`py-3 rounded-full font-black border-2 text-[12px] ${amount===v?'bg-[#B91C2C] text-white border-[#B91C2C]':'bg-white border-gray-200'}`}>${v}</button>)}</div>
                <input type="range" min={10} max={500} value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full mt-4 accent-[#B91C2C]"/>
                <div className="flex justify-between text-[10px] opacity-50 mt-1"><span>$10</span><span>$500</span></div>
                <Link href={`/donate?amount=${amount}&freq=${freq}`} className="mt-4 block bg-[#B91C2C] text-white rounded-full py-3.5 text-center font-black text-[14px]">Donate ${amount} {freq==='monthly'?'/month':''}</Link>
                <p className="text-[9px] opacity-50 text-center mt-3">SSL Encrypted - Receipt by email</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">{hero.map((_,i)=><button key={i} onClick={()=>setSlide(i)} className={`h-2 rounded-full transition-all ${slide===i?'w-8 bg-white':'w-2 bg-white/50'}`}/>)}</div>
    </section>

    {/* STATS - DYNAMIC */}
    <section className="bg-[#111827] text-white py-5 px-5 md:px-10"><div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">{SITE_DATA.stats.map((s,i)=><div key={i} className="text-center"><p className="text-[26px] font-black">{s.value}</p><p className="text-[10px] opacity-70 uppercase tracking-widest">{s.label}</p></div>)}</div></section>

    {/* PROGRAMS - DYNAMIC */}
    <section className="px-5 md:px-10 py-14 max-w-[1400px] mx-auto">
      <div className="text-center max-w-[600px] mx-auto"><span className="bg-[#F7941E]/15 text-[#B91C2C] px-4 py-1 rounded-full text-[10px] font-black tracking-widest">OUR PROGRAMS</span><h2 className="text-[28px] md:text-[36px] font-black mt-3 leading-[0.95]">Sustainable Solutions With Communities</h2><p className="opacity-60 text-[12px] mt-3">We design programs with community leaders to ensure long term impact.</p></div>
      <div className="mt-8 grid md:grid-cols-4 gap-5">{SITE_DATA.programs.map((p)=><div key={p.id} className="bg-white rounded-[18px] overflow-hidden border hover:shadow-xl transition hover:-translate-y-1"><img src={p.image} className="h-48 w-full object-cover" alt={p.title}/><div className="p-4"><h3 className="font-black text-[13px]">{p.title}</h3><p className="text-[11px] opacity-60 mt-1 leading-5">{p.desc}</p><Link href={`/programs#${p.id}`} className="text-[11px] font-bold text-[#B91C2C] mt-3 inline-block">Learn More</Link></div></div>)}</div>
    </section>

    {/* COMPLETED PROJECTS - REALISTIC WORDING - DYNAMIC */}
    <section className="bg-white border-y py-14 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-end"><div><h2 className="text-[24px] md:text-[32px] font-black">Completed Projects</h2><p className="text-[12px] opacity-60 mt-1">Each project includes location, beneficiaries and completion date.</p></div><div className="flex gap-2 overflow-x-auto pb-1">{['all','water','education','skills','health'].map(c=><button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full text-[11px] font-bold capitalize border ${filter===c?'bg-[#111827] text-white':'bg-white'}`}>{c}</button>)}</div></div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">{SITE_DATA.completed.filter(f=>filter==='all'||f.category===filter).map((f,i)=><div key={i} className="rounded-[18px] overflow-hidden border bg-[#FFFBF5] group"><div className="relative h-60"><img src={f.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={f.title}/><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/><div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[10px] font-bold">{f.district}</div><div className="absolute bottom-0 p-4 text-white"><h4 className="font-black text-[14px]">{f.title}</h4><p className="text-[11px] opacity-90 mt-1">{f.beneficiaries} - Completed {f.date}</p></div></div></div>)}</div>
        <div className="mt-6 text-center"><Link href="/projects" className="inline-block border border-[#111827] px-6 py-3 rounded-full font-bold text-[12px]">View All 45 Projects</Link></div>
      </div>
    </section>

    {/* UPCOMING - DYNAMIC WITH PROGRESS */}
    <section className="px-5 md:px-10 py-14 max-w-[1400px] mx-auto">
      <h2 className="text-[24px] md:text-[32px] font-black">Current Appeals</h2><p className="text-[12px] opacity-60 mt-1">These initiatives are currently fundraising and need support.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-5">{SITE_DATA.upcoming.map((u,i)=>{const pct=Math.round(u.raised/u.goal*100);return<div key={i} className="bg-white rounded-[18px] overflow-hidden border hover:shadow-lg transition"><img src={u.image} className="h-48 w-full object-cover" alt={u.title}/><div className="p-5"><span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full text-[9px] font-black">{u.days} DAYS REMAINING</span><h4 className="font-black mt-3 text-[14px] leading-tight">{u.title}</h4><p className="text-[11px] opacity-60 mt-1">{u.need}</p><div className="mt-4 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-[#B91C2C] rounded-full" style={{width:`${pct}%`}}></div></div><div className="flex justify-between text-[11px] mt-2"><span className="opacity-60">${u.raised} raised of ${u.goal}</span><b>{pct}%</b></div><Link href="/donate" className="mt-4 block bg-[#111827] hover:bg-[#B91C2C] text-white rounded-full py-3 text-center font-black text-[12px] transition">Donate To This Appeal</Link></div></div>})}</div>
    </section>

    {/* VIDEO / FIELD STORIES */}
    <section className="bg-[#111827] text-white py-14 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto"><div className="text-center"><h2 className="text-[24px] md:text-[32px] font-black">Stories From The Field</h2><p className="opacity-60 text-[12px] mt-2">Watch how your support is changing lives in Uganda.</p></div><div className="mt-8 grid md:grid-cols-3 gap-5">{[1,2,3].map(i=><div key={i} onClick={()=>setShowVideo(true)} className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden cursor-pointer hover:bg-white/10 transition"><div className="aspect-video bg-black grid place-items-center relative"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Field video"/><div className="relative w-12 h-12 bg-white rounded-full grid place-items-center text-black font-black">Play</div></div><div className="p-4"><p className="font-bold text-[12px]">Water Point Opening - Kayunga District</p><p className="text-[10px] opacity-60 mt-1">840 residents - March 2025 - 2:34</p></div></div>)}</div></div>
    </section>

    {/* CTA */}
    <section className="bg-[#B91C2C] text-white py-14 px-5 text-center"><img src="/logo.png" className="w-16 h-16 bg-white rounded-full p-2 mx-auto object-contain" alt="Bright Community Logo"/><h2 className="text-[28px] md:text-[42px] font-black leading-[0.9] mt-5">Ready To Build A Stronger Community?</h2><p className="mt-3 opacity-80 text-[12px] max-w-[500px] mx-auto">Your contribution provides clean water, education and skills training. Monthly donors receive field updates and video reports.</p><div className="mt-6 flex justify-center gap-3 flex-wrap"><Link href="/donate" className="bg-white text-[#B91C2C] px-8 py-3.5 rounded-full font-black text-[13px]">Donate Now</Link><Link href="/get-involved" className="bg-white/10 border border-white/20 px-8 py-3.5 rounded-full font-bold text-[13px]">Become A Volunteer</Link></div></section>

    <Footer/>
    {showVideo && <div className="fixed inset-0 bg-black/80 z-[999] grid place-items-center p-4" onClick={()=>setShowVideo(false)}><div className="bg-[#111827] text-white rounded-[16px] p-8 max-w-[600px] w-full text-center border border-white/10" onClick={e=>e.stopPropagation()}><img src="/logo.png" className="w-12 h-12 bg-white rounded-full p-1 mx-auto" alt="logo"/><h3 className="font-black text-[16px] mt-4">Field Video</h3><p className="text-[12px] opacity-60 mt-2">Replace this modal content with your YouTube embed. Example: https://www.youtube.com/embed/YOUR_VIDEO_ID</p><div className="mt-6 aspect-video bg-black rounded-[12px] grid place-items-center text-[11px] opacity-50">YouTube Video Player Here</div><button onClick={()=>setShowVideo(false)} className="mt-6 bg-white text-black px-6 py-2.5 rounded-full font-bold text-[12px]">Close</button></div></div>}

    {/* MOBILE STICKY DONATE */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-3 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"><div className="flex-1 bg-[#FFFBF5] border rounded-full px-4 py-3 text-[13px] flex justify-between items-center"><span className="opacity-60">Donation</span><b className="text-[#B91C2C]">${amount} {freq==='monthly'?'/mo':''}</b></div><Link href="/donate" className="bg-[#B91C2C] text-white px-8 py-3 rounded-full font-black text-[13px]">Donate</Link></div>
  </main>
  )
}

