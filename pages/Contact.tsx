import React, { useEffect, useRef } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
}

const Contact: React.FC<Props> = ({ navigate }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            if (!mapRef.current || !(window as any).google) return;
            try {
                const { Map } = await (window as any).google.maps.importLibrary("maps");
                const { AdvancedMarkerElement, PinElement } = await (window as any).google.maps.importLibrary("marker");

                const locations = [
                    { lat: -22.4571, lng: -43.4803, title: "Miguel Pereira" },
                    { lat: -22.8144, lng: -43.2045, title: "Ilha do Governador" }
                ];

                const map = new Map(mapRef.current, {
                    center: { lat: -22.63, lng: -43.34 },
                    zoom: 9,
                    mapId: 'SONIA_CONTACT_MAP',
                    disableDefaultUI: true,
                    zoomControl: true
                });

                locations.forEach(loc => {
                    const pin = new PinElement({ background: "#DB2777", glyphColor: "white" });
                    new AdvancedMarkerElement({ map, position: {lat: loc.lat, lng: loc.lng}, content: pin.element, title: loc.title });
                });
            } catch (e) { console.error(e); }
        };
        initMap();
    }, []);

    return (
        <div className="animate-fade-in bg-white min-h-screen pb-24">
            <header className="bg-slate-900 text-white px-6 py-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>
                <h1 className="text-4xl font-heading font-bold mb-4 relative z-10">Contato & Unidades</h1>
                <p className="text-slate-400 relative z-10">Agende sua visita em um de nossos consultórios.</p>
            </header>

            <div className="container mx-auto px-6 -mt-8 relative z-20 space-y-8">
                {/* Locations Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-4">
                        <div className="bg-pink-100 text-pink-600 p-3 rounded-2xl shrink-0">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Miguel Pereira</h3>
                            <p className="text-sm text-slate-500 mb-4">Centro, Rio de Janeiro - RJ</p>
                            <a href="https://maps.google.com" target="_blank" className="text-pink-600 text-xs font-bold uppercase flex items-center gap-1">
                                Ver no Google Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl shrink-0">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Ilha do Governador</h3>
                            <p className="text-sm text-slate-500 mb-4">Jardim Guanabara, Rio de Janeiro - RJ</p>
                            <a href="https://maps.google.com" target="_blank" className="text-blue-600 text-xs font-bold uppercase flex items-center gap-1">
                                Ver no Google Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Interactive Map */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-inner border border-slate-100 h-80 bg-slate-50">
                    <div ref={mapRef} className="w-full h-full grayscale"></div>
                </div>

                {/* Contact List */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 text-center">Fale Conosco</h3>
                    <div className="grid gap-4">
                        <a 
                            href="https://wa.me/5521992717217" 
                            target="_blank"
                            className="w-full bg-green-500 text-white p-5 rounded-2xl flex items-center justify-between font-bold text-lg active:scale-95 transition-transform"
                        >
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-3xl">chat</span>
                                WhatsApp
                            </div>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a 
                            href="mailto:soniarosa.psi@email.com" 
                            className="w-full bg-slate-800 text-white p-5 rounded-2xl flex items-center justify-between font-bold text-lg active:scale-95 transition-transform"
                        >
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                                Email Profissional
                            </div>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Appointment CTA */}
                <div className="py-8">
                    <button 
                        onClick={() => navigate(Page.APPOINTMENT)}
                        className="w-full bg-pink-600 text-white p-6 rounded-[2rem] font-bold text-xl shadow-lg shadow-pink-100 active:scale-95 transition-transform flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined">event_available</span>
                        Reservar Horário
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;