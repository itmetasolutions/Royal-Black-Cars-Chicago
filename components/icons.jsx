export const Check = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M8 14.5 3.8 10.3l1.4-1.4L8 11.7l6.8-6.8 1.4 1.4z" /></svg>);
export const Star = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8z" /></svg>);
export const Car = (p) => (<svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path d="M3 15v-3.2L5.2 7A2 2 0 0 1 7 6h10a2 2 0 0 1 1.8 1L21 11.8V15h-2.1a3 3 0 0 0-5.8 0h-2.2a3 3 0 0 0-5.8 0H3Zm3.4-4h11.2l-1.6-3H8Z" /></svg>);
export const Seat = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><circle cx="10" cy="6" r="3" /><path d="M4 17c0-3.3 2.7-5 6-5s6 1.7 6 5" /></svg>);
export const Bag = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M4 7h12v9H4z" /><path d="M8 7V4h4v3" /></svg>);
export const Stars = () => (<div className="st">{[0,1,2,3,4].map(i => <Star key={i} />)}</div>);
export const Clock = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="10" cy="10" r="7.5" /><path d="M10 6v4.2l3 1.8" strokeLinecap="round" /></svg>);
export const Shield = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M10 1.5 17 4v5.2c0 4.4-3 7.7-7 9.3-4-1.6-7-4.9-7-9.3V4Z" /></svg>);
export const Pin = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M10 1.8c-3 0-5.4 2.4-5.4 5.4 0 4 5.4 10.6 5.4 10.6s5.4-6.6 5.4-10.6c0-3-2.4-5.4-5.4-5.4Zm0 7.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z" /></svg>);
export const Phone = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M4.4 2.5 7.6 3l.9 3.4-1.9 1.5c.8 1.9 2.3 3.4 4.2 4.2l1.5-1.9 3.4.9.5 3.2c-.2 1-1.1 1.7-2.1 1.6C7.9 15.4 4.6 12.1 4 5.9c-.1-1 .6-1.9 1.6-2.1Z" /></svg>);
export const Route = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="4.5" cy="15.5" r="1.8" /><circle cx="15.5" cy="4.5" r="1.8" /><path d="M6 15h5a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3H9a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3h5" strokeDasharray="2.2 2.2" /></svg>);
export const Plane = (p) => (<svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" /></svg>);
export const Tag = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M2 2h7l9 9-7 7-9-9V2Z" /><circle cx="6" cy="6" r="1.3" fill="var(--card,#fff)" /></svg>);

export const Facebook = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...p}><path d="M12.7 3.4h-1.6c-1.9 0-3.1 1.2-3.1 3.2v1.5H6.3v2.6H8v6.4h2.7v-6.4h1.9l.3-2.6h-2.2V6.9c0-.7.2-1.2 1.3-1.2h1.2V3.4Z" /></svg>);
export const Instagram = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect x="2.5" y="2.5" width="15" height="15" rx="4.5" /><circle cx="10" cy="10" r="3.6" /><circle cx="14.3" cy="5.7" r="1" fill="currentColor" stroke="none" /></svg>);
export const XformerlyTwitter = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...p}><path d="M3 3h3.4l3.1 4.3L13.1 3H16l-5 5.8L16.4 17H13l-3.4-4.6L5.4 17H2.5l5.4-6.3z" /></svg>);
export const LinkedIn = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...p}><path d="M3.2 6.6h2.9V17H3.2zm1.45-4.6a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM8.2 6.6h2.8v1.4h.04c.4-.7 1.35-1.4 2.76-1.4 2.95 0 3.5 1.9 3.5 4.4V17h-2.9v-4.4c0-1.05-.02-2.4-1.5-2.4-1.5 0-1.73 1.1-1.73 2.33V17H8.2Z" /></svg>);
